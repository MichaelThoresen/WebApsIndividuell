using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VySPA.Models.DTO;
using VySPA.Models.Entities;

namespace VySPA.Db.Repository
{
    public class FAQrepoImpl : FAQrepo
    {
        private readonly FaQDbContext _context;
        public List<Question> FindAllQuestions()
        {
            return _context.Question.ToList();
        }

        public QuestionDTO MapQuestionDTO(Question q)
        {
            return new QuestionDTO
            {
                Id = q.Id,
                QuestionText = q.QuestionText,
                AnswerText = q.AnswerText,
                Rating = q.Rating
            };
        }

        public List<QuestionDTO> GetQuestionDTOs()
        {
            List<Question> Questions = FindAllQuestions();
            var dtos = new List<QuestionDTO>();
            foreach(var q in Questions)
            {
                MapQuestionDTO(q);
            }

            return dtos;
        }
    }
}
