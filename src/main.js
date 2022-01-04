// *****************
// Global variables
// *****************

const $ = (selector) => document.querySelector(selector);

const $titleInput = $('#titleInput');
const $authorInput = $('#authorInput');
const $addBookBtn = $('#addBookBtn');
const $bookContainer = $('#book-container');



// ***************
// Local Storage
// ***************

class Collection {
  constructor() {
    this.bookCollection = [];
  }



saveLocal() {
  const catchCollection = JSON.stringify(this.bookCollection);
  localStorage.setItem('bookCollection', catchCollection);
}

getLocal() {
  if (localStorage.getItem('bookCollection')) {
    this.bookCollection = JSON.parse(localStorage.getItem('bookCollection'));
  }
}

// ***************
// main functions
// ***************

bookTemplate(el) {
  return `
<h3 class="bookTitle">${el.title}</h3>
<p class="bookAuthor">${el.author}</p>
<button type='button' class="removeBookBtn">Remove</button>
`;
}

renderBooks() {
  $bookContainer.innerHTML = '';
  this.bookCollection.forEach((el) => {
    const article = document.createElement('article');
    article.className = 'article-book';
    article.innerHTML = this.bookTemplate(el);
    $bookContainer.appendChild(article);
  });
}

createRemoveBtn() {
  const $removeBookBtn = document.querySelectorAll('.removeBookBtn');
  $removeBookBtn.forEach((el, index) => {
    el.addEventListener('click', () => {
      bookCollection.splice(index, 1);
      this.renderBooks();
      this.createRemoveBtn();
      this.saveLocal();
    });
  });
}

displayBookCollection() {
  this.renderBooks();
  this.createRemoveBtn();
}

clearFields() {
  $titleInput.value = '';
  $authorInput.value = '';
}

addBook() {
  if ($titleInput.value && $authorInput.value) {
    this.bookCollection.push({
      title: $titleInput.value,
      author: $authorInput.value,
    });
    this.displayBookCollection();
    this.saveLocal();
    this.clearFields();
  }
}

main() {
  this.getLocal();
  this.displayBookCollection();
  $addBookBtn.addEventListener('click', this.addBook);
}
}



const Book = new Collection();
Book.main();
