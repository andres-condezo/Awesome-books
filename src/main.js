// *****************
// Global variables
// *****************

const $ = (selector) => document.querySelector(selector);

const $addBookBtn = $('#addBookBtn');
const $bookContainer = $('#book-container');
const $titleInput = $('#titleInput');
const $authorInput = $('#authorInput');

// ***************
// Local Storage
// ***************

class BookApp {
  constructor() {
    this.bookCollection = [];
  }

  book = (titlePar, authorPar) => {
    const bookObj = {
      title: titlePar,
      author: authorPar,
    };
    return bookObj;
  }

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

  renderBooks = () => {
    $bookContainer.innerHTML = '';
    this.bookCollection.forEach((el) => {
      const article = document.createElement('article');
      article.className = 'article-book';
      article.innerHTML = `
  <h3 class="bookTitle">"${el.title}" by ${el.author}</h3>
  <button type='button' class="removeBookBtn">Remove</button>
  `;
      $bookContainer.appendChild(article);
    });
  }

  createRemoveBtn = () => {
    const $removeBookBtn = document.querySelectorAll('.removeBookBtn');
    $removeBookBtn.forEach((el, index) => {
      el.addEventListener('click', () => {
        this.bookCollection.splice(index, 1);
        this.renderBooks();
        this.createRemoveBtn();
        this.saveLocal();
      });
    });
  }

  displayBookCollection = () => {
    this.renderBooks();
    this.createRemoveBtn();
  }

  clearFields = () => {
    $titleInput.value = '';
    $authorInput.value = '';
  }

  addBook = () => {
    if ($titleInput.value && $authorInput.value) {
      const newBook = this.book($titleInput.value, $authorInput.value);
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
