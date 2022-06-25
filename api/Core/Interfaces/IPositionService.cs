using Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IPositionService
    {
        Task<PositionResponse> Add(PositionRequest model);
        Task<PositionListResponse> Get();
    }
}
