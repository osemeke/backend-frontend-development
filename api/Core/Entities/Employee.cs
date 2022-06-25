using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Core.Entities
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int PositionId { get; set; }
        public int Age { get; set; }
        public decimal Salary { get; set; }
        public DateTime? StartDate { get; set; }
    }
}
