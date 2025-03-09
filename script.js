function Book(title, author, pages, readingStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readingStatus = readingStatus,
    this.info = function(book) {
        return `The ${title} by ${author}, ${pages} pages, ${readingStatus}`;
    }
}

const myLibrary = [];

//function addBook(book) {
//    book.push(myLibrary);
// }

// const book = new Book();

function createBook(title, author, pages, readingStatus) {
    const book = new Book(title, author, pages, readingStatus);
    crypto.randomUUID(book);
    myLibrary.push(book);
}
