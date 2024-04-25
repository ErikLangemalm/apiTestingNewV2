export default function books(server, mongoose) {

  const booksSchema = new mongoose.Schema({
    title: String,
    author: String,
    rating: Number,
    published: String,
    information: String,
    genre: String
  });

  const Books = mongoose.model('books', booksSchema);

  server.post('/api/books', async (req, res) => {
    try {
      const { title, author, rating, published, information } = req.body;
      const newBook = new Books({
        title,
        author,
        rating,
        published,
        information,
        genre
      });
      const savedBook = await newBook.save()
      res.status(201).json(savedBook);
      console.log("You have added a new book");
    }
    catch (err) {
      console.error(err);
      res.status(500).json({ err: 'There was a problem adding a book' })
    }
  });

  server.get('/api/books', async (req, res) => {

    const { rating } = req.query
    let filter
    if (rating) {
      filter = await Books.find({ rating: rating });
    }
    else {
      filter = await Books.find()
    }
    res.json(filter)

  });
}
