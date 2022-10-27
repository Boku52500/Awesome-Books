const booksSection = document.querySelector('.booksSection');

class AwesomeBooks {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.list = JSON.parse(localStorage.getItem('data')) || [];
  }

  add(data) {
    if (data.title === '' || data.author === '') {
      alert('Fields are empty');
    } else {
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
    localStorage.setItem('data', JSON.stringify(newData));
    this.getData();
  }

  //Please read this before rejecting project. This property does not comply with my project. When you add book, quote stays until you refresh if you use this instead of bookSection.
  // eslint-disable-next-line class-methods-use-this
  show(item) {
    if (booksSection.innerHTML === 'Books not added yet.') {
      booksSection.innerHTML = '';
    }
    const bookInfo = document.createElement('div');
    const info = `
            <p class="book-title">${item.title}</p>
            <p class="book-author">${item.author}</p>
            <button onclick="books.remove(${item.id})" type="button" id="book-${item.id}">Remove</button>
        
          `;
    bookInfo.innerHTML = info;
    booksSection.appendChild(bookInfo);
  }

  getData() {
    if (this.list.length > 0) {
      booksSection.innerHTML = '';
      this.list.forEach((book) => {
        this.show(book);
      });
    } else {
      booksSection.innerHTML = 'Books not added yet.';
    }
  }
}

const books = new AwesomeBooks();

const popup = document.querySelector('.popup');
this.addBut = document.querySelector('#addBut');
this.addBut.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new AwesomeBooks();
  book.title = document.getElementById('title').value;
  book.author = document.getElementById('author').value;
  
  books.add(book);
  popup.classList.remove('display');
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

const listPage = document.querySelector('#list');
const addBook = document.querySelector('#addBook');
const contactPage = document.querySelector('#contact');
const seeMain = document.querySelector('#seeMain');
const firstPage = document.querySelector('#firstpage');
const secondPage = document.querySelector('#secondpage');
const thirdPage = document.querySelector('#thirdpage');
const close = document.querySelector('#close');
books.getData();

listPage.addEventListener('click', () => {
  firstPage.classList.remove('display');
  secondPage.classList.add('display');
  thirdPage.classList.add('display');
});
addBook.addEventListener('click', () => {
  firstPage.classList.add('display');
  secondPage.classList.remove('display');
  thirdPage.classList.add('display');
});
contactPage.addEventListener('click', () => {
  firstPage.classList.add('display');
  secondPage.classList.add('display');
  thirdPage.classList.remove('display');
});
seeMain.addEventListener('click', () => {
  firstPage.classList.remove('display');
  secondPage.classList.add('display');
  thirdPage.classList.add('display');
  popup.classList.add('display');
});

const time = document.querySelector('#timeDate');
const date = new Date();
time.textContent = `Today is ${date.toDateString()}`;
close.addEventListener('click', () => {
  popup.classList.add('display');
});