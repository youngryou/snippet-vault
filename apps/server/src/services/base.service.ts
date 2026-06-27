import { BaseRepository } from '../repositories/base.repository.js';
import { AppError } from '../utils/appError.js';

export class BaseService<T, CreateDTO> {
  constructor(
    protected readonly repository: BaseRepository<T, CreateDTO>,
    protected readonly resourceName: string = 'Resource'
  ) {}

  async getAll(): Promise<T[]> {
    return await this.repository.findAll();
  }

  async getById(id: number): Promise<T> {
    const item = await this.repository.findById(id);
    if (!item) {
      throw new AppError(`${this.resourceName} not found`, 404);
    }
    return item;
  }

  async create(data: CreateDTO): Promise<T> {
    return await this.repository.create(data);
  }

  async update(id: number, data: Partial<CreateDTO>): Promise<T> {
    const updatedItem = await this.repository.updateById(id, data);
    if (!updatedItem) {
      throw new AppError(`${this.resourceName} not found`, 404);
    }
    return updatedItem;
  }

  async delete(id: number): Promise<void> {
    const deleted = await this.repository.deleteById(id);
    if (!deleted) {
      throw new AppError(
        `${this.resourceName} not found or already deleted`,
        404
      );
    }
  }
}
