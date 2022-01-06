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

const neutralColor = '#172b4d';
const accentColor = '#2230d2';

addNew.classList.add('hideSection');
contactSection.classList.add('hideSection');
showBookList.style.color = accentColor;

const showPage = (section) => {
  if (section === bookContainer) {
    bookContainer.classList.remove('hideSection');
    showBookList.style.color = accentColor;
    addNew.classList.add('hideSection');
    showNewAdd.style.color = neutralColor;
    contactSection.classList.add('hideSection');
    showContact.style.color = neutralColor;
  } else if (section === addNew) {
    bookContainer.classList.add('hideSection');
    showBookList.style.color = neutralColor;
    addNew.classList.remove('hideSection');
    showNewAdd.style.color = accentColor;
    contactSection.classList.add('hideSection');
    showContact.style.color = neutralColor;
  } else if (section === contactSection) {
    bookContainer.classList.add('hideSection');
    showBookList.style.color = neutralColor;
    addNew.classList.add('hideSection');
    showNewAdd.style.color = neutralColor;
    contactSection.classList.remove('hideSection');
    showContact.style.color = accentColor;
  }
};

showBookList.addEventListener('click', () => { showPage(bookContainer); });
showNewAdd.addEventListener('click', () => { showPage(addNew); });
showContact.addEventListener('click', () => { showPage(contactSection); });
