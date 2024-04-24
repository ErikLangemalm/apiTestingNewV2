export default function author(server, mongoose) {
  // Skapar ett schema för "users", vilket definierar strukturen för varje "user"-dokument i databasen.
  const authorSchema = new mongoose.Schema({
    bookname: String  // Varje "user" kommer att ha ett "username".
  });

  /* 
    Skapar en Mongoose-modell baserat på usersSchema.
    Detta tillåter oss att skapa, läsa, uppdatera, och ta bort (CRUD) dokument i vår "users"-collection.
  */
  const Author = mongoose.model('authors', authorSchema);

  /*
    Skapar en GET - route på '/api/users'. 
    När denna route anropas, hämtar den alla dokument från vår "users"-collection och skickar tillbaka dem som en JSON-response.
  */
  server.get('/api/authors', async (req, res) => {
    res.json(await Author.find());  // Använder Mongoose's "find"-metod för att hämta alla "users".
  });
}