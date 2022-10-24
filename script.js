let books = [];
const book = new Object();
function addBook(title, author){
  book.tittle = title;
  book.author = author;
  return book
}
function newBook(title,author){
  let newBook = books.push(addBook(title,author))
  return books
}