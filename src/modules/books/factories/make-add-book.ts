import { inject } from '@/di-container'
import AddBook from '../use-cases/add-book'
import type BookRepository from '@/repositories/book-repository'

export default function makeAddBook (): AddBook {
  const repository = inject<BookRepository>('BookRepository')
  return new AddBook(repository)
}
