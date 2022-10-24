const bookOne = {
  title: 'title',
  author: 'author',
}

const booksArr = [bookOne];

const addButton = document.getElementById('add');

addButton.addEventListener('click', () => {
  var boxTitle1 = document.getElementById("title").value;
  var boxAuthor1 = document.getElementById("author").value;
  var newObject = Object.create(bookOne);
  newObject.title = boxTitle1;
  newObject.author = boxAuthor1;
  booksArr.push(newObject);

  function bookCreate() {
    const newBook = document.createElement('div');
    newBook.classList = 'newBook';
    document.getElementById('newBooks').appendChild(newBook);

    const newTitle = document.createElement('h2');
    newTitle.className = 'newTitle';
    const textBox1 = document.createTextNode(newObject.title);
    newTitle.appendChild(textBox1);
    newBook.append(newTitle);

    const newAuthor = document.createElement('h3');
    newAuthor.className = 'newAuthor';
    const textBox2 = document.createTextNode(newObject.author);
    newAuthor.appendChild(textBox2);
    newBook.append(newAuthor);

    var removeBut = document.createElement('button');
    removeBut.classList = 'removeBut';
    const butText = document.createTextNode('Remove');
    removeBut.append(butText);
    newBook.append(removeBut);

    const hr = document.createElement('hr');
    hr.classList = 'hr';
    newBook.append(hr);

    removeBut.removeEventListener('click', bookCreate, false)

    removeBut.addEventListener('click', () => { 
    });
  }
  bookCreate();
  removeBut.removeEventListener('click', bookCreate, false)
});



