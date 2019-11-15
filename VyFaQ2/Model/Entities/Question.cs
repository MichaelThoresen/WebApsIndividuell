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
