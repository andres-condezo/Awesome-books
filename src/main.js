// sticky menu

const header = document.getElementById('header');
const sticky = header.offsetTop;

function stickMenu() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

window.onscroll = () => { stickMenu(); };

// *****************
// Global variables
// *****************

const $ = (selector) => document.querySelector(selector);

const $addBookBtn = $('#addBookBtn');
const $bookContainer = $('#book-container');
const $titleInput = $('#titleInput');
const $authorInput = $('#authorInput');

class BookApp {
  constructor() {
    this.bookCollection = [];
  }

  // ***************
  // Local Storage
  // ***************

  saveLocal = () => {
    const catchCollection = JSON.stringify(this.bookCollection);
    localStorage.setItem('bookCollection', catchCollection);
  }

  getLocal = () => {
    if (localStorage.getItem('bookCollection')) {
      this.bookCollection = JSON.parse(localStorage.getItem('bookCollection'));
    }
  }

  // ***************
  // main functions
  // ***************

  createBook = (newTitle, newAuthor) => {
    const book = {
      title: newTitle,
      author: newAuthor,
    };
    return book;
  }

  renderBooks = () => {
    $bookContainer.innerHTML = '';
    this.bookCollection.forEach((book) => {
      const article = document.createElement('article');
      article.className = 'article-book';
      article.innerHTML = `
  <h3 class="bookTitle">"${book.title}" by ${book.author}</h3>
  <button type='button' class="removeBookBtn">Remove</button>
  `;
      $bookContainer.appendChild(article);
    });
  }

  createRemoveFunction = () => {
    const removeBtnArray = document.querySelectorAll('.removeBookBtn');
    removeBtnArray.forEach((button, index) => {
      button.addEventListener('click', () => {
        this.bookCollection.splice(index, 1);
        this.renderBooks();
        this.createRemoveFunction();
        this.saveLocal();
      });
    });
  }

  displayBookCollection = () => {
    this.renderBooks();
    this.createRemoveFunction();
  }

  clearFields = () => {
    $titleInput.value = '';
    $authorInput.value = '';
  }

  addBook = () => {
    if ($titleInput.value && $authorInput.value) {
      const newBook = this.createBook($titleInput.value, $authorInput.value);
      this.bookCollection.push(newBook);
      this.displayBookCollection();
      this.saveLocal();
      this.clearFields();
    }
  }

  main = () => {
    this.getLocal();
    this.displayBookCollection();
    $addBookBtn.addEventListener('click', this.addBook);
  }
}

const newApp = new BookApp();
newApp.main();


const showBookList = document.querySelector('#showList');
const showNewAdd = document.querySelector('#showAddBook');
const showContact = document.querySelector('#showContact');

const bookContainer = document.querySelector('#book-container');
const addNew = document.querySelector('#add-new');
const contactSection = document.querySelector('#contact-section');


showBookList.addEventListener('click', () => {
  bookContainer.classList.toogle('hiddenSection')
  addNew.classList.toogle('hiddenSection')
  showContact.classList.toogle('hiddenSection')
})

showNewAdd.addEventListener('click', () => {
  bookContainer.classList.toogle('hiddenSection')
  addNew.classList.toogle('hiddenSection')
  showContact.classList.toogle('hiddenSection')
})
