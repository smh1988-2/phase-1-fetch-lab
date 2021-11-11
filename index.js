const BASE_URL = "https://anapioficeandfire.com/api/books"

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch(BASE_URL)
  .then((res) => res.json())
  .then((books => renderBooks(books)))
}

let numOfPages = 0

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    numOfPages = numOfPages + (book["numberOfPages"])
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name + ". Pages: " + book.numberOfPages;
    main.appendChild(h2);
    console.log(numOfPages)

    
  });
}



document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
