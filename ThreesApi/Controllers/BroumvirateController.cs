using Microsoft.AspNetCore.Mvc;
using ThreesApi.Models;

namespace ThreesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BroumvirateController : ControllerBase
    {
        private readonly ILogger<BroumvirateController> _logger;

        private readonly List<Guy> _broumvirateMembers = new()
        {
            new() {Name = "Jacob", IsFunny = true},
            new() {Name = "Alden", IsFunny = true},
            new() {Name = "Kai", IsFunny = true},
            new() {Name = "Emerson", IsFunny = true},
            new() {Name = "Ben", IsFunny = true}
        };

        public BroumvirateController(ILogger<BroumvirateController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "BroumvirateMembers")]
        public IEnumerable<Guy> Get()
        {
            _logger.LogInformation($"There are {_broumvirateMembers.Count} guys.");
            return _broumvirateMembers;
        }

        [HttpGet("{guyId}")]
        public ActionResult<Guy> Get(int guyId)
        {
            if (guyId is >= 0 and <= 4)
            {
                return _broumvirateMembers[guyId];
            }
            return NotFound("We don't have him.");
        }
    }
}
