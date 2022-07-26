namespace ThreesApi;

public static class Config
{
    public static IConfiguration SecretsConfig { get; private set; }

    public static void LoadConfigurationFiles()
    {
        var secret = new ConfigurationBuilder()
            .AddJsonFile("appsecrets.json", optional: false);
        SecretsConfig = secret.Build();
    }
}