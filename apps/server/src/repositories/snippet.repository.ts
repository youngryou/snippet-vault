import { BaseRepository } from './base.repository.js';
import { db } from '../config/database.js';
import { Snippet, SnippetData } from 'shared';

class SnippetRepository extends BaseRepository<Snippet, SnippetData> {
  constructor() {
    super('snippets');
  }

  async findByCategory(category: string): Promise<Snippet[]> {
    return await db(this.tableName).where({ category });
  }
}

export const snippetRepository = new SnippetRepository();
