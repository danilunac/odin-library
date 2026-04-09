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

function addBookToLibrary(title, author, genre, pages) {
    const id = crypto.randomUUID();
    const book = new Book(id, author, title, genre, pages);
    myLibrary.push(book);
}

addBookToLibrary("El mundo de ayer", "Stefan Zweig", "Biografía", 890);
addBookToLibrary("1984", "George Orwell", "Novela", 400);

const books = document.querySelector('.books-grid');

function renderLibrary() {
    books.textContent = '';
    for (let book of myLibrary) {
        const newBook = document.createElement('div');
        newBook.classList.add('book-card');
        const title = document.createElement('h4');
        const author = document.createElement('p');
        const genre = document.createElement('p');
        const pages = document.createElement('p');
        const read = document.createElement('p');
        const deleteBtn = document.createElement('button');
        title.textContent = book.title;
        author.textContent = book.author;
        genre.textContent = book.genre;
        pages.textContent = book.pages;
        read.textContent = book.read;
        deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>'
        newBook.append(title);
        newBook.append(author);
        newBook.append(genre);
        newBook.append(pages);
        newBook.append(read);
        newBook.append(deleteBtn);
        books.append(newBook);
    }
}

renderLibrary();

function isValidBook ({ title, author, genre, pages }) {
    return (
        title.trim() !== '' && 
        author.trim() !== '' && 
        genre.trim() !== '' && 
        pages.trim() !== ''
    );
}

const addBookForm = document.querySelector('.form-books');
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const bookTitle = document.querySelector('#book_title').value;
    const bookAuthor = document.querySelector('#book_author').value;
    const bookGenre = document.querySelector('#book_genre').value;
    const bookPages = document.querySelector('#book_pages').value;

    if (isValidBook({
        title: bookTitle, 
        author: bookAuthor, 
        genre: bookGenre, 
        pages: bookPages
    })) {
        addBookToLibrary(bookTitle, bookAuthor, bookGenre, bookPages);
        renderLibrary();
        addBookForm.reset();
    }
});
