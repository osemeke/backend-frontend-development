using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Models
{
    public class ApiResponseBase
    {
        public ApiResponseBase()
        {
            Time = DateTime.Now.ToString("yyyy-MM-dd hh:mm:ss");
            Status = 200;
            Title = "OK";
            Message = string.Empty;
        }

        public string Time { get; set; }
        public int Status { get; set; }
        public string Title { get; set; }
        public string Message { get; set; }

    }
}
