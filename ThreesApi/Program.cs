var builder = WebApplication.CreateBuilder(args);

// This looks for any classes with the [ApiController] attribute and makes 'em exist. So we don't have to instantiate them ourselves
builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection(); // Dunno what this does

app.UseAuthorization(); // Dunno what this does

app.MapControllers(); // Automatically maps routes to our [ApiController]s so we don't gotta do jack to get on the net

app.Run(); // Snarts the server
