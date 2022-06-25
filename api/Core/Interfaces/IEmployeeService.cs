using Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IEmployeeService
    {
        Task<EmployeeResponse> Add(EmployeeRequest model);
        Task<EmployeeListResponse> Get();
        Task<EmployeeResponse> Get(int id);
        Task<EmployeeResponse> Update(EmployeeRequest model, int id);
        Task<EmployeeResponse> Delete(int id);
    }
}
