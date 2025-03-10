function Book(title, author, pages, readingStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readingStatus = readingStatus;
}


const myLibrary = [];


function createBook(title, author, pages, readingStatus) {
    const book = new Book(title, author, pages, readingStatus);
    crypto.randomUUID(book);
    myLibrary.push(book);
}
function getBookInfos(book) {
    return book.title;
}

createBook('Thinking fast and Slow', 'David Kellermen', '350', 'read');
createBook('How to win friends and influence', 'Dave Carniage', '150', 'read');
createBook('Otello', 'Shekspier', '399', 'not read');
createBook('Mamma mia', 'Antonello cia cia', '99', 'not read');

//DOM manipulation

const hanger = document.getElementById("hanger");

//Show entire books array
for (let i=0; i<myLibrary.length; i++) {
    const para = document.createElement("p");
hanger.appendChild(para);
para.textContent = `${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages} pages, ${myLibrary[i].readingStatus}`;
}

const dialog = document.querySelector("dialog");
const addBookButton = document.getElementById("addBook");
const resetButton = document.getElementById("resetButton");

addBookButton.addEventListener("click", () => {
    dialog.showModal();
});
resetButton.addEventListener("click", ()=> {
    dialog.close();
})
