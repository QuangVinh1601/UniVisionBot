using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace UniVisionBot.Models
{
    public class Major
    {
        [Key]
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string FacultyId { get; set; }
        [ForeignKey(nameof(FacultyId))]
        public virtual Faculty Faculty { get; set; }
        public string CareerPathId { get; set; }
        [ForeignKey(nameof(CareerPathId))]
        public virtual CareerPath CareerPath { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Level { get; set; }
        public int Duration { get; set; }
        public decimal TuitionFee { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
