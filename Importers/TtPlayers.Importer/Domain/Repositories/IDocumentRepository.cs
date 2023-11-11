using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TtPlayers.Importer.Domain.Models;

namespace TtPlayers.Importer.Domain.Repositories
{
    public interface IDocumentRepository<TDocument> where TDocument : IDocument
    {
        void EnsureIndex(IndexKeysDefinition<TDocument> indexKeys, CreateIndexOptions options);
        public IQueryable<TDocument> AsQueryable();
        ValueTask<IList<TDocument>> ToListAsync(IQueryable<TDocument> query);
        Task<List<TDocument>> FilterByAsync(
            Expression<Func<TDocument, bool>> filterExpression);

        Task<List<TDocument>> FilterByFilterDefinitionAsync(FilterDefinition<TDocument> filter);

        Task<List<TDocument>> FilterByAsyncOrderByDesending(Expression<Func<TDocument, bool>> filterExpression, Expression<Func<TDocument, object>> field, int skip = 0, int limit = 50);
        public Task<List<TProjected>> FilterByAsync<TProjected>(
            Expression<Func<TDocument, bool>> filterExpression,
            Expression<Func<TDocument, TProjected>> projectionExpression);
        public IAsyncEnumerable<IEnumerable<TDocument>> FindAllAsync(Expression<Func<TDocument, bool>> filterExpression, int batchSize);
        public Task<TDocument> FindOneAsync(Expression<Func<TDocument, bool>> filterExpression);
        public Task<TDocument> FindByIdAsync(string id);
        public Task InsertOneAsync(TDocument document);
        Task InsertManyAsync(IList<TDocument> documents, bool isOrdered = true);
        public Task DeleteOneAsync(Expression<Func<TDocument, bool>> filterExpression);
        public Task DeleteByIdAsync(string id);
        public Task DeleteManyAsync(Expression<Func<TDocument, bool>> filterExpression);
        Task DeleteAllAsync();
        Task<bool> ReplaceOneAsync(TDocument document, Expression<Func<TDocument, bool>> filterExpression);
        Task<bool> UpsertManyAsync(IList<TDocument> documents);
        Task<bool> UpsertAsync(TDocument document, Expression<Func<TDocument, bool>> filterExpression);
        Task<List<TProjected>> GroupByAsync<TProjected>(BsonDocument groupBsonDocument);

        Task<long> CountAllAsync();

        Task<long> CountAsync(Expression<Func<TDocument, bool>> filterExpression);
    }

}

