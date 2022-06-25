using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Models
{
    public class RequestResponse : ApiResponseBase
    {
        public void HasError(string message=null)
        {
            Status = 500;
            Title = message == null ? "Internal Server Error" : message;
        }

        public ApiResponseBase NotFound(string message = null)
        {
            this.Status = 400;
            this.Title = "Bad Request";
            this.Message = message;
            return this;
        }
    }
}
