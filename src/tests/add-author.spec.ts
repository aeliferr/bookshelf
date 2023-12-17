import { it, describe, expect } from 'vitest'
import { makeAuthorInput } from './factories/author/make-author'
import makeAddAuthor from '@/modules/authors/factory/make-add-author'

describe('add author tests', async () => {
  it('should add a new author', async () => {
    const authorInput = makeAuthorInput()
    const addAuthor = makeAddAuthor()
    const author = await addAuthor.execute(authorInput)

    expect(author.id).toBeDefined()
  })
})
