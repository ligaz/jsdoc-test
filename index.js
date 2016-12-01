/**
 * This is a global variable description.
 * @type {number}
 */
var globalVar = 3;

/**
 * @description This a virtual global variable.
 * @name virtualGlobalVar
 * @global
 * @type {string}
 */

/**
 * This is a real global const.
 * @default
 * @const
 */
var GLOBAL_CONST = 42;

/**
 * This is a global function.
 * With description on two lines.
 * @param {number} foo - Function's first parameter called 'foo'.
 * @param bar Second parameter. Note that the the dash before the description is optional. Type is optional as well.
 * @returns {boolean} Description of the return value.
 */
var globalFunc = function (foo, bar) {
  return true;
}

/**
 * This is an example namespace description.
 * @namespace
 */
var MyNamespace = {
  /**
   * This is an example namespace member.
   */
  foo: 'foo',
};

/**
 * This class represents a book.
 * @example
 * var myBook = new Book('Alice's Adventures in Wonderland', 'Lewis Carroll', 1865);
 * @example
 * var myBook = new Book('Book with unknown author and year');
 */
class Book {
    /**
     * Constructor that creates a book with the specified title, author and year.
     * @param {string} title - The book's title.
     * @param {string} [author=unknown] - The author of the book.
     * @param {number} [year] - The year the book was published.
     */
    constructor(title, author, year) {
        this._title = title;
        this._author = author || 'unknown';
        this._year = year;
    }

    /**
     * Generates a summary description for the book.
     * @return {string} The book's summary. 
     */
    summary() {
        return `${this._title} ${this._author} ${this._year || 'not specified'}`;
    };

    /**
     * Checks if a book is from the 20th century.
     * @param {Book} book - The book to check.
     * @return {boolean} True if the book is from the 20th century; otherwise false.
     * @throws {InvalidArgumentError} Throws if the Book or year is not defined.
     */
    static isFrom20thCentury(book) {
        if (!!book || !book._year) {
            throw new InvalidArgumentError('Book or year not defined');
        }
        return 1901 <= book._year && book._year < 2000;
    }

    /**
     * The book's title.
     * @type {string}
     */
    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    /**
     * A protected method that is intended to be used only by subclasses.
     * @protected
     * @return {boolean} True if the title has a space in it; otherwise false.
     */
    hasSpaceInTitle() {
        return this._title.indexOf(' ') > 0;
    }

    /**
     * The name of the class.
     * @abstract
     * @type {string}
     * @readonly
     */
    get className() {
        return 'Book';
    }
}

/**
 * Check if a book is from the last decade. Note that this is defined outside of the class. 
 * @function
 * @name isFromLastDecade
 * @static
 * @memberOf Book
 */
var isFromLastDecade = function (book) {
  var currentDecadeStart = Math.floor(new Date().getFullYear() / 10) * 10;
  return (currentDecadeStart - 10) <= book._year && book._year < currentDecadeStart;
}

Book.isFromLastDecade = isFromLastDecade;

/**    
 * The BorrowedBook class represents a {@link Book} that is borrowed by someone.
 * @extends Book
 */
class BorrowedBook extends Book {
    /**
     * Creates a BorrowedBook instance.
     * @param {string} title - The book's title.
     * @param {string} [author=unknown] - The author of the book.
     * @param {number} [year] - The year the book was published.
     * @param {string} [borrowedBy] - The name of the person that borrowed the book. 
     */
    constructor(title, author, year, borrowedBy) {
        super(title, author, year, borrowedBy);
        this._borrowedBy = borrowedBy;
    }

    /**
     * The name of the BorrowedBook class.
     * @type {string}
     * @readonly
     */
    get className() {
        return 'BorrowedBook';
    }
}
