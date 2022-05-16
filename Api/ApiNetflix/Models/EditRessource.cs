using System.Collections.Generic;

namespace ApiNetflix.Models
{
    public class EditRessource
    { 
        public int Id { get; set; } 
        private string nomRessource;
        private string dateCrea;
        private string description;
        private string discriminator;
        private List<string> categoriesString = new();
        private List<string> image = new();
        private List<string> url = new();
        private List<Episodes> episodeList = new();
        public string NomRessource { get => nomRessource; set => nomRessource = value; }
        public string DateCrea { get => dateCrea; set => dateCrea = value; }
        public string Description { get => description; set => description = value; }
        public List<string> CategoriesString { get => categoriesString; set => categoriesString = value; }
        public List<string> Image { get => image; set => image = value; }
        public List<string> Url { get => url; set => url = value; }
        public List<Episodes> EpisodeList { get => episodeList; set => episodeList = value; }
        public string Discriminator { get => discriminator; set => discriminator = value; }
    }
}
