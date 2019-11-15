namespace VyFaQ2.Model.DTO
{
    public class UserQuestionDTO
    {
        [Key]
        public int Id { get; set; }
        public String QuestionText { get; set; }

        public String Email { get; set; }

        public String Name { get; set; }
    }
}
