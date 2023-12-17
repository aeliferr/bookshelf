import { type AddBookInput } from '@/modules/books/use-cases/add-book'
import { faker } from '@faker-js/faker'

export default function makeAddBookInput (authorId: string): AddBookInput {
  return {
    authorId,
    name: faker.word.words({ count: 3 }),
    releaseDate: faker.date.past()
  }
}
