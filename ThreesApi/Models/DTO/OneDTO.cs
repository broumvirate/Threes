namespace ThreesApi.Models.DTO;

public class OneDTO
{
    public int Id { get; set; }
    public string Texas { get; set; }
    public int Whence { get; set; }
    public ThreeDTO Three { get; set; }
    public GuyDTO Whom { get; set; }
    public DateTime When { get; set; }

    public OneDTO(int id, string texas, int whence, GuyDTO whom, DateTime when)
    {
        Id = id;
        Texas = texas;
        Whence = whence;
        Whom = whom;
        When = when;
    }

    public OneDTO(int id, string texas, int whence, GuyDTO whom, DateTime when, ThreeDTO three) : this(id, texas, whence, whom, when)
    {
        Three = three;
    }
}