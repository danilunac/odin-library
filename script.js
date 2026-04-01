const myLibrary = [
    Book {
        id: 1,
        author: 'Gabriel García Márquez',
        title: 'Cien años de soledad',
        genre: 'Novela',
        pages: 700,
        read: true
    },
    Book {
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

// const book1 = new Book(1, "Dan", "Bookish", "Essay", 900, true);
// console.log(book1);
// const book2 = new Book(2, "Pao", "CS50", "Computer Science", 1200);
// console.log(book2);

function addBookToLibrary(author, title, genre, pages) {
    const id = crypto.randomUUID();
    const book = new Book(id, author, title, genre, pages);
    myLibrary.push(book);
}

addBookToLibrary("Stefan Zweig", "El mundo de ayer", "Biografía", 890);
addBookToLibrary("George Orwell", "1984", "Novela", 400);
console.log(myLibrary);


