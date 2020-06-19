import { Category } from "./enums";
import {
  PersonBook,
  BookRequiredFields,
  UpdatedBook,
  СreateCustomerFunctionType,
} from "./types";
import { ReferenceItem, UniversityLibrarian, RefBook, Shelf } from "./classes";
import { Book, Logger, Magazine } from "./interfaces";
import {
  logFirstAvailable,
  getAllBooks,
  getBookTitlesByCategory,
  purge,
  createCustomerID,
  createCustomer,
  getBooksByCategory,
  logCategorySearch,
  getBooksByCategoryPromise,
  logSearchResults,
} from "./functions";

showHello("greeting", "TypeScript");

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

// ==================================================

// ============================================================
// Task 02.01
// logFirstAvailable(getAllBooks());
// const result = getBookTitlesByCategory(Category.JavaScript);
// logBookTitles(result);
// console.log(getBookAuthorByIndex(2));
// console.log(calcTotalPages());

// Task 03.01
// const result = getBookTitlesByCategory(Category.JavaScript);
// result.forEach((title: string) => console.log(title));
// const book = getBookByID(1);
// console.log(book);

// Task 03.02
// const myID: string = createCustomerID("Ann", 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string = (
//   name: string,
//   id: number
// ) => `${id} - ${name}`;
// idGenerator = 10;
// idGenerator = createCustomerID;
// console.log(idGenerator("Boris", 20));

// Task 03.03
// createCustomer("Anna");
// createCustomer("Boris", 20);
// createCustomer("Anton", 30, "Krakov");

// console.log(getBookTitlesByCategory());
// logFirstAvailable();

// const myBooks = сheckoutBooks("Ann", 1, 2, 4);

// Task 03.04
// const checkOutBooks = getTitles(false);
// console.log(checkOutBooks);

// Task 03.05
// const s = bookTitleTransform("Some string");
// console.log(s);
// const n = bookTitleTransform(10);
// console.log(n);

// Task 04.01
// const myBook: Book = {
//   id: 5,
//   title: "Colors, Backgrounds, and Gradients",
//   author: "Eric A. Meyer",
//   available: true,
//   category: Category.CSS,
//   // year: 2015,
//   // copies: 3,
//   pages: 200,
//   markDamaged: (reason) => console.log(`Damaged: ${reason}`),
// };

// printBook(myBook);
// myBook.markDamaged("missing back cover");

// Task 04.02
// const logDamage: Logger = (reason) => console.log(`Damaged: ${reason}`);
// logDamage("missing back cover");

// Task 04.03
// const favoriteAuthor: Author = {
//   email: "anna@example.com",
//   name: "Anna",
//   numBooksPublished: 10,
// };

// const favoriteLibrarian: Librarian = {
//   name: "Boris",
//   email: "boris@example.com",
//   department: "Security",
//   assistCustomer: null,
// };

// Task 04.04
// const offer: any = {
//   book: {
//     title: "Essential TypeScript",
//   },
//   arr: [
//     {
//       book: {
//         title: "Title",
//       },
//     },
//     {
//       book: {
//         title: "Title",
//       },
//     },
//   ],
// };

// console.log(offer?.magazine?.title);
// console.log(offer?.book?.getTitle?.());
// console.log(offer?.arr?.[4]?.book?.title);

// Task 04.05
// console.log(getBookProp(getAllBooks()[0], "title"));
// console.log(getBookProp(getAllBooks()[0], "markDamaged"));
// console.log(getBookProp(getAllBooks()[0], "isbn"));

// Task 05.01
// const ref: ReferenceItem = new ReferenceItem("Facts and Figures", 2020);
// ref.printItem();
// console.log(ref);
// ref.publisher = "Press";
// console.log(ref.publisher);

// Task 05.02
// const refBook: RefBook = new RefBook("Super Title", 2020, 20);
// refBook.printItem();
// console.log(refBook);

// Task 05.03
// const refBook: Encyclopedia = new Encyclopedia("Super Title", 2020, 20);
// refBook.printCitation();
// console.log(refBook);

// Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = "Anna";
// console.log(favoriteLibrarian);
// favoriteLibrarian.assistCustomer("Boris");

// Task 05.05
// const personBook: PersonBook = {
//   author: "Anna",
//   available: false,
//   category: Category.Angular,
//   email: "anna@example.com",
//   id: 1,
//   name: "Anna",
//   title: "Unknown",
// };
// console.log(personBook);

// Task 06.05
// const flag = true;

// if (flag) {
//   import("./classes").then((module) => {
//     const reader = new module.Reader();
//     reader.name = "Anna";
//     console.log(reader);
//   });
// }

// 07.01
// const inventory: Array<Book> = [
//   {
//     id: 10,
//     title: "The C Programming Language",
//     author: "K & R",
//     available: true,
//     category: Category.Software,
//   },
//   {
//     id: 11,
//     title: "Code Complete",
//     author: "Steve McConnell",
//     available: true,
//     category: Category.Software,
//   },
//   {
//     id: 12,
//     title: "8-Bit Graphics with Cobol",
//     author: "A. B.",
//     available: true,
//     category: Category.Software,
//   },
//   {
//     id: 13,
//     title: "Cool autoexec.bat Scripts!",
//     author: "C. D.",
//     available: true,
//     category: Category.Software,
//   },
// ];
// let result: Book[] | number[] = purge<Book>(inventory);
// console.log(result);
// result = purge([1, 2, 3, 4]);
// console.log(result);

// Task 07.02
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach((book) => bookShelf.add(book));
// console.log(bookShelf.getFirst());

// const magazines: Magazine[] = [
//   { title: "Programming Language Monthly", publisher: "Code Mags" },
//   { title: "Literary Fiction Quarterly", publisher: "College Press" },
//   { title: "Five Points", publisher: "GSU" },
// ];
// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach((mag) => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst());

// Task 07.03
// magazineShelf.printTitles();
// const mag = magazineShelf.find("Five Points");
// console.log(mag);

// Task 07.04
// const book: BookRequiredFields = {
//   id: 1,
//   author: "Anna",
//   available: false,
//   category: Category.TypeScript,
//   markDamaged: null,
//   pages: 200,
//   title: "Unknown",
// };

// const updatedBook: UpdatedBook = {
//   id: 1,
// };

// const params: Parameters<СreateCustomerFunctionType> = ["Anna"];
// createCustomer(...params);

// Task 08.01
// const librarian = new UniversityLibrarian();
// console.log(librarian);
// const obj = Object.getPrototypeOf(librarian);
// console.log(obj);
// obj.f = 100;

// Task 08.02
// const librarian = new UniversityLibrarian();
// librarian.name = "Anna";
// console.log(librarian);
// librarian["printLibrarian"]();

// Task 08.03
// const librarian = new UniversityLibrarian();
// librarian.assistFaculty = null;
// librarian.teachCommuinity = null;

// Task 08.04
// const enc = new RefBook("My Title", 2020, 3);
// enc.printItem();

// Task 08.05
// const librarian = new UniversityLibrarian();
// librarian.name = "Anna";
// librarian.assistCustomer("Boris");

// Task 08.06
// const librarian = new UniversityLibrarian();
// librarian.name = "Anna";
// librarian.assistCustomer("Boris");

// Task 08.07
// const enc = new RefBook("My Title", 2020, 3);
// enc.copies = 10;

// Task 09.01
// console.log(`Start`);
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log(`End`);

// Task 09.02
// console.log(`Start`);
// getBooksByCategoryPromise(Category.JavaScript)
//   .then((titles) => {
//     console.log(titles);
//     return Promise.resolve(titles.length);
//   })
//   .then((numOfBooks) => console.log(numOfBooks))
//   .catch((err) => console.log(err))
//   .finally(() => console.log(`Completed`));
// console.log(`End`);

// Task 09.03
console.log(`Start`);
// logSearchResults(Category.JavaScript);
logSearchResults(Category.Software).catch((err) => console.log(err));
console.log(`End`);
