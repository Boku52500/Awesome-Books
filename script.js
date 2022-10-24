const variable = {
  title : [],
  author : [],
}

function addBook(title, author) {
  variable['title'] = title;
  variable['author'] = author;
  return variable;
}

addBook('Harry Potter', 'J.K Rowling');
addBook('Hello', 'helloo');