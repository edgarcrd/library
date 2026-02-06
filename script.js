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

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  console.log(pages)

  const newBook = {title: title, author: author, pages: pages, read: read}

  myLibrary.push(newBook)


  //MAKE THIS ONE A FUNCTION AND ADD IT TO "TEST" FUNCTION
  const card = document.createElement('div')
  card.classList.add('card')
  for (key in newBook) {
    const book = document.createElement('div')
    book.classList.add(key)
    book.textContent = newBook[`${key}`]
    card.appendChild(book);
  }
  bookcase.appendChild(card);

  console.log(myLibrary)
}

const bookcase = document.querySelector('.bookcase')
// const card = document.createElement('div')
// card.textContent = 'Hello'


const test = (array) => {
  array.forEach(element => {
    const card = document.createElement('div')
    card.classList.add('card')
    for (key in element) {
      const book = document.createElement('div')
      book.classList.add(`${key}`)
      book.textContent = element[`${key}`]
      card.appendChild(book);
    }
    bookcase.appendChild(card);
  });
}

const form = document.getElementById('newBookForm');

form.addEventListener('submit', (e) => {


  console.log('hey')
  // Prevent the default form submission (page reload)
  e.preventDefault();

  // const formData = new FormData(form);

  // const title = formData.get('title');

  // document.getElementById("read").checked = true;


  //FIGURE OUT CHECKBOX

  const title = document.getElementById("title")
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const read = document.getElementById('read');

  addBookToLibrary(title.value, author.value, pages.value, read.checked);

  // title.value = "";
  // author.value = "";
  // pages.value = "";
  // read.value = "";

  form.reset();

  // test(myLibrary)
});

// addBookToLibrary("Mi Vida", "Edgar J", 120, false);

// test(myLibrary)

