using Microsoft.EntityFrameworkCore.Migrations;

namespace VyFaQ2.Migrations
{
    public partial class FaQMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Question",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    QuestionText = table.Column<string>(nullable: true),
                    AnswerText = table.Column<string>(nullable: true),
                    Rating = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Question", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Question",
                columns: new[] { "Id", "AnswerText", "QuestionText", "Rating" },
                values: new object[,]
                {
                    { 1, "With a travel payment card you can travel within the Oslo and Akershus region on Vy and Ruter transportation using “refillable” electronic tickets. Vy and Ruter cooperate on the electronic travel payment card system.", "What is a travel payment card?", 0 },
                    { 2, "Tickets are released for sale 90 days before departure. There may be shorter sales periods if there is planned work on the train’s route or in connection with route changes in June and December.", "How long ahead of departure can I purchase a train ticket?", 0 },
                    { 3, "Our trains have a pet-free zone where animals are not permitted. On trains with seat reservations you can reserve a seat in a pet - free zone; on trains without seat reservations you will find a car displaying the “pet - free” symbol.", "Do you have a pet-free zone for allergy sufferers?", 0 },
                    { 4, "The easiest way to retrieve tickets purchased online at vy.no is through the Vy app. Tickets may also be downloaded as a PDF or retrieved on board the train or at a ticket vending machine, a staffed station, or select Narvesen convenience-store kiosks.", "How do I retrieve tickets purchased via vy.no?", 0 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Question");
        }
    }
}
