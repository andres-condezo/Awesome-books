#!/usr/bin/env node

let bookCollection = [
	{
		title: 'Book 1',
		author: 'jose',
		id: 0
	},
	{
		title: 'Book 2',
		author: 'andres',
		id: 1
	},
	{
		title: 'Book 3',
		author: 'microverse',
		id: 2
	},
];

function addBook() {

}

function removeBook() {
	console.log("book added");
}

function createBook(el) {
return `
<h3 class="bookTitle">${el.title}</h3>
<p class="bookAuthor">${el.author}</p>
<button type='button' class="addBook">Remove</button>`

}


function displayBookCollection() {
}

const bookContainer = document.querySelector('#book-container');

const myBooks = bookCollection.map( (el)=>{
		const article = document.createElement('article');
		article.className= 'article-book';
		article.innerHTML = createBook(el);
		bookContainer.appendChild(article);
	}
)
	


// for(let i = 0; i < myBooks.length; i+=1) {
// 	bookContainer(myBooks[i]);
// 	console.log('3')
// }
	