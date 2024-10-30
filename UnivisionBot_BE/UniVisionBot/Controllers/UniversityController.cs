using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UniVisionBot.DTOs.University;
using UniVisionBot.Models;
using UniVisionBot.Services.Universities;

namespace UniVisionBot.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UniversityController : ControllerBase
    {
        private readonly IUniversityRepository _universityRepository;
        public UniversityController(IUniversityRepository universityRepository)
        {
            _universityRepository = universityRepository;
        }
        [HttpPost]
        public async Task<IActionResult> CreateNewUniversity(UniversityRequest model)
        {
            if (!ModelState.IsValid)
            { 
                return BadRequest(ModelState);
            }
            var university = new University()
            {
                Description = model.Description,
                Name = model.Name,
                Location = model.Location,
                Ranking = model.Ranking,
                TuitionFee = model.TuitionFee,
                ScholarshipsAvailable = model.ScholarshipsAvailable,
            };
            await _universityRepository.Create(university);
            
            return Ok(university);

        }
    }
}
