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

const bookContainer = document.querySelector('#book-container');
const addNew = document.querySelector('#add-new');
const contactSection = document.querySelector('#contact-section');

const activateSection = (btn, section) => {
  btn.classList.add('activeLink');
  section.classList.remove('hideSection');
};

const deactivateSection = (btn, btn2, section, section2) => {
  btn.classList.remove('activeLink');
  btn2.classList.remove('activeLink');
  section.classList.add('hideSection');
  section2.classList.add('hideSection');
};

const btnArr = document.querySelectorAll('.menu-link');
const sectionArr = [bookContainer, addNew, contactSection];

activateSection(btnArr[0], sectionArr[0]);
deactivateSection(btnArr[1], btnArr[2], sectionArr[1], sectionArr[2]);

const showPage = (section) => {
  if (section === bookContainer) {
    activateSection(btnArr[0], sectionArr[0]);
    deactivateSection(btnArr[1], btnArr[2], sectionArr[1], sectionArr[2]);
  } else if (section === addNew) {
    activateSection(btnArr[1], sectionArr[1]);
    deactivateSection(btnArr[0], btnArr[2], sectionArr[0], sectionArr[2]);
  } else if (section === contactSection) {
    activateSection(btnArr[2], sectionArr[2]);
    deactivateSection(btnArr[0], btnArr[1], sectionArr[0], sectionArr[1]);
  }
};

btnArr.forEach((btn, index) => {
  btn.addEventListener('click', () => { showPage(sectionArr[index]); });
});
