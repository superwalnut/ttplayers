﻿using Google.Cloud.Firestore;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Configurations;
using TtPlayers.Importer.Domain.Attributes;
using TtPlayers.Importer.Domain.Models;

namespace TtPlayers.Importer.Domain.Repositories
{
    public interface IFireBaseRepository<TDocument>
    {
        Task<TDocument> Add(TDocument record);
        Task<bool> Update(TDocument record);
        Task<bool> Delete(TDocument record);
        Task<TDocument> Get(TDocument record);

        Task<List<TDocument>> GetAll();

        Task<List<TDocument>> QueryRecords(Query query);
    }

    public class FireBaseRepository<TDocument> : IFireBaseRepository<TDocument> where TDocument : IDocument
    {
        private const string ENV_APP_CREDENTIALS = "GOOGLE_APPLICATION_CREDENTIALS";
        private FirestoreDb _fireStoreDb;
        private CollectionReference _collection;
        public FireBaseRepository(FireStoreSettings config)
        {
            string path = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), @"FireStore", config.CertificateFilePath);
            Environment.SetEnvironmentVariable(ENV_APP_CREDENTIALS, path);
            _fireStoreDb = FirestoreDb.Create(config.ProjectId);
            var collectionName = GetCollectionName(typeof(TDocument));
            _collection = _fireStoreDb.Collection(collectionName);
        }

        public async Task<TDocument> Add(TDocument record)
        {
            DocumentReference doc = await _collection.AddAsync(record);
            return record;
        }

        public async Task<bool> Update(TDocument record)
        {
            DocumentReference recordRef = _collection.Document(record.Id);
            await recordRef.SetAsync(record, SetOptions.MergeAll);
            return true;
        }
        public async Task<bool> Delete(TDocument record)
        {
            DocumentReference recordRef = _collection.Document(record.Id);
            await recordRef.DeleteAsync();
            return true;
        }

        public async Task<TDocument> Get(TDocument record)
        {
            DocumentReference docRef = _collection.Document(record.Id);
            DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();
            if (snapshot.Exists)
            {
                TDocument usr = snapshot.ConvertTo<TDocument>();
                usr.Id = snapshot.Id;
                return usr;
            }
            else
            {
                return default(TDocument);
            }
        }

        public async Task<List<TDocument>> GetAll()
        {
            QuerySnapshot querySnapshot = await _collection.GetSnapshotAsync();
            var list = new List<TDocument>();
            foreach (DocumentSnapshot documentSnapshot in querySnapshot.Documents)
            {
                if (documentSnapshot.Exists)
                {
                    Dictionary<string, object> city = documentSnapshot.ToDictionary();
                    string json = JsonConvert.SerializeObject(city);
                    var newItem = JsonConvert.DeserializeObject<TDocument>(json);
                    newItem.Id = documentSnapshot.Id;
                    list.Add(newItem);
                }
            }
            return list;
        }
        public async Task<List<TDocument>> QueryRecords(Query query)
        {
            QuerySnapshot querySnapshot = await query.GetSnapshotAsync();
            List<TDocument> list = new List<TDocument>();
            foreach (DocumentSnapshot documentSnapshot in querySnapshot.Documents)
            {
                if (documentSnapshot.Exists)
                {
                    Dictionary<string, object> city = documentSnapshot.ToDictionary();
                    string json = JsonConvert.SerializeObject(city);
                    TDocument newItem = JsonConvert.DeserializeObject<TDocument>(json);
                    newItem.Id = documentSnapshot.Id;
                    list.Add(newItem);
                }
            }
            return list;
        }

        private protected string GetCollectionName(Type documentType)
        {
            return ((BsonCollectionAttribute)documentType.GetCustomAttributes(
                    typeof(BsonCollectionAttribute),
                    true)
                .FirstOrDefault())?.CollectionName;
        }

    }
}
