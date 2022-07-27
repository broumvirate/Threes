namespace ThreesApi.Models.DTO;

public class ThreeDTO
{
    public int Id { get; set; }
    public GuyDTO Dad { get; set; }
    public IEnumerable<OneDTO> Ones { get; set; }
    public ObservatoryDTO Observatory { get; set; }

    public ThreeDTO(int id, GuyDTO dad, IEnumerable<OneDTO> ones, ObservatoryDTO observatory)
    {
        Id = id;
        Dad = dad;
        Ones = ones;
        Observatory = observatory;
    }
}