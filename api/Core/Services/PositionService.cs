using Core.Data;
using Core.Entities;
using Core.Interfaces;
using Core.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Services
{
    public class PositionService : IPositionService
    {
        private readonly ILogger _logger;
        private readonly MyDbContext _context;

        public PositionService(ILogger<PositionService> logger, MyDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public async Task<PositionResponse> Add(PositionRequest model)
        {
            var response = new PositionResponse();
            try
            {
                var entity = new Position
                {
                    Name = model.Name,
                };
                _context.Positions.Add(entity);
                await _context.SaveChangesAsync();

                response.Id = entity.Id;
                response.Name = entity.Name;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "error");
                response.HasError();
            }
            return await Task.FromResult(response);
        }

        public async Task<PositionListResponse> Get()
        {
            var response = new PositionListResponse();
            try
            {
                response.Items = _context.Positions
                    .Select(x => new PositionModel
                    {
                        Id = x.Id,
                        Name = x.Name,
                    })
                    .ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "error");
                response.HasError();
            }
            return await Task.FromResult(response);
        }
    }
}
