import { Book } from "./BookType"

export type Challenge = {
    id: number,
    name: string,
    points: number,
    books: ChallengeBook[],
    booksCount: number,
    completedBooksCount: number,
    isCompleted: boolean,
}

export type ChallengeBook = {
    id: number,
    title: string,
    author: string,
    url: string,
    isCompleted: boolean
}