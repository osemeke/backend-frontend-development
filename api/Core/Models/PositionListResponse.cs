using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Models
{
    public class PositionListResponse : RequestResponse
    {
        public IEnumerable<PositionModel> Items { get; set; }
    }
}
