namespace ThreesApi.Models.DTO;

public class ThreeDTO
{
    public int Id { get; set; }
    public GuyDTO Dad { get; set; }
    public IEnumerable<OneDTO> Ones { get; set; }
    public ObservatoryDTO Observatory { get; set; }
    public string FirstLine => Ones.First().Texas;
}