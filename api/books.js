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
      const { title, author, rating, published, information, genre } = req.body;
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

  server.put('/api/books', async (req, res) => {

  });

  server.get('/api/books', async (req, res) => {
    const { title, author, rating, published, information, genre, paginate, page } = req.query
    let filter
    if (rating) {
      filter = await Books.find({ rating: rating });
    }
    else if (title) {
      filter = await Books.find({ title: title });
    }
    else if (author) {
      filter = await Books.find({ author: author });
    }
    else if (published) {
      filter = await Books.find({ published: published });
    }
    else if (information) {
      filter = await Books.find({ information: information });
    }
    else if (genre) {
      filter = await Books.find({ genre: genre });
    }
    else if (paginate) {
      let skipper;
      if (req.query.page) {
        skipper = (req.query.page - 1) * paginate;
      }
      else {
        skipper = 2;
      }
      filter = await Books.find().skip(skipper).limit(paginate);
    }
    else {
      filter = await Books.find();
    }
    res.json(filter)

  });
}