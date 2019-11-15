using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VyFaQ2.Model.DTO;
using VyFaQ2.Model.Entities;

namespace VyFaQ2.Model.DB.Repositories
{
    public interface IFAQrepo
    {
        List<Question> FindAllQuestions();

        List<QuestionDTO> GetQuestionDTOs();

        QuestionDTO MapQuestionDTO(Question q);

        void UpdateQuestion(int Id, int Rating);

        Question MapQuestion(QuestionDTO q);

        bool CreateQuestion(UserQuestionDTO q);

        UserQuestion MapUserQuestion(UserQuestionDTO q);

        UserQuestionDTO MapUserQuestionDTO(UserQuestion q);

        List<UserQuestionDTO> GetUserQuestionDTOs();

        List<UserQuestion> FindAllUserQuestions();
    }
}
