using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiNetflix.Models
{
    public class RessourceCategorie
    {
        private int id;
        private int catgorieId;
        private int ressourceId;
        private Categories categorie;
        private Ressource ressource;

        public int Id { get => id; set => id = value; }
        [ForeignKey("RessourceId")]
        public Ressource Ressource { get => ressource; set => ressource = value; }
        public int CategorieId { get => catgorieId; set => catgorieId = value; }
        public int RessourceId { get => ressourceId; set => ressourceId = value; }
        [ForeignKey("CategorieId")]

        public Categories Categorie { get => categorie; set => categorie = value; }
    }
}
