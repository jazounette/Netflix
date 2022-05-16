using ApiNetflix.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiNetflix.Tools
{
    public class DataDbContext : DbContext
    {
        public DataDbContext()
        {
              
        }
       public DbSet<User> Users { get; set; }
       public DbSet<RessourceCategorie> RessourceCategorie { get; set; }
       public DbSet<Admin> Admins { get; set; }
       public DbSet<Categories> Categories { get; set; }
       public DbSet<Episodes> Episodes { get; set; }
       public DbSet<Image> Images { get; set; }
       public DbSet<Url> Urls { get; set; }
       public DbSet<Ressource> Ressources { get; set; }
       public DbSet<Film> Films{ get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=(localDB)\Netflix;Integrated Security=True");
        }


        public DbSet<ApiNetflix.Models.Serie> Serie { get; set; }
    }
}
