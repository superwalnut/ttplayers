using Amazon.Runtime.Internal.Util;
using Microsoft.Extensions.Logging;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using System.Linq.Expressions;
using TtPlayers.Importer.Configurations;
using TtPlayers.Importer.Domain.Attributes;
using TtPlayers.Importer.Domain.Models;

namespace TtPlayers.Importer.Domain.Repositories
{
    public class MongoDbRepository<TDocument> : IDocumentRepository<TDocument> where TDocument : IDocument
    {
        private readonly IMongoCollection<TDocument> _collection;
        private readonly ILogger<MongoDbRepository<TDocument>> _logger;

        public MongoDbRepository(IMongoClient mongoClient, MongoDbSettings settings, ILogger<MongoDbRepository<TDocument>> logger)
        {
            _logger = logger;
            var database = mongoClient.GetDatabase(settings.DatabaseName);
            _collection = database.GetCollection<TDocument>(GetCollectionName(typeof(TDocument)));
        }

        private protected string GetCollectionName(Type documentType)
        {
            return ((BsonCollectionAttribute)documentType.GetCustomAttributes(
                    typeof(BsonCollectionAttribute),
                    true)
                .FirstOrDefault())?.CollectionName;
        }

        public virtual void EnsureIndex(IndexKeysDefinition<TDocument> indexKeys, CreateIndexOptions indexOptions)
        {
            var indexModel = new CreateIndexModel<TDocument>(indexKeys, indexOptions);
            _collection.Indexes.CreateOne(indexModel);
        }

        public virtual IQueryable<TDocument> AsQueryable()
        {
            return _collection.AsQueryable();
        }

        public virtual async ValueTask<IList<TDocument>> ToListAsync(IQueryable<TDocument> query)
        {
            if (query is IMongoQueryable<TDocument> mongodbQuery)
            {
                return await mongodbQuery.ToListAsync();
            }
            return query.ToList();
        }

        public virtual async Task<List<TDocument>> FilterByAsync(
            Expression<Func<TDocument, bool>> filterExpression)
        {
            return await _collection.Find(filterExpression).ToListAsync();
        }

        public virtual async Task<List<TDocument>> FilterByAsyncOrderByDesending(Expression<Func<TDocument, bool>> filterExpression, Expression<Func<TDocument, object>> field, int skip =0, int limit = 50)
        {
            return await _collection.Find(filterExpression).SortByDescending(field).Skip(skip).Limit(limit).ToListAsync();
        }

        public virtual Task<List<TProjected>> FilterByAsync<TProjected>(
            Expression<Func<TDocument, bool>> filterExpression,
            Expression<Func<TDocument, TProjected>> projectionExpression)
        {
            return _collection.Find(filterExpression).Project(projectionExpression).ToListAsync();
        }

        public async Task<List<TProjected>> GroupByAsync<TProjected>(BsonDocument groupBsonDocument)
        {
            var pipeline = _collection.Aggregate()
                .Group(groupBsonDocument);
            var bsonDocs = await pipeline.ToListAsync();
            var models = bsonDocs.Select(x => BsonSerializer.Deserialize<TProjected>(x)).ToList();
            return models;
        }

        public async IAsyncEnumerable<IEnumerable<TDocument>> FindAllAsync(Expression<Func<TDocument, bool>> filterExpression, int batchSize)
        {
            var cursor = await _collection.FindAsync(filterExpression, new FindOptions<TDocument>
            {
                BatchSize = batchSize
            });
            while (await cursor.MoveNextAsync())
            {
                yield return cursor.Current;
            }
        }

        public virtual async Task<TDocument> FindOneAsync(Expression<Func<TDocument, bool>> filterExpression)
        {
            return await _collection.Find(filterExpression).FirstOrDefaultAsync();
        }

        public virtual async Task<TDocument> FindByIdAsync(string id)
        {
            var filter = Builders<TDocument>.Filter.Eq(doc => doc.Id, id);
            return await _collection.Find(filter).SingleOrDefaultAsync();
        }

        public virtual async Task InsertOneAsync(TDocument document)
        {
            await _collection.InsertOneAsync(document);
        }

        public virtual async Task InsertManyAsync(IList<TDocument> documents, bool isOrdered = true)
        {
            await _collection.InsertManyAsync(documents, new InsertManyOptions
            {
                IsOrdered = isOrdered
            });
        }

        public virtual async Task<bool> ReplaceOneAsync(TDocument document, Expression<Func<TDocument, bool>> filterExpression)
        {
            var result = await _collection.ReplaceOneAsync(filterExpression, document);
            return result.ModifiedCount > 0;
        }

        public virtual async Task<bool> UpsertAsync(TDocument document,
            Expression<Func<TDocument, bool>> filterExpression)
        {
            var result =
                await _collection.ReplaceOneAsync(filterExpression, document, new ReplaceOptions() { IsUpsert = true });
            return result.ModifiedCount > 0;
        }

        public virtual async Task<bool> UpsertManyAsync(IList<TDocument> documents)
        {
            var batches = CreateBatches(documents);
            long resultCount = 0;
            var index = 0;
            _logger.LogInformation($"UpsertMany {batches.Count} batches.");
            foreach (var batch in batches)
            {
                var bulkWrites = new List<WriteModel<TDocument>>();
                foreach (var document in batch.Value)
                {
                    var filter = Builders<TDocument>.Filter.Eq(p => p.Id, document.Id);
                    var replaceOne = new ReplaceOneModel<TDocument>(filter, document);
                    bulkWrites.Add(replaceOne);
                    _logger.LogInformation($"Add document:{document.Id} to batch-{index}.");
                }

                var result = await _collection.BulkWriteAsync(bulkWrites);
                resultCount += result.ModifiedCount;
                _logger.LogInformation($"Finished bulk writting batch-{index}.");
                index++;
            }

            return resultCount == documents.Count;
        }

        public async Task DeleteOneAsync(Expression<Func<TDocument, bool>> filterExpression)
        {
            await _collection.FindOneAndDeleteAsync(filterExpression);
        }

        public async Task DeleteByIdAsync(string id)
        {
            var filter = Builders<TDocument>.Filter.Eq(doc => doc.Id, id);
            await _collection.FindOneAndDeleteAsync(filter);
        }

        public async Task DeleteManyAsync(Expression<Func<TDocument, bool>> filterExpression)
        {
            await _collection.DeleteManyAsync(filterExpression);
        }

        public async Task DeleteAllAsync()
        {
            var filter = Builders<TDocument>.Filter.Empty;
            await _collection.DeleteManyAsync(filter);
        }

        private Dictionary<int, IList<TDocument>> CreateBatches(IList<TDocument> documents)
        {
            var batches = new Dictionary<int, IList<TDocument>>();

            int batchSize = 500;

            for (int i = 0; i < documents.Count; i += batchSize)
            {
                IList<TDocument> batch = documents.Skip(i).Take(batchSize).ToList();
                batches.Add(i, batch);
            }

            return batches;
        }
    }
}
