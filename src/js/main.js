// *****************
// Global variables
// *****************

const $ = (selector) => document.querySelector(selector);

const $addBookBtn = $('#addBookBtn');
const $bookContainer = $('#list-book');
const $titleInput = $('#titleInput');
const $authorInput = $('#authorInput');

// ***************
// BookApp Class
// ***************

class BookApp {
  constructor() {
    this.bookCollection = [];
  }

  // Local Storage

  saveLocal = () => {
    const catchCollection = JSON.stringify(this.bookCollection);
    localStorage.setItem('bookCollection', catchCollection);
  }

  getLocal = () => {
    if (localStorage.getItem('bookCollection')) {
      this.bookCollection = JSON.parse(localStorage.getItem('bookCollection'));
    }
  }

  // main functions

  createBook = (newTitle, newAuthor) => {
    const book = {
      title: newTitle,
      author: newAuthor,
    };
    return book;
  }

  bookTemplate = (book) => `
  <h3 class="bookTitle">"${book.title}" by ${book.author}</h3>
  <button type='button' class="removeBookBtn">Remove</button>
  `;

  renderBooks = () => {
    $bookContainer.innerHTML = '';
    this.bookCollection.forEach((book) => {
      const article = document.createElement('article');
      article.className = 'article-book';
      article.innerHTML = this.bookTemplate(book);
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
      this.clearFields();
      this.saveLocal();
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
