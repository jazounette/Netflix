using System.ComponentModel.DataAnnotations;

namespace ApiNetflix.Models
{
    public class User
    {
        private int id;
        private string nom;
        private string prenom;
        private string email;
        private string pass;
        private string token;

       public User() { }
      //  [RegularExpression(@"^[a-zA-Z]{1}[a-zA-Z\séèë\-_]*$", ErrorMessage = "Erreur Dans la Saisi Du Nom!!!")]
        public string Nom { get => nom; set => nom = value; }
     //   [RegularExpression(@"^[a-zA-Z]{1}[a-zA-Z\séèë\-_]*$", ErrorMessage = "Erreur Dans la Saisi Du Prenom!!!")]

        public string Prenom { get => prenom; set => prenom = value; }

       // [Required, RegularExpression("", ErrorMessage = "Erreur Dans la Saisi De L'adresse mail!!!")]

        public string Email { get => email; set => email = value; }
        public string Pass { get => pass; set => pass = value; }
        public string Token { get => token; set => token = value; }
        public int Id { get => id; set => id = value; }
    }
}
