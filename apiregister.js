import books from "./api/books.js"
export default function apiregister(server, mongoose) {
  books(server, mongoose)
}
