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

// nav bar

const showBookList = document.querySelector('#showList');
const showNewAdd = document.querySelector('#showAddBook');
const showContact = document.querySelector('#showContact');

const bookContainer = document.querySelector('#book-container');
const addNew = document.querySelector('#add-new');
const contactSection = document.querySelector('#contact-section');

addNew.classList.add('hideSection');
contactSection.classList.add('hideSection');

function showPage(section) {
  if (section === bookContainer) {
    bookContainer.classList.remove('hideSection');
    addNew.classList.add('hideSection');
    contactSection.classList.add('hideSection');
  } else if (section === addNew) {
    bookContainer.classList.add('hideSection');
    addNew.classList.remove('hideSection');
    contactSection.classList.add('hideSection');
  } else if (section === contactSection) {
    bookContainer.classList.add('hideSection');
    addNew.classList.add('hideSection');
    contactSection.classList.remove('hideSection');
  }
}

showBookList.addEventListener('click', () => { showPage(bookContainer); });
showNewAdd.addEventListener('click', () => { showPage(addNew); });
showContact.addEventListener('click', () => { showPage(contactSection); });
