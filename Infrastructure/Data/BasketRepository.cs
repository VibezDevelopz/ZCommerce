using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using StackExchange.Redis;

namespace Infrastructure.Data
{
    public class BasketRepository : IBasketRepository
    {

        Task<bool> IBasketRepository.DeleteBasketAsync(string basketId)
        {
            throw new System.NotImplementedException();
        }

        Task<CustomerBasket> IBasketRepository.GetBasketAsync(string basketId)
        {
            throw new System.NotImplementedException();
        }

        Task<CustomerBasket> IBasketRepository.UpdateBasketAsync(CustomerBasket basket)
        {
            throw new System.NotImplementedException();
        }
    }
}