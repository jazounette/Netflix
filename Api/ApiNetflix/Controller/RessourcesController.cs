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
    public class RessourcesController : ControllerBase
    {
        private readonly DataDbContext _context;

        public RessourcesController(DataDbContext context)
        {
            _context = context;
        }

        // GET: api/Ressources
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ressource>>> GetRessources()
        {
            return await _context.Ressources.ToListAsync();
        }

        // GET: api/Ressources/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ressource>> GetRessource(int id)
        {
            var ressource = await _context.Ressources.FindAsync(id);

            if (ressource == null)
            {
                return NotFound();
            }

            return ressource;
        }

        // PUT: api/Ressources/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRessource(int id, Ressource ressource)
        {
            if (id != ressource.Id)
            {
                return BadRequest();
            }

            _context.Entry(ressource).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RessourceExists(id))
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

        // POST: api/Ressources
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Ressource>> PostRessource(Ressource ressource)
        {
            _context.Ressources.Add(ressource);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRessource", new { id = ressource.Id }, ressource);
        }

        // DELETE: api/Ressources/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRessource(int id)
        {
            var ressource = await _context.Ressources.FindAsync(id);
            if (ressource == null)
            {
                return NotFound();
            }

            _context.Ressources.Remove(ressource);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RessourceExists(int id)
        {
            return _context.Ressources.Any(e => e.Id == id);
        }
    }
}
