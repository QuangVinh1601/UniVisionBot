using System.ComponentModel.DataAnnotations;

namespace UniVisionBot.DTOs.University
{
    public class UniversityRequest
    {
        [Required(ErrorMessage = "Name is required.")]
        [StringLength(100, ErrorMessage = "Name can't be longer than 100 characters.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Location is required.")]
        [StringLength(100, ErrorMessage = "Location can't be longer than 100 characters.")]
        public string Location { get; set; }

        [StringLength(500, ErrorMessage = "Description can't be longer than 500 characters.")]
        public string Description { get; set; }

        [Range(1, 1000, ErrorMessage = "Ranking must be between 1 and 1000.")]
        public int Ranking { get; set; }

        [Range(0, double.MaxValue, ErrorMessage = "Tuition Fee must be a positive value.")]
        public decimal TuitionFee { get; set; }

        [Required(ErrorMessage = "ScholarshipsAvailable is required.")]
        public bool ScholarshipsAvailable { get; set; }
    }
}
