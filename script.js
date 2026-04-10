let myLibrary = [];

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

function deleteBookToLibrary(id) {
    myLibrary = myLibrary.filter(book => book.id !== id)
    renderLibrary();
}

addBookToLibrary("Darkest Hour", "Anthony McCarten", "History", 108);

const books = document.querySelector('.books-grid');

function renderLibrary() {
    books.textContent = '';
    for (let book of myLibrary) {
        const newBook = document.createElement('div');
        newBook.classList.add('book-card');
        newBook.dataset.id = book.id;
        const titleContainer = document.createElement('div');
        titleContainer.classList.add('book-card-row');
        const titleLabel = document.createElement('span');
        const title = document.createElement('p');
        const authorContainer = document.createElement('div');
        authorContainer.classList.add('book-card-row');
        const authorLabel = document.createElement('span');
        const author = document.createElement('p');
        const genreContainer = document.createElement('div');
        genreContainer.classList.add('book-card-row');
        const genreLabel = document.createElement('span');
        const genre = document.createElement('p');
        const pagesContainer = document.createElement('div');
        pagesContainer.classList.add('book-card-row');
        const pagesLabel = document.createElement('span');
        const pages = document.createElement('p');
        const readContainer = document.createElement('div');
        readContainer.classList.add('book-card-row');
        const readLabel = document.createElement('span');
        const read = document.createElement('p');
        const buttons = document.createElement('div');
        buttons.classList.add('book-buttons')
        const readBtn = document.createElement('button');
        readBtn.classList.add('book-read');
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('book-delete');
        titleLabel.textContent = 'Title';
        title.textContent = book.title;
        authorLabel.textContent = 'Author';
        author.textContent = book.author;
        genreLabel.textContent = 'Genre';
        genre.textContent = book.genre;
        pagesLabel.textContent = 'Pages';
        pages.textContent = book.pages;
        readLabel.textContent = 'Status'
        read.textContent = book.read ? 'Read' : 'Unread';
        // read.textContent = book.read;
        readBtn.textContent = 'Mark as read'
        deleteBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>'
        titleContainer.append(titleLabel);
        titleContainer.append(title);
        authorContainer.append(authorLabel);
        authorContainer.append(author);
        genreContainer.append(genreLabel);
        genreContainer.append(genre);
        pagesContainer.append(pagesLabel);
        pagesContainer.append(pages);
        readContainer.append(readLabel);
        readContainer.append(read);
        buttons.append(readBtn);
        buttons.append(deleteBtn);
        // newBook.append(title);
        newBook.append(titleContainer);
        newBook.append(authorContainer);
        newBook.append(genreContainer);
        newBook.append(pagesContainer);
        newBook.append(readContainer);
        // newBook.append(author);
        // newBook.append(genre);
        // newBook.append(pages);
        // newBook.append(read);
        newBook.append(buttons);
        books.append(newBook);
        console.log(book);
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
    const deleteBook = e.target.closest('.book-delete');
    const bookCard = e.target.closest('.book-card');
    if (!deleteBook || !bookCard) return;
    deleteBookToLibrary(bookCard.dataset.id);
})