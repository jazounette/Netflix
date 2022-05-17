namespace ApiNetflix.Models
{
    public class Episodes
    {
        private int id;
        private string nomEpisode;
        private Serie serie;
       
        public int Id { get => id; set => id = value; }
        public string NomEpisode { get => nomEpisode; set => nomEpisode = value; }
        public Serie Serie { get => serie; set => serie = value; }
    }
}
