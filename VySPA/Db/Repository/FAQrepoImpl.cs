using System;
using System.Collections.Generic;
using System.Linq;
using VySPA.Models.DTO;
using VySPA.Models.Entities;

namespace VySPA.Db.Repository
{
    public class FAQrepoImpl : IFAQrepo
    {
        private readonly FaQDbContext _context;

        public FAQrepoImpl(FaQDbContext FaQ)
        {
            _context = FaQ;
        }
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
                var Q = MapQuestionDTO(q);
                dtos.Add(Q);
            }

            return dtos;
        }

        public void UpdateQuestion(int Id, int Rating)
        {
            var entity = _context.Question.FirstOrDefault(question => question.Id == Id);
            if(entity != null)
            {
                entity.Rating = Rating;

                _context.Question.Update(entity);

                _context.SaveChanges();
                
            }
        }

        public Question MapQuestion(QuestionDTO q)
        {
            return new Question
            {
                Id = q.Id,
                QuestionText = q.QuestionText,
                AnswerText = q.AnswerText,
                Rating = q.Rating
            };
        }

        public bool CreateQuestion(QuestionDTO q)
        {
            var question = MapQuestion(q);
            try
            {
                _context.Question.Add(question);
                _context.SaveChanges();
                return true;
            } catch(Exception e)
            {
                System.Console.WriteLine(e);
                return false;
            }
        }
    }
}
