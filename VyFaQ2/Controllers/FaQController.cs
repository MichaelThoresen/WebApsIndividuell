using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

        [HttpPut("[action]")]
        public void UpdateRating(int Id, int Rating)
        {
            _repo.UpdateQuestion(Id, Rating);
        }

        [HttpPost("[action]")]
        public bool CreateQuestion(QuestionDTO q)
        {
            return _repo.CreateQuestion(q);
        }
    }
}