let books = [];
const book = new Object();
function newBook(title, author){
  book.tittle = title;
  book.author = author;
  return book
}
function addBook(title,author){
  let newBook = books.push(newBook(title,author))
  return books
}