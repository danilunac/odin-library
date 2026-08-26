let myLibrary = [];

class Book {
    constructor(id, title, author, genre, pages, read = false) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
        this.read = read;
    }

    toggleRead() {
        this.read = !this.read;
    }
}

function addBookToLibrary(title, author, genre, pages) {
    const id = crypto.randomUUID();
    const book = new Book(id, title, author, genre, pages);
    myLibrary.push(book);
}

function removeBook(id) {
    myLibrary = myLibrary.filter(book => book.id !== id)
    renderLibrary();
}

function createRow(label, value) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('book-card-row');
    const spanLabel = document.createElement('span');
    const pValue = document.createElement('p');
    spanLabel.textContent = label;
    pValue.textContent = value;
    rowContainer.append(spanLabel);
    rowContainer.append(pValue);
    return rowContainer;
}

addBookToLibrary("Darkest Hour", "Anthony McCarten", "History", 108);

const books = document.querySelector('.books-grid');

function renderLibrary() {
    books.textContent = '';
    for (let book of myLibrary) {
        const newBook = document.createElement('div');
        newBook.classList.add('book-card');
        newBook.dataset.id = book.id;
        const buttons = document.createElement('div');
        buttons.classList.add('book-buttons')
        const readBtn = document.createElement('button');
        readBtn.classList.add('book-read');
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('book-delete');
        readBtn.textContent = book.read ? 'Mark Unread' : 'Mark Read';
        readBtn.classList.toggle('read', book.read);
        readBtn.classList.toggle('unread', !book.read);
        deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>';
        buttons.append(readBtn);
        buttons.append(deleteBtn);
        newBook.append(createRow('Title', book.title));
        newBook.append(createRow('Author', book.author));
        newBook.append(createRow('Genre', book.genre));
        newBook.append(createRow('Pages', book.pages));
        newBook.append(createRow('Status', book.read ? 'Read' : 'Unread'));
        newBook.append(buttons);
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

books.addEventListener('click', (e) => {
    const bookCard = e.target.closest('.book-card');
    const deleteBtn = e.target.closest('.book-delete');
    const readBtn = e.target.closest('.book-read');
    if (!bookCard) return;
        if (deleteBtn) {
            removeBook(bookCard.dataset.id);
        } else if (readBtn) {
            const book = myLibrary.find(val => val.id === bookCard.dataset.id);
            book.toggleRead();
            renderLibrary();
        }
})