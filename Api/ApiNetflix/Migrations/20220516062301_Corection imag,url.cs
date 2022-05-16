using Microsoft.EntityFrameworkCore.Migrations;

namespace ApiNetflix.Migrations
{
    public partial class Corectionimagurl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Images_Ressources_RessourceId",
                table: "Images");

            migrationBuilder.DropForeignKey(
                name: "FK_Urls_Ressources_RessourceId",
                table: "Urls");

            migrationBuilder.DropIndex(
                name: "IX_Urls_RessourceId",
                table: "Urls");

            migrationBuilder.DropIndex(
                name: "IX_Images_RessourceId",
                table: "Images");

            migrationBuilder.AlterColumn<int>(
                name: "RessourceId",
                table: "Urls",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "RessourcesId",
                table: "Urls",
                type: "int",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "RessourceId",
                table: "Images",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "RessourcesId",
                table: "Images",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Urls_RessourcesId",
                table: "Urls",
                column: "RessourcesId");

            migrationBuilder.CreateIndex(
                name: "IX_Images_RessourcesId",
                table: "Images",
                column: "RessourcesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Images_Ressources_RessourcesId",
                table: "Images",
                column: "RessourcesId",
                principalTable: "Ressources",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Urls_Ressources_RessourcesId",
                table: "Urls",
                column: "RessourcesId",
                principalTable: "Ressources",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Images_Ressources_RessourcesId",
                table: "Images");

            migrationBuilder.DropForeignKey(
                name: "FK_Urls_Ressources_RessourcesId",
                table: "Urls");

            migrationBuilder.DropIndex(
                name: "IX_Urls_RessourcesId",
                table: "Urls");

            migrationBuilder.DropIndex(
                name: "IX_Images_RessourcesId",
                table: "Images");

            migrationBuilder.DropColumn(
                name: "RessourcesId",
                table: "Urls");

            migrationBuilder.DropColumn(
                name: "RessourcesId",
                table: "Images");

            migrationBuilder.AlterColumn<int>(
                name: "RessourceId",
                table: "Urls",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "RessourceId",
                table: "Images",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_Urls_RessourceId",
                table: "Urls",
                column: "RessourceId");

            migrationBuilder.CreateIndex(
                name: "IX_Images_RessourceId",
                table: "Images",
                column: "RessourceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Images_Ressources_RessourceId",
                table: "Images",
                column: "RessourceId",
                principalTable: "Ressources",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Urls_Ressources_RessourceId",
                table: "Urls",
                column: "RessourceId",
                principalTable: "Ressources",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
