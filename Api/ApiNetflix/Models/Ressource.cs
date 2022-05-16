using Newtonsoft.Json;
using System.Collections.Generic;

namespace ApiNetflix.Models
{
    public class Ressource
    {
        private int id;
        private string nomRessource;
        private string dateCrea;
        private string description;
        private List<Url> urlsVideo;
        private List<Image> images;
        private List<RessourceCategorie> ressourceCategorie;
        public string NomRessource { get => nomRessource; set => nomRessource = value; }
        public string DateCrea { get => dateCrea; set => dateCrea = value; }
        public string Description { get => description; set => description = value; }
        public int Id { get => id; set => id = value; }
        public List<Url> UrlsVideo { get => urlsVideo; set => urlsVideo = value; }
        public List<Image> Images { get => images; set => images = value; }
        [JsonIgnore]
        public List<RessourceCategorie> RessourceCategorie { get => ressourceCategorie; set => ressourceCategorie = value; }
        
    }
}
