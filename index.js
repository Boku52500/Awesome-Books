import AwesomeBooks from "../modules/BooksClass.js";

import { DateTime } from "../modules/luxon.js";


const books = new AwesomeBooks();

const popup = document.querySelector('.popup');
const addBut = document.querySelector('#addBut');
addBut.addEventListener('click', (e) => {
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

const date = DateTime.now();
const dateNow = date.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
document.getElementById('timeDate').innerHTML = dateNow;
document.addEventListener('DOMContentLoaded', Actions.display);
close.addEventListener('click', () => {
  popup.classList.add('display');
});