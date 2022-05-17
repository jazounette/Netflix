using System.ComponentModel.DataAnnotations.Schema;

namespace ApiNetflix.Models
{
    public class Image
    {
        private int id;
        private string urlImage;
        private int ressourceId;
        private Ressource ressource;

        public int Id { get => id; set => id = value; }
        public string UrlImage { get => urlImage; set => urlImage = value; }
        public int RessourceId { get => ressourceId; set => ressourceId = value; }
        [ForeignKey("RessourceId")]
        public Ressource Ressource { get => ressource; set => ressource = value; }
    }
}
