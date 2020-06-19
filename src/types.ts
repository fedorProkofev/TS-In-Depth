import { Book, Person, Author } from "./interfaces";

// type Book = {
//   id: number;
//   title: string;
//   author: string;
//   available: boolean;
//   category: Category;
// };

export type Books = ReadonlyArray<Book>;
export type BookProperties = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, "email">;
export type СreateCustomerFunctionType = (
  name: string,
  age?: number,
  city?: string
) => void;
