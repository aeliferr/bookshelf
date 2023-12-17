import makeAddBook from '@/modules/books/factories/make-add-book'
import { it, describe, expect } from 'vitest'
import makeAddBookInput from './factories/make-add-book-input'
import makeAuthor from './factories/author/make-author'

describe('add book tests', async () => {
  it('should add a new book', async () => {
    const author = await makeAuthor()

    const addBook = makeAddBook()
    const input = makeAddBookInput(author.id)

    await addBook.execute(input)

    expect(true)
  })
})
