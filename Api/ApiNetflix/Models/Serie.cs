using System.Collections.Generic;

namespace ApiNetflix.Models
{
    public class Serie : Ressource
    {

        private List<Episodes> episodes;
        public List<Episodes> Episodes { get => episodes; set => episodes = value; }
    }
}
