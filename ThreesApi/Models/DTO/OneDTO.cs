namespace ThreesApi.Models.DTO;

public class OneDTO
{
    public int Id { get; set; }
    public string Texas { get; set; }
    public int Whence { get; set; }
    public ThreeDTO Three { get; set; }
    public GuyDTO Whom { get; set; }
    public DateTime When { get; set; }
}