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

const activateSection = (section) => {
  section.classList.remove('hideSection');
};

const deactivateSection = (section, section2) => {
  section.classList.add('hideSection');
  section2.classList.add('hideSection');
};

const btnArr = document.querySelectorAll('.menu-link');
const sectionArr = [bookContainer, addNew, contactSection];

activateSection(sectionArr[0]);
deactivateSection(sectionArr[1], sectionArr[2]);

const showPage = (section) => {
  if (section === bookContainer) {
    activateSection(sectionArr[0]);
    deactivateSection(sectionArr[1], sectionArr[2]);
  } else if (section === addNew) {
    activateSection(sectionArr[1]);
    deactivateSection(sectionArr[0], sectionArr[2]);
  } else if (section === contactSection) {
    activateSection(sectionArr[2]);
    deactivateSection(sectionArr[0], sectionArr[1]);
  }
};

btnArr.forEach((btn, index) => {
  btn.addEventListener('click', () => { showPage(sectionArr[index]); });
});
