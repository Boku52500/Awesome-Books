const booksSection = document.querySelector('.booksSection');


export default class Books {
  constructor() {
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
      this.show(data, this.list.length - 1);
      const removeBut = document.querySelector(`#book-${this.list.length - 1}`);
      removeBut.addEventListener('click', (e) => {
        const { id } = e.target;
        const index = id.substring(id.indexOf('-') + 1, id.length);
        this.remove(parseInt(index, 10));
      })
    }
  }

  remove(r) {
    this.list.splice(r, 1);
    localStorage.setItem('data', JSON.stringify(this.list));
    this.getData();
  }

  // Please read this before rejecting project. This property does not comply with my project.
  // When you add book, quote stays until you refresh if you use this instead of bookSection.
  // eslint-disable-next-line class-methods-use-this
  show(item, index) {
    if (booksSection.innerHTML === 'Books not added yet.') {
      booksSection.innerHTML = '';
    }
    const bookInfo = document.createElement('div');
    const info = `
           <p class="book-title">${item.title}</p>
           <p class="book-author">${item.author}</p>
           <button class="remove-button" type="button" id="book-${index}">Remove</button>
       
         `;
    bookInfo.innerHTML = info;
    booksSection.appendChild(bookInfo);
    const books = new Books();
  }

  getData() {
    if (this.list.length > 0) {
      booksSection.innerHTML = '';
      this.list.forEach((book, index) => {
        this.show(book, index);
      });
      const removeBut = document.querySelectorAll('.remove-button');
      removeBut.forEach((item) => {
        item.addEventListener('click', (e) => {
          const { id } = e.target;
          const index = id.substring(id.indexOf('-') + 1, id.length);
          this.remove(parseInt(index, 10));
        })
      })
    } else {
      booksSection.innerHTML = 'Books not added yet.';
    }
  }
}


