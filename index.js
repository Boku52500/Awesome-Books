import Awesome from './modules/Awesome.js';

import Books from './modules/Books.js';

import { DateTime } from './modules/luxon.js';

const popup = document.querySelector('.popup');
const addBut = document.querySelector('#addBut');
const listPage = document.querySelector('#list');
const addBook = document.querySelector('#addBook');
const contactPage = document.querySelector('#contact');
const seeMain = document.querySelector('#seeMain');
const firstPage = document.querySelector('#firstpage');
const secondPage = document.querySelector('#secondpage');
const thirdPage = document.querySelector('#thirdpage');
const close = document.querySelector('#close');

const books = new Books();
books.getData();
addBut.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Awesome();
  book.title = document.getElementById('title').value;
  book.author = document.getElementById('author').value;
  books.add(book);
  popup.classList.remove('display');
  setTimeout(() => popup.classList.add('display'), 2000);
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

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
close.addEventListener('click', () => {
  popup.classList.add('display');
});

const date = DateTime.now();
const dateNow = date.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
document.getElementById('timeDate').innerHTML = dateNow;
document.addEventListener('DOMContentLoaded');
close.addEventListener('click', () => {
  popup.classList.add('display');
});