const myLibrary = [
          {
            id: "1111",
            title: 'book1',
            author: 'author1',
            pages: 101,
            read: false
          },
          {
            id: "2222",
            title: 'book2',
            author: 'author2',
            pages: 102,
            read: true
          },
          {
            id: "3333",
            title: 'book',
            author: 'author',
            pages: 103,
            read: true
          },
          {
            id: "4444",
            title: 'book4',
            author: 'author4',
            pages: 104,
            read: true
          },
          {
            id: "5555",
            title: 'book5',
            author: 'author5',
            pages: 105,
            read: false
          },
          {
            id: "6666",
            title: 'book6',
            author: 'author6',
            pages: 106,
            read: true
          },
          {
            id: "7777",
            title: 'book7',
            author: 'author7',
            pages: 107,
            read: false
          },
          {
            id: "8888",
            title: 'book8',
            author: 'author8',
            pages: 108,
            read: false
          },
          {
            id: "9999",
            title: 'book9',
            author: 'author9',
            pages: 109,
            read: true
          },
          {
            id: "1010",
            title: 'book10',
            author: 'author10',
            pages: 110,
            read: true
          },
          {
            id: "11111",
            title: 'book11',
            author: 'author11',
            pages: 111,
            read: true
          },
          {
            id: "1212",
            title: 'book12',
            author: 'author12',
            pages: 102,
            read: false
          },
          {
            id: "1313",
            title: 'book13',
            author: 'author13',
            pages: 113,
            read: true
          },
          {
            id: "1414",
            title: 'book14',
            author: 'author14',
            pages: 114,
            read: true
          }
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
      book.textContent = key + ": " + newBook[`${key}`]
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

  const svgNS = "http://www.w3.org/2000/svg";

  const delBtn = document.createElementNS(svgNS, 'svg')
  delBtn.setAttribute("viewBox", "0 0 24 24")

  const svgTitle = document.createElementNS(svgNS, 'title');
  svgTitle.textContent = "close-circle-outline"

  delBtn.appendChild(svgTitle);

  const svgPath = document.createElementNS(svgNS, 'path')
  svgPath.setAttribute("d", "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z")

  delBtn.appendChild(svgPath);

  delBtn.id = id;
  delBtn.classList.add("del-btn")

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

  modal.classList.remove('show-modal');

});

const renderLibrary = (array) => {
  array.forEach(element => {
    const card = document.createElement('div')
    card.classList.add('card')
    for (key in element) {
      if (key !== 'id' && key !== 'read') {
        const book = document.createElement('div')
        book.classList.add(key)
        book.textContent = key + ": " + element[key]
        card.appendChild(book);
      }

      if (key === "read") {
        const book = document.createElement('button')
        book.classList.add(key)

        if (element[key] === true) {
          book.textContent = 'Read'
        } else {
          book.textContent = 'Unread'
        }

        book.addEventListener('click', () => {
          const e = document.getElementById(element['id']);
          const pos = myLibrary.map(e => e.id).indexOf(element['id']);
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

    const svgNS = "http://www.w3.org/2000/svg";

    const delBtn = document.createElementNS(svgNS, 'svg')
    delBtn.setAttribute("viewBox", "0 0 24 24")

    const svgTitle = document.createElementNS(svgNS, 'title');
    svgTitle.textContent = "close-circle-outline"

    delBtn.appendChild(svgTitle);

    const svgPath = document.createElementNS(svgNS, 'path')
    svgPath.setAttribute("d", "M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z")

    delBtn.appendChild(svgPath);

    delBtn.id = element['id'];
    delBtn.classList.add("del-btn")
    // delBtn.textContent = "delete"

    delBtn.addEventListener('click', () => {
      const elem = document.getElementById(delBtn.id);
      const pos = myLibrary.map(e => e.id).indexOf(delBtn.id);
      elem.parentElement.remove();
      myLibrary.splice(pos, 1);
    })

    card.appendChild(delBtn);
    bookcase.appendChild(card);
  });
}

//close
const close = document.getElementById('close');

//open
const open = document.getElementById('open');

//modal
const modal = document.getElementById('modal');

open.addEventListener('click', () => modal.classList.add('show-modal'));

close.addEventListener('click', () => modal.classList.remove('show-modal'));

modal.addEventListener('click', e => {
  e.target === modal ? modal.classList.remove('show-modal') : false
});


renderLibrary(myLibrary)




