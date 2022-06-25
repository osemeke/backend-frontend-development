using Core.Models;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/employees")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        IEmployeeService _service;
        public EmployeesController(IEmployeeService service) => _service = service;

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var result = await _service.Get();
            if (result.Status == 400) return NotFound(result);
            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Add(EmployeeRequest model)
        {
            var result = await _service.Add(model);
            if (result.Status == 400) return BadRequest(result);
            return Ok(result);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _service.Get(id);
            if (result.Status == 400) return NotFound(result);
            return Ok(result);
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update(EmployeeRequest model, int id)
        {
            var result = await _service.Update(model, id);
            if (result.Status == 400) return BadRequest(result);
            return Ok(result);
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var result = await _service.Delete(id);
            if (result.Status == 400) return BadRequest(result);
            return Ok(result);
        }
    }
}
