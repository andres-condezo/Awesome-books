const btnArr = document.querySelectorAll('.menu-link');
const sectionArr = document.querySelectorAll('.section');

const activateSection = (btn, section) => {
  btn.classList.add('activeLink');
  section.classList.remove('hideSection');
};

const deactivateSection = (btn, section) => {
  btn.classList.remove('activeLink');
  section.classList.add('hideSection');
};

const showPage = (index) => {
  for (let i = 0; i < sectionArr.length; i += 1) {
    if (i === index) {
      activateSection(btnArr[i], sectionArr[i]);
    } else {
      deactivateSection(btnArr[i], sectionArr[i]);
    }
  }
};

btnArr.forEach((btn, index) => {
  btn.addEventListener('click', () => { showPage(index); });
});

showPage(0);
