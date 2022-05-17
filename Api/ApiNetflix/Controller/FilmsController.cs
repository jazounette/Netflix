using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiNetflix.Models;
using ApiNetflix.Tools;
using System.Diagnostics;
using Newtonsoft.Json;

namespace ApiNetflix.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilmsController : ControllerBase
    {
        private readonly DataDbContext _context;

        public FilmsController(DataDbContext context)
        {
            _context = context;
        }

        // GET: api/Films
        [HttpGet]
        [Route("/films")]
        public async Task<ActionResult<IEnumerable<EditRessource>>> GetFilms()
        {
            List<EditRessource> ressourceList=new List<EditRessource>();
            EditRessource ressourceEdit;
            List<Film> filmslist = await _context.Films.ToListAsync();
            foreach (var rfilm in filmslist)
            {
                List<Image> imageList = _context.Images.Where(x => x.RessourceId == rfilm.Id).ToList();
                List<Url> urlVideoList= _context.Urls.Where(x => x.RessourceId == rfilm.Id).ToList();
                List<RessourceCategorie> cRessource = _context.RessourceCategorie.Where(e => e.RessourceId == rfilm.Id).ToList();
                ressourceEdit = new EditRessource
                {
                    NomRessource = rfilm.NomRessource,
                    Id = rfilm.Id,
                    DateCrea = rfilm.DateCrea,
                    Description = rfilm.Description,
                };

                    foreach (var c in imageList)
                    {
                        ressourceEdit.Image.Add(c.UrlImage);
                }
                foreach (var d in urlVideoList)
                {
                    ressourceEdit.Url.Add(d.UrlString);
                }
                foreach (var ct in cRessource) 
                {
                    Categories ctRessource = _context.Categories.Where(e => e.Id == ct.CategorieId).SingleOrDefault();

                    ressourceEdit.CategoriesString.Add(ctRessource.NomCategories);
                }
                ressourceList.Add(ressourceEdit);
            }
            return ressourceList;
        }

        // GET: api/Films/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Film>> GetFilm(int id)
        {
            var film = await _context.Films.FindAsync(id);

            if (film == null)
            {
                return NotFound();
            }

            return film;
        }
        [HttpGet/*("{categorieId}")*/]
        [Route("/Ressource/cat/{categorieId}")]
        
        public async Task<ActionResult<List<EditRessource>>> GetRessourceCategorie(int categorieId)
        {
            if (categorieId == 0)
            {
                return Ok(new { error = true, message = "requete non Comforme!!!" });
            }
            List<EditRessource> ressourceList =new List<EditRessource>();
            Categories cat;
            Ressource ressource;
            EditRessource ressourceEdit;
            cat = _context.Categories.Find(categorieId);
            if (cat==null)  {
                return Ok(new { error = true, message = "la categorie demandé n'existe pas !!!" });
            }
            cat =_context.Categories.Find(categorieId);
           
             List<RessourceCategorie> rCat=  _context.RessourceCategorie.Where(e=>e.CategorieId==categorieId).ToList();
           
            foreach (var r in rCat)
            {

                ressource = _context.Ressources.Where(e => e.Id==r.RessourceId).SingleOrDefault();
                List<RessourceCategorie> cRessource = _context.RessourceCategorie.Where(e => e.RessourceId == ressource.Id).ToList();
                ressourceEdit = new EditRessource
                {
                    NomRessource = ressource.NomRessource,
                    Id = ressource.Id,
                    DateCrea = ressource.DateCrea,
                    Description = ressource.Description,
                };
                foreach(var ct in cRessource)
                {
                    Categories ctRessource = _context.Categories.Where(e => e.Id == ct.CategorieId).SingleOrDefault();

                    ressourceEdit.CategoriesString.Add(ctRessource.NomCategories);
                }              
                ressourceList.Add(ressourceEdit);
            }
            return ressourceList;
            //return filmList;
        }
        // PUT: api/Films/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFilm(int id, Film film)
        {
            if (id != film.Id)
            {
                return BadRequest();
            }

            _context.Entry(film).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FilmExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Films
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("/Create/Film")]
        public async Task<ActionResult<Film>> PostFilm([FromBody]EditRessource rfilm)
        {
            if (rfilm == null)
            {
               return Ok(new { error = true, message = "les données n'ont pas ete transmisent !!!" });
            }
            Film film = new Film
            {
                NomRessource = rfilm.NomRessource,
                DateCrea = rfilm.DateCrea,
                Description = rfilm.Description,
            };
           // _db.Categories.Include(e => e.Medias)
              //  .FirstOrDefaultAsync(e => e.Id == id);
            _context.Films.Add(film);
            await _context.SaveChangesAsync();
            Debug.WriteLine(film.Id);
            //add video
            foreach(var urlvideo in rfilm.Url)
            _context.Urls.Add(new Models.Url
            {
                Ressource=film,
                RessourceId=film.Id,
                UrlString=urlvideo
            });
            await _context.SaveChangesAsync();

            //add images
            foreach (var urlImage in rfilm.Image)
                _context.Images.Add(new Image
                {
                    Ressource = film,
                    RessourceId = film.Id,
                    UrlImage = urlImage
                });
            //add categorie
            foreach (var cat in rfilm.CategoriesString)
            {
                // _dataContext.Operations.Include(o => o.Account).ThenInclude(a => a.Customers).ToQueryString()
                Categories categori = _context.Categories.FirstOrDefault(e => e.NomCategories == cat );
                if (categori != null) {
                    _context.RessourceCategorie.Add(new RessourceCategorie
                    {
                        CategorieId = categori.Id,
                        RessourceId = film.Id,
                        Ressource=film,
                        Categorie=categori,
                    });
                    await _context.SaveChangesAsync();

                }
              /*  else
                {
                    return Ok(new { error = true, message = "Categorie Non Existante!!!" });
                }*/
            };
            return Ok( new { error = false, message = "les données ont ete transmisent !!!" });
        }

        // DELETE: api/Films/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFilm(int id)
        {
            var film = await _context.Films.FindAsync(id);
            if (film == null)
            {
                return NotFound();
            }

            _context.Films.Remove(film);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FilmExists(int id)
        {
            return _context.Films.Any(e => e.Id == id);
        }
        private bool FilmCategorieExist(string cat)
        {
            return _context.Categories.Any(e => e.NomCategories== cat);
        }
    }
}
