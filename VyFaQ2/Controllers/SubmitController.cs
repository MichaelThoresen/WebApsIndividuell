using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VyFaQ2.Model.DB.Repositories;
using VyFaQ2.Model.DTO;
using VyFaQ2.Model.Entities;

namespace VyFaQ2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubmitController : ControllerBase
    {
        private readonly IFAQrepo _repo;

        public SubmitController(IFAQrepo repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public List<UserQuestionDTO> GetUserQuestions()
        {
            return _repo.GetUserQuestionDTOs();
        }

        [HttpPost]
        public bool SubmitUserQuestion(UserQuestionDTO q)
        {
            return _repo.CreateQuestion(q);
        }

    }
}