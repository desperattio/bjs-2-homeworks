// задание 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(newState) {
        this._state = newState < 0 ? 0 : newState > 100 ? 100 : newState;   
    }

    get state() {
        return this._state;
    }
};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
};

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
};

// задание 2
class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30) this.books.push(book);
    }

    findBookBy(type, value) {
        let book = this.books.find(book => book[type] === value);
        return book ? book : null;
    }

    giveBookByName(bookName) {
        let bookIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex === -1) {
            return null;
        }
        return this.books.splice(bookIndex, 1)[0];
    }
}

let library = new Library("Просто библиотека");
let book1 = new DetectiveBook("С. Тертон", "Семь смертей Эвелины Хардкасл", 2018, 443);
let book2 = new NovelBook("Д. Остин", "Нортенгерское аббатство", 1919, 156);
let book3 = new Magazine("Vogue", 2022, 103);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log(library);
console.log(library.findBookBy("releaseDate", 1919));

let myBook = library.giveBookByName("Vogue");
console.log("Книг в библиотеке: " + library.books.length);

myBook.state = 50;
myBook.fix();
myBook.fix();

library.addBook(myBook);
console.log("Книг в библиотеке: " + library.books.length);


// задание 3
class Student{
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark >= 2 && mark <= 5) {
            if (Object.keys(this.marks).indexOf(subject) === -1) {
                this.marks[subject] = [];
            }
            this.marks[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        if (Object.keys(this.marks).indexOf(subject) === -1) {
            return 0;
        } else {
            let subjMarks = this.marks[subject];
            return (subjMarks && subjMarks.length !== 0) ? (subjMarks.reduce((prevValue, currValue) => prevValue + currValue, 0) / subjMarks.length) : 0;
        }
    }

    getAverage() {
        let numberOfSubjects = Object.keys(this.marks).length;
        return numberOfSubjects === 0 ? 0 : (Object.keys(this.marks).reduce((prevValue, currValue) => prevValue + this.getAverageBySubject(currValue), 0) / numberOfSubjects);
    }
}
  