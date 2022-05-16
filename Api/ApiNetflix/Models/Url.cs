using System.ComponentModel.DataAnnotations.Schema;

namespace ApiNetflix.Models
{
    public class Url
    {
        private int id;
        private string urlString;
        private int ressourceId;
        private Ressource ressource;
        public int Id { get => id; set => id = value; }
        public string UrlString { get => urlString; set => urlString = value; }
        public int RessourceId { get => ressourceId; set => ressourceId = value; }
        [ForeignKey("RessourceId")]
        public Ressource Ressource { get => ressource; set => ressource = value; }
    }
}
