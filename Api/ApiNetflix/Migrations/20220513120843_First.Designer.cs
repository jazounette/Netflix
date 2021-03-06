// <auto-generated />
using System;
using ApiNetflix.Tools;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ApiNetflix.Migrations
{
    [DbContext(typeof(DataDbContext))]
    [Migration("20220513120843_First")]
    partial class First
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.16")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ApiNetflix.Models.Admin", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Admins");
                });

            modelBuilder.Entity("ApiNetflix.Models.Categories", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("NomCategories")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("ApiNetflix.Models.Episodes", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("NomEpisode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("SerieId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("SerieId");

                    b.ToTable("Episodes");
                });

            modelBuilder.Entity("ApiNetflix.Models.Image", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("RessourceId")
                        .HasColumnType("int");

                    b.Property<string>("UrlImage")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("RessourceId");

                    b.ToTable("Images");
                });

            modelBuilder.Entity("ApiNetflix.Models.Ressource", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DateCrea")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NomRessource")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Ressources");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Ressource");
                });

            modelBuilder.Entity("ApiNetflix.Models.RessourceCategorie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CategorieId")
                        .HasColumnType("int");

                    b.Property<int>("RessourceId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CategorieId");

                    b.HasIndex("RessourceId");

                    b.ToTable("RessourceCategorie");
                });

            modelBuilder.Entity("ApiNetflix.Models.Url", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("RessourceId")
                        .HasColumnType("int");

                    b.Property<string>("UrlString")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("RessourceId");

                    b.ToTable("Urls");
                });

            modelBuilder.Entity("ApiNetflix.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nom")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pass")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Prenom")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Token")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("ApiNetflix.Models.Film", b =>
                {
                    b.HasBaseType("ApiNetflix.Models.Ressource");

                    b.Property<int>("DurationSeconde")
                        .HasColumnType("int");

                    b.HasDiscriminator().HasValue("Film");
                });

            modelBuilder.Entity("ApiNetflix.Models.Serie", b =>
                {
                    b.HasBaseType("ApiNetflix.Models.Ressource");

                    b.HasDiscriminator().HasValue("Serie");
                });

            modelBuilder.Entity("ApiNetflix.Models.Episodes", b =>
                {
                    b.HasOne("ApiNetflix.Models.Serie", "Serie")
                        .WithMany("Episodes")
                        .HasForeignKey("SerieId");

                    b.Navigation("Serie");
                });

            modelBuilder.Entity("ApiNetflix.Models.Image", b =>
                {
                    b.HasOne("ApiNetflix.Models.Ressource", null)
                        .WithMany("Images")
                        .HasForeignKey("RessourceId");
                });

            modelBuilder.Entity("ApiNetflix.Models.RessourceCategorie", b =>
                {
                    b.HasOne("ApiNetflix.Models.Categories", "Categorie")
                        .WithMany("RessourceCategorie")
                        .HasForeignKey("CategorieId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ApiNetflix.Models.Ressource", "Ressource")
                        .WithMany("RessourceCategorie")
                        .HasForeignKey("RessourceId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Categorie");

                    b.Navigation("Ressource");
                });

            modelBuilder.Entity("ApiNetflix.Models.Url", b =>
                {
                    b.HasOne("ApiNetflix.Models.Ressource", null)
                        .WithMany("UrlsVideo")
                        .HasForeignKey("RessourceId");
                });

            modelBuilder.Entity("ApiNetflix.Models.Categories", b =>
                {
                    b.Navigation("RessourceCategorie");
                });

            modelBuilder.Entity("ApiNetflix.Models.Ressource", b =>
                {
                    b.Navigation("Images");

                    b.Navigation("RessourceCategorie");

                    b.Navigation("UrlsVideo");
                });

            modelBuilder.Entity("ApiNetflix.Models.Serie", b =>
                {
                    b.Navigation("Episodes");
                });
#pragma warning restore 612, 618
        }
    }
}
