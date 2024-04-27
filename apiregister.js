import books from "./api/books.js"
import author from "./api/authors.js"
import throttle from "./api/throttle.js"
export default function apiregister(server, mongoose) {
  books(server, mongoose)
  throttle(server)
}
