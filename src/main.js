#!/usr/bin/env node

let bookCollection = [];

const $ = selector => document.querySelector(selector) 

const $titleInput = $('#titleInput');
const $authorInput = $('#authorInput');
const $addBookBtn = $('#addBookBtn');

let bookId = bookCollection.length;


function catchLocal() {
	const catchCollection = JSON.stringify(bookCollection);
	const catchId = JSON.stringify(bookId);

	localStorage.setItem('bookCollection', catchCollection);
	localStorage.setItem('bookId', catchId);
}


function getLocal() {
	if (localStorage.getItem('bookCollection')){
	bookCollection = JSON.parse(localStorage.getItem('bookCollection'));
	bookId = JSON.parse(localStorage.getItem('bookId'));
	catchLocal();
	}
}


function addBook() {
	bookCollection.push({title: $titleInput.value, author: $authorInput.value, id: bookId});
	displayBookCollection();
	bookId += 1;
	catchLocal();
}

getLocal();
window.onload = getLocal();

$addBookBtn.addEventListener('click', addBook)


function removeBook() {

	catchLocal();
}

function createBook(el) {
return `
<h3 class="bookTitle">${el.title}</h3>
<p class="bookAuthor">${el.author}</p>
<button type='button' class="addBook">Remove</button>`
}


function displayBookCollection() {
	const bookContainer = document.querySelector('#book-container');
	bookContainer.innerHTML = '';

	bookCollection.map( (el)=>{
			const article = document.createElement('article');
			article.className= 'article-book';
			article.innerHTML = createBook(el);
			bookContainer.appendChild(article);
		}
		)
}

displayBookCollection();
