// *****************
// Global variables
// *****************

const $ = (selector) => document.querySelector(selector);

const $titleInput = $('#titleInput');
const $authorInput = $('#authorInput');
const $addBookBtn = $('#addBookBtn');
const $bookContainer = $('#book-container');
const $title = $titleInput.value;
const $author = $authorInput.value;

// ***************
// Local Storage
// ***************

class BookApp {
  constructor() {
    this.bookCollection = [];
  }

  static book(titlePar, authorPar) {
    const bookObj = {
      title: titlePar,
      author: authorPar,
    };
    return bookObj;
  }

  static saveLocal() {
    const catchCollection = JSON.stringify(BookApp.bookCollection);
    localStorage.setItem('bookCollection', catchCollection);
  }

  static getLocal() {
    if (localStorage.getItem('bookCollection')) {
      BookApp.bookCollection = JSON.parse(localStorage.getItem('bookCollection'));
    }
  }

  // ***************
  // main functions
  // ***************

  static bookTemplate(el) {
    return `
  <h3 class="bookTitle">${el.title}</h3>
  <p class="bookAuthor">${el.author}</p>
  <button type='button' class="removeBookBtn">Remove</button>
  `;
  }

  static renderBooks() {
    $bookContainer.innerHTML = '';
    console.log('dentro de forEach');
    BookApp.bookCollection.forEach((el) => {
      const article = document.createElement('article');
      article.className = 'article-book';
      article.innerHTML = BookApp.bookTemplate(el);
      $bookContainer.appendChild(article);
    });
  }

  static createRemoveBtn() {
    const $removeBookBtn = document.querySelectorAll('.removeBookBtn');
    $removeBookBtn.forEach((el, index) => {
      el.addEventListener('click', () => {
        BookApp.bookCollection.splice(index, 1);
        BookApp.renderBooks();
        BookApp.createRemoveBtn();
        BookApp.saveLocal();
      });
    });
  }

  static displayBookCollection() {
    BookApp.renderBooks();
    BookApp.createRemoveBtn();
  }

  static clearFields() {
    $titleInput.value = '';
    $authorInput.value = '';
  }

  static addBook() {
    if ($titleInput.value && $authorInput.value) {
      const newBook = BookApp.book($title, $author);
      BookApp.bookCollection.push(newBook);
      BookApp.displayBookCollection();
      BookApp.saveLocal();
      BookApp.clearFields();
    }
  }
}

// main() {
BookApp.getLocal();
BookApp.displayBookCollection();
$addBookBtn.addEventListener('click', BookApp.addBook);
// }
// const Book = new Collection();
// Book.main();
