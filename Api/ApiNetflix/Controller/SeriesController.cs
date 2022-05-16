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

namespace ApiNetflix.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeriesController : ControllerBase
    {
        private readonly DataDbContext _context;

        public SeriesController(DataDbContext context)
        {
            _context = context;
        }

        // GET: api/Series
        [HttpGet]
        [Route("/series")]
        public async Task<ActionResult<List<EditRessource>>> GetSerie()
        {
            List<EditRessource> ressourceList = new List<EditRessource>();
            EditRessource ressourceEdit;
            List<Serie> serieslist = await _context.Serie.ToListAsync();
            foreach (var serie in serieslist)
            {
               
                List<RessourceCategorie> cRessource = _context.RessourceCategorie.Where(e => e.RessourceId == serie.Id).ToList();
                ressourceEdit = new EditRessource
                {
                    NomRessource = serie.NomRessource,
                    Id = serie.Id,
                    DateCrea = serie.DateCrea,
                    Description = serie.Description,
                };
                foreach (var ct in cRessource)
                {
                    Categories ctRessource = _context.Categories.Where(e => e.Id == ct.CategorieId).SingleOrDefault();
                    ressourceEdit.CategoriesString.Add(ctRessource.NomCategories);
                }
                Debug.WriteLine(serie.Episodes);
                ressourceEdit.EpisodeList = serie.Episodes;
                ressourceList.Add(ressourceEdit);
            }
            return ressourceList;
           
        }

        // GET: api/Series/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Serie>> GetSerie(int id)
        {
            var serie = await _context.Serie.FindAsync(id);

            if (serie == null)
            {
                return NotFound();
            }

            return serie;
        }

        // PUT: api/Series/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSerie(int id, Serie serie)
        {
            if (id != serie.Id)
            {
                return BadRequest();
            }

            _context.Entry(serie).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SerieExists(id))
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

        // POST: api/Series
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Serie>> PostSerie(Serie serie)
        {
            _context.Serie.Add(serie);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSerie", new { id = serie.Id }, serie);
        }

        // DELETE: api/Series/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSerie(int id)
        {
            var serie = await _context.Serie.FindAsync(id);
            if (serie == null)
            {
                return NotFound();
            }

            _context.Serie.Remove(serie);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SerieExists(int id)
        {
            return _context.Serie.Any(e => e.Id == id);
        }
    }
}
