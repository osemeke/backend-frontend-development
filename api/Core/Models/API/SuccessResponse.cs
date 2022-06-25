using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Models
{
    public class SuccessResponse : RequestResponse
    {
        public SuccessResponse()
        {
            Status = 201;
            Title = "Created";
        }
    }
}
