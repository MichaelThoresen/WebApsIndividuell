using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VySPA.Models.DTO;
using VySPA.Models.Entities;

namespace VySPA.Db.Repository
{
    public interface FAQrepo
    {
        List<Question> FindAllQuestions();

        List<QuestionDTO> GetQuestionDTOs();

        QuestionDTO MapQuestionDTO(Question q);

        void UpdateQuestion(int Id, int Rating);

        Question MapQuestion(QuestionDTO q);

        bool CreateQuestion(QuestionDTO q);
    }
}
