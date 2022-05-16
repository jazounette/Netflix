using System.Collections.Generic;

namespace ApiNetflix.Models 
{
    public class Categories
    {
        private int id;
       
        private string nomCategories;

        private List<RessourceCategorie> ressourceCategorie;
        public string NomCategories { get => nomCategories; set => nomCategories = value; }
        public int Id { get => id; set => id = value; }
        public List<RessourceCategorie> RessourceCategorie { get => ressourceCategorie; set => ressourceCategorie = value; }
    }
}
