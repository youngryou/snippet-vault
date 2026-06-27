import { BaseService } from './base.service.js';
import { snippetRepository } from '../repositories/snippet.repository.js';
import { Snippet, SnippetData } from 'shared';
import { AppError } from '../utils/appError.js';

class SnippetService extends BaseService<Snippet, SnippetData> {
  constructor() {
    super(snippetRepository, 'Snippet');
  }

  async create(data: SnippetData): Promise<Snippet> {
    if (!data.title || !data.codeContent) {
      throw new AppError('Title and code content are required', 400);
    }
    return await super.create(data);
  }
}

export const snippetService = new SnippetService();
