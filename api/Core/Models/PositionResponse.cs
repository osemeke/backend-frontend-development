﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Models
{
    public class PositionResponse : RequestResponse
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
