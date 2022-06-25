using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Models
{
    public class EmployeeListResponse : RequestResponse
    {
        public IEnumerable<EmployeeModel> Items { get; set; }
    }
}
