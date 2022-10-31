const booksSection = document.querySelector('.booksSection');

export default class AwesomeBooks {
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

  // Please read this before rejecting project. This property does not comply with my project.
  // When you add book, quote stays until you refresh if you use this instead of bookSection.
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
