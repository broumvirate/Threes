using Microsoft.AspNetCore.Mvc;
using ThreesApi.Models;
using ThreesApi.Models.DTO;

namespace ThreesApi.Controllers;

[Route("api/threes")]
[ApiController]
public class ThreesController : ControllerBase
{
    private readonly ILogger<ThreesController> _logger;

    public ThreesController(ILogger<ThreesController> logger)
    {
        _logger = logger;
    }

    [HttpGet("{threeId}")]
    public ActionResult<ThreeDTO> GetThree(int threeId)
    {
        return new ThreeDTO()
        {
            Id = 1,
            Dad = new GuyDTO()
            {
                Id = 1,
            },
            Observatory = new ObservatoryDTO()
            {
                Id = 1,
                Name = "buttbutt"
            },
            Ones = new[]
            {
                new OneDTO()
                {
                    Id = 1,
                    Whence = 1,
                    Texas = "Make me a chicken sandwich",
                    When = DateTime.Now
                },
                new OneDTO()
                {
                    Id = 2,
                    Whence = 2,
                    Texas = "with salt and pepper.",
                    When = DateTime.Now.AddMinutes(1)
                }
            }
        };
    }

    [HttpPost]
    public ActionResult<ThreeDTO> NewThree([FromBody]NewThree three)
    {
        var newThree = new ThreeDTO(); // This should probably not be dto
        // put it in the database
        var firstOne = new OneDTO()
        {
            Texas = three.Texas,
            When = DateTime.Now,
        };
        newThree.Ones = new[] {firstOne};
        // put it in the database
        return newThree;
    }

}