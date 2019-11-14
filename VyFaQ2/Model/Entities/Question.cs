using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VyFaQ2.Model.DB
{
    public class Question
    {
        [Key]
        public int Id { get; set; }

        public String QuestionText { get; set; }

        public String AnswerText { get; set; }

        public int Rating { get; set; }
    }
}
