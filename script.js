// const crypto = require('crypto');

const myLibrary = [
          // {
          //   title: 'book1',
          //   author: 'author1',
          //   pages: 101,
          //   read: false
          // },
          // {
          //   title: 'book2',
          //   author: 'author2',
          //   pages: 102,
          //   read: true
          // }
        ];

function Book (id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const bookcase = document.querySelector('.bookcase')

function addBookToLibrary(id, title, author, pages, read) {
  var newBook = new Book(id, title, author, pages, read)
  myLibrary.push(newBook)

  const card = document.createElement('div')
  card.classList.add('card')

  for (key in newBook) {
    if (key !== 'id' && key !== 'read') {
      const book = document.createElement('div')
      book.classList.add(key)
      book.textContent = newBook[`${key}`]
      card.appendChild(book);
    }

    if (key === "read") {
      const book = document.createElement('button')
      book.classList.add(key)

      if (newBook[`${key}`] === true) {
        book.textContent = 'Read'
      } else {
        book.textContent = 'Unread'
      }

      book.addEventListener('click', () => {
        const e = document.getElementById(id);
        const pos = myLibrary.map(e => e.id).indexOf(id);
        if (book.textContent === 'Unread') {
          book.textContent = "Read";
          myLibrary[pos]["read"] = true
        } else {
          book.textContent = "Unread";
          myLibrary[pos]["read"] = false
        }
      })

      card.appendChild(book);
    }
  }

  const delBtn = document.createElement('button')
  delBtn.id = id;
  delBtn.classList.add("del-btn")
  delBtn.textContent = "delete"

  delBtn.addEventListener('click', () => {
    const elem = document.getElementById(delBtn.id);
    const pos = myLibrary.map(e => e.id).indexOf(delBtn.id);
    elem.parentElement.remove();
    myLibrary.splice(pos, 1);
  })

  card.appendChild(delBtn);
  bookcase.appendChild(card);
}

const form = document.getElementById('newBookForm');

form.addEventListener('submit', (e) => {
  // Prevent the default form submission (page reload)
  e.preventDefault();

  const title = document.getElementById("title")
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const read = document.getElementById('read');

  const uuid = window.crypto.randomUUID();

  addBookToLibrary(uuid, title.value, author.value, pages.value, read.checked);

  form.reset();

});

// const test = (array) => {
//   array.forEach(element => {
//     const card = document.createElement('div')
//     card.classList.add('card')
//     for (key in element) {
//       const book = document.createElement('div')
//       book.classList.add(`${key}`)
//       book.textContent = element[`${key}`]
//       card.appendChild(book);
//     }
//     bookcase.appendChild(card);
//   });
// }





