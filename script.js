const myLibrary = [
    {
        id: 1,
        author: 'Gabriel García Márquez',
        title: 'Cien años de soledad',
        genre: 'Novela',
        pages: 700,
        read: true
    }, 
    {
        id: 2,
        author: 'Pedro Salinas',
        title: 'La voz a ti debida',
        genre: 'Poesía',
        pages: 200,
        read: true
    }
];

function Book(id, author, title, genre, pages, read = false) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }    
    this.id = id;
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

// function addBookToLibrary(author, title, genre, pages) {
//     const id = crypto.randomUUID();
//     const book = new Book(id, author, title, genre, pages);
//     myLibrary.push(book);
// }

// addBookToLibrary("Stefan Zweig", "El mundo de ayer", "Biografía", 890);
// addBookToLibrary("George Orwell", "1984", "Novela", 400);
// console.log(myLibrary);

// const books = document.querySelector('.books');
// console.log(books);

// function renderLibrary() {
//     for (let book of myLibrary) {
//         const newBook = document.createElement('div');
//         const title = document.createElement('h4');
//         const author = document.createElement('p');
//         title.textContent = book.title;
//         author.textContent = book.author;
//         newBook.append(title);
//         newBook.append(author);
//         books.append(newBook);
//     }
// }

// renderLibrary();