const booksSection = document.querySelector('.booksSection');
class First {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Second {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('data')) || [];
  }

  add(data) {
    if (data.title === '' || data.author === '') {
      alert('Fields are empty');
    }
    else {
      const id = this.list.length + 1;
      data.id = id;
      this.list.push(data);
      localStorage.setItem('data', JSON.stringify(this.list));
      this.show(data);
    }
  }

  remove(r) {
    const newData = this.list.filter((book) => book.id !== r);
    this.list = newData;
    localStorage.setItem('data', JSON.stringify(this.list));
    this.getData();
  }

  show(item) {
    if (booksSection.innerHTML === 'No books added yet') {
      booksSection.innerHTML = '';
    }
    const bookInfo = document.createElement('div');
    const info = `
    <p class="title">${item.title}</p>
    <p class="author">${item.author}</p>
    <button onclick="books.remove(${item.id})" type="button" id="book-${item.id}">Remove</button>

  `;
    bookInfo.innerHTML = text;
    booksSection.appendChild(bookInfo);
  }

  getData() {
    if (this.list.length > 0) {
      booksSection.innerHTML = '';
      this.list.forEach((book) => {
        this.show(book);
      });
    }
    else {
      booksSection.innerHTML = 'No books added yet';
    }
  }
}

this.addBut = document.querySelector('#addBut');
this.addBut.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new First();
  book.title = document.getElementById('title').value;
  book.author = document.getElementById('author').value;
  newbooks.add(book);
});

const newbooks = new Second();
newbooks.getData();