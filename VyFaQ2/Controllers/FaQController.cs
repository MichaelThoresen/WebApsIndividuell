using VyFaQ2.Model.DB.Repositories;
using VyFaQ2.Model.DTO;

namespace VyFaQ2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FaQController : ControllerBase
    {
        private readonly IFAQrepo _repo;

        public FaQController(IFAQrepo repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public List<QuestionDTO> Questions()
        {
            return _repo.GetQuestionDTOs();
        }

        [HttpPut("{id}")]
        public void UpdateRating(int id, int Rating)
        {
            _repo.UpdateQuestion(id, Rating);
        }
    }
}