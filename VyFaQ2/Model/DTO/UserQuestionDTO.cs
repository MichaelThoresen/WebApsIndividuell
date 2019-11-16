using System;
using System.ComponentModel.DataAnnotations;

namespace VyFaQ2.Model.DTO
{
    public class UserQuestionDTO
    {
        [Key]
        [EmailAddress]
        [Required]
        public String Email { get; set; }

        [Required]
        public String QuestionText { get; set; }

        [Required]
        public String Name { get; set; }
    }
}
