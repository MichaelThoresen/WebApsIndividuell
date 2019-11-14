using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VyFaQ2.Model.DTO;

namespace VyFaQ2.Model.DB.Repositories
{
    public interface IFAQrepo
    {
        List<Question> FindAllQuestions();

        List<QuestionDTO> GetQuestionDTOs();

        QuestionDTO MapQuestionDTO(Question q);

        void UpdateQuestion(int Id, int Rating);

        Question MapQuestion(QuestionDTO q);

        bool CreateQuestion(QuestionDTO q);
    }
}
