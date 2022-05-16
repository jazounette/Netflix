using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApiNetflix.Models;
using ApiNetflix.Tools;

namespace ApiNetflix.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class RessourceCategoriesController : ControllerBase
    {
        private readonly DataDbContext _context;

        public RessourceCategoriesController(DataDbContext context)
        {
            _context = context;
        }

        // GET: api/RessourceCategories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RessourceCategorie>>> GetRessourceCategorie()
        {
            return await _context.RessourceCategorie.ToListAsync();
        }

        // GET: api/RessourceCategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RessourceCategorie>> GetRessourceCategorie(int id)
        {
            var ressourceCategorie = await _context.RessourceCategorie.FindAsync(id);

            if (ressourceCategorie == null)
            {
                return NotFound();
            }

            return ressourceCategorie;
        }

        // PUT: api/RessourceCategories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRessourceCategorie(int id, RessourceCategorie ressourceCategorie)
        {
            if (id != ressourceCategorie.Id)
            {
                return BadRequest();
            }

            _context.Entry(ressourceCategorie).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RessourceCategorieExists(id))
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

        // POST: api/RessourceCategories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RessourceCategorie>> PostRessourceCategorie(RessourceCategorie ressourceCategorie)
        {
            _context.RessourceCategorie.Add(ressourceCategorie);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRessourceCategorie", new { id = ressourceCategorie.Id }, ressourceCategorie);
        }

        // DELETE: api/RessourceCategories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRessourceCategorie(int id)
        {
            var ressourceCategorie = await _context.RessourceCategorie.FindAsync(id);
            if (ressourceCategorie == null)
            {
                return NotFound();
            }

            _context.RessourceCategorie.Remove(ressourceCategorie);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RessourceCategorieExists(int id)
        {
            return _context.RessourceCategorie.Any(e => e.Id == id);
        }
    }
}
