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

        QuestionDTO MapQuestionDTO();
    }
}
