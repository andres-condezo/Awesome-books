const linkArr = document.querySelectorAll('.menu-link');
const sectionArr = document.querySelectorAll('.section');

const activateSection = (index) => {
  linkArr[index].classList.add('activeLink');
  sectionArr[index].classList.remove('hideSection');
};

const deactivateSection = (index) => {
  linkArr[index].classList.remove('activeLink');
  sectionArr[index].classList.add('hideSection');
};

const showPage = (index) => {
  sectionArr.forEach((_, i) => { deactivateSection(i); });
  activateSection(index);
};

linkArr.forEach((btn, index) => {
  btn.addEventListener('click', () => { showPage(index); });
});

showPage(0);
