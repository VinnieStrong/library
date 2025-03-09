function Book(title, author, pages, readingStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readingStatus = readingStatus,
    this.info = function(book) {
        return `The ${title} by ${author}, ${pages} pages, ${readingStatus}`;
    }
}