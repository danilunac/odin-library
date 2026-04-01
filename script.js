const myLibrary = [];

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

