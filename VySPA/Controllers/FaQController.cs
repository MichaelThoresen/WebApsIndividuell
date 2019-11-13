using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VySPA.Db.Repository;
using VySPA.Models.DTO;
using VySPA.Models.Entities;

namespace VySPA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FaQController : ControllerBase
    {
        private readonly FAQrepo _repo;

        public FaQController (FAQrepo faqrepo)
        {
            _repo = faqrepo;
        }

        [HttpGet("[action]")]
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