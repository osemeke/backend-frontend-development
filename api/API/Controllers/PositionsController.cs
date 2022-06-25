using Core.Models;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/positions")]
    [ApiController]
    public class PositionsController : ControllerBase
    {
        IPositionService _service;
        public PositionsController(IPositionService service) => _service = service;

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await _service.Get();
            if (result.Status == 400) return NotFound(result);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Add(PositionRequest model)
        {
            var result = await _service.Add(model);
            if (result.Status == 400) return BadRequest(result);
            return Ok(result);
        }
    }
}
