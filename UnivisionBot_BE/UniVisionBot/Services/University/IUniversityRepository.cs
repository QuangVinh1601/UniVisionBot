using UniVisionBot.DTOs.University;
using UniVisionBot.Models;

namespace UniVisionBot.Services.Universities
{
    public interface IUniversityRepository 
    {
        Task Create(University request);
    }
}
