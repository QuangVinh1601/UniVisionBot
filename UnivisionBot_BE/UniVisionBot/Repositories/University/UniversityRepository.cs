using Microsoft.Extensions.Options;
using MongoDB.Driver;
using UniVisionBot.Configurations.DbConfig;
using UniVisionBot.DTOs.University;
using UniVisionBot.Models;
using UniVisionBot.Services.Universities;

namespace UniVisionBot.Repositories.Universities
{
    public class UniversityRepository : IUniversityRepository
    {
        private readonly IMongoCollection<University> _universityCollection;
        private readonly IOptions<MyDatabase> _options;
        public UniversityRepository(IOptions<MyDatabase> options)
        {
            _options = options;
            var mongoClient = new MongoClient(_options.Value.ConnectionString);
            var database =  mongoClient.GetDatabase(_options.Value.DatabaseName);
            _universityCollection = database.GetCollection<University>(_options.Value.UniversityCollectionName);
        }

        public async Task Create(University request)
        {
           await  _universityCollection.InsertOneAsync(request);
        }
    }
}
