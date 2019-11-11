using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VySPA.Models.Entities;

namespace VySPA.Db
{
    public class FaQDbContext : DbContext
    {
        public FaQDbContext(DbContextOptions<FaQDbContext> options)
            : base(options)
        {
        }
        public DbSet<Question> Question { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Question>().HasData(
                new Question
                {
                    QuestionText= "",
                    AnswerText= "",
                    Rating = 0
                },
                new Question
                {
                    QuestionText = "",
                    AnswerText = "",
                    Rating = 0
                },
                new Question
                {
                    QuestionText = "",
                    AnswerText = "",
                    Rating = 0
                },
                new Question
                {
                    QuestionText = "",
                    AnswerText = "",
                    Rating = 0
                },
                new Question
                {
                    QuestionText = "",
                    AnswerText = "",
                    Rating = 0
                }
            );
        }

    }
}
