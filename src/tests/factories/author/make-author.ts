import type AddAuthorInput from '@/modules/authors/entities/add-author-input'
import type Author from '@/modules/authors/entities/author'
import makeAddAuthor from '@/modules/authors/factory/make-add-author'
import { faker } from '@faker-js/faker'

export function makeAuthorInput (): AddAuthorInput {
  return {
    name: faker.person.fullName()
  } satisfies AddAuthorInput
}

export default async function makeAuthor (): Promise<Author> {
  const authorInput = makeAuthorInput()
  const addAuthor = makeAddAuthor()
  const author = await addAuthor.execute(authorInput)

  return author
}
