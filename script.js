const myLibrary = [];

function Book(title, author, pages, readingStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readingStatus = readingStatus;
}
Book.prototype.changeReadingStatus = function() {
    if (this.readingStatus === "read") return this.readingStatus = "not read";
    else return this.readingStatus = "read";

} 

function getBookInfos(book) {
    return `${book.title} by ${book.author}, ${book.pages} pages, ${book.readingStatus}.`;
}

function createBook(title, author, pages, readingStatus) {
    const book = new Book(title, author, pages, readingStatus);
    crypto.randomUUID(book);
    myLibrary.push(book);
}


createBook('Thinking fast and Slow', 'David Kellermen', '350', 'read');
createBook('How to win friends and influence', 'Dave Carniage', '150', 'read');
createBook('Otello', 'Shekspier', '399', 'not read');
createBook('Mamma mia', 'Antonello cia cia', '99', 'not read');

function createButton(name) {
    const button = document.createElement("button");
    button.textContent = name;
    return button;
}

//DOM manipulation

const hanger = document.getElementById("hanger");



function showBooks() {
    hanger.innerHTML = "";
    //Show entire books array
     for (let i=0; i<myLibrary.length; i++) {
         const para = document.createElement("p");
         const textNode = document.createTextNode(`${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages} pages, ${myLibrary[i].readingStatus}s  `);
         const removeButton = createButton('remove book');
         const changeReadStatus = createButton('change read-status');
 
         hanger.appendChild(para);
         para.appendChild(textNode);
         para.appendChild(removeButton);
         para.appendChild(changeReadStatus);
 
         removeButton.addEventListener("click", () => {
             myLibrary.splice(i, 1);
             showBooks();
        });
        changeReadStatus.addEventListener("click", () => {
            myLibrary[i].changeReadingStatus();
            showBooks();

        });

    }
}
showBooks();




const dialog = document.querySelector("dialog");
const addBookButton = document.getElementById("addBook");
const resetButton = document.getElementById("resetButton");

addBookButton.addEventListener("click", () => {
    dialog.showModal();
});
resetButton.addEventListener("click", () => {
    dialog.close();
});

const form = document.getElementById('book_form');



form.addEventListener('submit', function(event) {

    event.preventDefault();

    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let readingStatus = document.querySelector('input[name="reading_status"]:checked').value;
    

    createBook(title.value, author.value, pages.value, readingStatus);
    dialog.close();
    title.value = '';
    author.value = '';
    pages.value = '';
    readingStatus.value = '';

    showBooks();


});