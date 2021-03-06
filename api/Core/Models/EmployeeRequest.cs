using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Models
{
    public class EmployeeRequest
    {
        public string Name { get; set; }
        public int PositionId { get; set; }
        public int Age { get; set; }
        public decimal Salary { get; set; }
        public DateTime? StartDate { get; set; }
    }
}
