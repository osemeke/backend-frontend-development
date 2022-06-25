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
    public class EmployeeService : IEmployeeService
    {
        private readonly ILogger _logger;
        private readonly MyDbContext _context;

        public EmployeeService(ILogger<EmployeeService> logger, MyDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public async Task<EmployeeResponse> Add(EmployeeRequest model)
        {
            var response = new EmployeeResponse();
            try
            {
                var entity = new Employee
                {
                    Name = model.Name,
                    PositionId = model.PositionId,
                    Age = model.Age,
                    Salary = model.Salary,
                    StartDate = model.StartDate,
                };
                _context.Employees.Add(entity);
                await _context.SaveChangesAsync();

                response.Id = entity.Id;
                response.Name = entity.Name;
                response.PositionId = entity.PositionId;
                response.Age = entity.Age;
                response.Salary = entity.Salary;
                response.StartDate = entity.StartDate;

                response.Message = "Item added successfully";
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "error");
                response.HasError();
            }
            return await Task.FromResult(response);
        }

        public async Task<EmployeeListResponse> Get()
        {
            var response = new EmployeeListResponse();
            try
            {
                response.Items = _context.Employees
                    .Select(x => new EmployeeModel
                    {
                        Id = x.Id,
                        Name = x.Name,
                        PositionId = x.PositionId,
                        Age = x.Age,
                        Salary = x.Salary,
                        StartDate = x.StartDate,
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

        public async Task<EmployeeResponse> Get(int id)
        {
            var response = new EmployeeResponse();
            try
            {
                var entity = _context.Employees.Where(x => x.Id == id).FirstOrDefault();
                if (entity == null) return (EmployeeResponse)response.NotFound();
                response.Id = entity.Id;
                response.Name = entity.Name;
                response.PositionId = entity.PositionId;
                response.Age = entity.Age;
                response.Salary = entity.Salary;
                response.StartDate = entity.StartDate;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "error");
                response.HasError();
            }
            return await Task.FromResult(response);
        }

        public async Task<EmployeeResponse> Update(EmployeeRequest model, int id)
        {
            var response = new EmployeeResponse();
            try
            {
                var entity = _context.Employees.Where(x => x.Id == id).FirstOrDefault();
                if (entity == null) return (EmployeeResponse)response.NotFound();
                entity.Name = model.Name;
                entity.PositionId = model.PositionId;
                entity.Age = model.Age;
                entity.Salary = model.Salary;
                entity.StartDate = model.StartDate;
                await _context.SaveChangesAsync();

                response.Message = "Item updated!";
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "error");
                response.HasError();
            }
            return await Task.FromResult(response);
        }

        public async Task<EmployeeResponse> Delete(int id)
        {
            var response = new EmployeeResponse();
            try
            {
                var entity = _context.Employees.Where(x => x.Id == id).FirstOrDefault();
                if (entity == null) return (EmployeeResponse)response.NotFound();
                _context.Employees.Remove(entity);
                await _context.SaveChangesAsync();

                response.Id = entity.Id;
                response.Name = entity.Name;
                response.PositionId = entity.PositionId;
                response.Age = entity.Age;
                response.Salary = entity.Salary;
                response.StartDate = entity.StartDate;

                response.Message = "Item deleted!";
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
