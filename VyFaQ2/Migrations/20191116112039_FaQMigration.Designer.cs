﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using VyFaQ2.Model.DB;

namespace VyFaQ2.Migrations
{
    [DbContext(typeof(FaQDbContext))]
    [Migration("20191116112039_FaQMigration")]
    partial class FaQMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("VyFaQ2.Model.DB.Question", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AnswerText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("QuestionText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Rating")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Question");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            AnswerText = "With a travel payment card you can travel within the Oslo and Akershus region on Vy and Ruter transportation using “refillable” electronic tickets. Vy and Ruter cooperate on the electronic travel payment card system.",
                            QuestionText = "What is a travel payment card?",
                            Rating = 0
                        },
                        new
                        {
                            Id = 2,
                            AnswerText = "Tickets are released for sale 90 days before departure. There may be shorter sales periods if there is planned work on the train’s route or in connection with route changes in June and December.",
                            QuestionText = "How long ahead of departure can I purchase a train ticket?",
                            Rating = 0
                        },
                        new
                        {
                            Id = 3,
                            AnswerText = "Our trains have a pet-free zone where animals are not permitted. On trains with seat reservations you can reserve a seat in a pet - free zone; on trains without seat reservations you will find a car displaying the “pet - free” symbol.",
                            QuestionText = "Do you have a pet-free zone for allergy sufferers?",
                            Rating = 0
                        },
                        new
                        {
                            Id = 4,
                            AnswerText = "The easiest way to retrieve tickets purchased online at vy.no is through the Vy app. Tickets may also be downloaded as a PDF or retrieved on board the train or at a ticket vending machine, a staffed station, or select Narvesen convenience-store kiosks.",
                            QuestionText = "How do I retrieve tickets purchased via vy.no?",
                            Rating = 0
                        });
                });

            modelBuilder.Entity("VyFaQ2.Model.Entities.UserQuestion", b =>
                {
                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("QuestionText")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Email");

                    b.ToTable("UserQuestion");

                    b.HasData(
                        new
                        {
                            Email = "Funnygai@Funneh.com",
                            Name = "Funny McFunnison",
                            QuestionText = "How do you uninstall the Vy app"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
