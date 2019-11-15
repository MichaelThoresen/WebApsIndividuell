using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VyFaQ2.Model.DB.Repositories;
using VyFaQ2.Model.DTO;
using VyFaQ2.Model.Entities;

namespace VyFaQ2.Model.DB
{
    public class FaQDbContext : DbContext
    {
        public FaQDbContext(DbContextOptions<FaQDbContext> options)
            : base(options)
        {
        }
        public DbSet<Question> Question { get; set; }
        public DbSet<UserQuestion> UserQuestion { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Question>().HasData(
                new Question
                {
                    Id = 1,
                    QuestionText = "What is a travel payment card?",
                    AnswerText = "With a travel payment card you can travel within the Oslo and Akershus region on Vy and Ruter transportation using “refillable” electronic tickets. Vy and Ruter cooperate on the electronic travel payment card system.",
                    Rating = 0
                },
               new Question
               {
                   Id = 2,
                   QuestionText = "How long ahead of departure can I purchase a train ticket?",
                   AnswerText = "Tickets are released for sale 90 days before departure. There may be shorter sales periods if there is planned work on the train’s route or in connection with route changes in June and December.",
                   Rating = 0
               },
                new Question
                {
                    Id = 3,
                    QuestionText = "Do you have a pet-free zone for allergy sufferers?",
                    AnswerText = "Our trains have a pet-free zone where animals are not permitted. On trains with seat reservations you can reserve a seat in a pet - free zone; on trains without seat reservations you will find a car displaying the “pet - free” symbol.",
                    Rating = 0
                },
                new Question
                {
                    Id = 4,
                    QuestionText = "How do I retrieve tickets purchased via vy.no?",
                    AnswerText = "The easiest way to retrieve tickets purchased online at vy.no is through the Vy app. Tickets may also be downloaded as a PDF or retrieved on board the train or at a ticket vending machine, a staffed station, or select Narvesen convenience-store kiosks.",
                    Rating = 0
                }
            );
        }
    }
}
