namespace ApiNetflix.Models
{
    public class Film : Ressource
    {
        private int durationSeconde;

        public int DurationSeconde { get => durationSeconde; set => durationSeconde = value; }
    }
}
