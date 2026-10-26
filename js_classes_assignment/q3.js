
class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = false;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(this.title + " issued successfully");
        } else {
            console.log("Book already issued");
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(this.title + " returned successfully");
    }
}

const books = [
    new Book("Java", "James", "101"),
    new Book("Python", "John", "102"),
    new Book("HTML", "David", "103")
];

const isbn = "102";
const book = books.find(b => b.ISBN === isbn);

if (book) {
    book.issueBook();
} else {
    console.log("Book not found");
}

console.log("Available Books:");

books.filter(b => !b.isIssued)
    .forEach(b => console.log(b.title));
