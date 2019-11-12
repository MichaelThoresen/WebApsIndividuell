using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VySPA.Models.DTO
{
    public class QuestionDTO
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public String QuestionText { get; set; }

        [Required]
        public String AnswerText { get; set; }

        [Required]
        public int Rating { get; set; }
    }
}
