#!/usr/bin/env node

let bookCollection = [];

const $ = selector => document.querySelector(selector) 

const $titleInput = $('#titleInput');
const $authorInput = $('#authorInput');
const $addBookBtn = $('#addBookBtn');

let bookId = 0;

function addBook() {
	bookCollection.push({title: $titleInput.value, author: $authorInput.value, id: bookId});
	displayBookCollection();
	console.log(bookCollection);
	bookId += 1;
}

$addBookBtn.addEventListener('click', addBook)


function removeBook() {
	console.log("book added");
}

function createBook(el) {
return `
<h3 class="bookTitle">${el.title}</h3>
<p class="bookAuthor">${el.author}</p>
<button type='button' class="addBook">Remove</button>`

}

function catchLocal() {


}

function getLocal() {

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
