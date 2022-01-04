// *****************
// Global variables
// *****************

const $ = (selector) => document.querySelector(selector);

const $titleInput = $('#titleInput');
const $authorInput = $('#authorInput');
const $addBookBtn = $('#addBookBtn');
const $bookContainer = $('#book-container');

let bookCollection = [];

// ***************
// Local Storage
// ***************

function saveLocal() {
  const catchCollection = JSON.stringify(bookCollection);
  localStorage.setItem('bookCollection', catchCollection);
}

function getLocal() {
  if (localStorage.getItem('bookCollection')) {
    bookCollection = JSON.parse(localStorage.getItem('bookCollection'));
  }
}

// ***************
// main functions
// ***************

function bookTemplate(el) {
  return `
<h3 class="bookTitle">${el.title}</h3>
<p class="bookAuthor">${el.author}</p>
<button type='button' class="removeBookBtn">Remove</button>
`;
}

function renderBooks() {
  bookCollection.forEach((el) => {
    const article = document.createElement('article');
    article.className = 'article-book';
    article.innerHTML = bookTemplate(el);
    $bookContainer.appendChild(article);
  });
}

function createRemoveBtn() {
  const $removeBookBtn = document.querySelectorAll('.removeBookBtn');
  $removeBookBtn.forEach((el, index) => {
    el.addEventListener('click', () => {
      bookCollection.splice(index, 1);
      renderBooks();
      saveLocal();
    });
  });
}

function displayBookCollection() {
  $bookContainer.innerHTML = '';
  renderBooks();
  createRemoveBtn();
}

function clearFields() {
  $titleInput.value = '';
  $authorInput.value = '';
}

function addBook() {
  if ($titleInput.value && $authorInput.value) {
    bookCollection.push({
      title: $titleInput.value,
      author: $authorInput.value,
    });
    displayBookCollection();
    saveLocal();
    clearFields();
  }
}

function main() {
  getLocal();
  displayBookCollection();
  $addBookBtn.addEventListener('click', addBook);
}

main();
