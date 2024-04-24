import books from "./api/books.js"
import author from "./api/authors.js"
export default function apiregister(server, mongoose) {
  books(server, mongoose)
  author(server, mongoose)
}
