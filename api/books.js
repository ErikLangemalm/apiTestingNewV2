export default function books(server, mongoose) {
  // Skapar ett schema för "users", vilket definierar strukturen för varje "user"-dokument i databasen.
  const booksSchema = new mongoose.Schema({
    bookname: String  // Varje "user" kommer att ha ett "username".
  });

  /* 
    Skapar en Mongoose-modell baserat på usersSchema.
    Detta tillåter oss att skapa, läsa, uppdatera, och ta bort (CRUD) dokument i vår "users"-collection.
  */
  const Books = mongoose.model('books', booksSchema);

  /*
    Skapar en GET - route på '/api/users'. 
    När denna route anropas, hämtar den alla dokument från vår "users"-collection och skickar tillbaka dem som en JSON-response.
  */
  server.get('/api/books', async (req, res) => {
    res.json(await Books.find());  // Använder Mongoose's "find"-metod för att hämta alla "users".
  });

  server.post('/api/books', async (req, res) => {
    res.json
  });
}
