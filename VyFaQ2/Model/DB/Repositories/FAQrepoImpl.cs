using VyFaQ2.Model.DTO;
using VyFaQ2.Model.Entities;

namespace VyFaQ2.Model.DB.Repositories
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
            foreach (var q in Questions)
            {
                var Q = MapQuestionDTO(q);
                dtos.Add(Q);
            }

            return dtos;
        }

        public void UpdateQuestion(int Id, int Rating)
        {
            var entity = _context.Question.FirstOrDefault(question => question.Id == Id);
            if (entity != null)
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

        public bool CreateQuestion(UserQuestionDTO q)
        {
            var question = MapUserQuestion(q);
            try
            {
                _context.UserQuestion.Add(question);
                _context.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                System.Console.WriteLine(e);
                return false;
            }
        }

        public UserQuestion MapUserQuestion(UserQuestionDTO q)
        {
            return new UserQuestion
            {
                Id = q.Id,
                QuestionText = q.QuestionText,
                Email = q.Email,
                Name = q.Name
            };
        }

        public List<UserQuestion> FindAllUserQuestions()
        {
            return _context.UserQuestion.ToList();
        }

        public UserQuestionDTO MapUserQuestionDTO(UserQuestion q)
        {
            return new UserQuestionDTO
            {
                Id = q.Id,
                QuestionText = q.QuestionText,
                Email = q.Email,
                Name = q.Name
            };
        }

        public List<UserQuestionDTO> GetUserQuestionDTOs()
        {
            List<UserQuestion> questions = FindAllUserQuestions();
            var dtos = new List<UserQuestionDTO>();
            foreach (var q in questions)
            {
                var dto = MapUserQuestionDTO(q);
                dtos.Add(dto);
            }
            return dtos;
        }
    }
}
