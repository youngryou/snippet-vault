import { db } from '../config/database.js';

export class BaseRepository<T, CreateDTO> {
  constructor(protected readonly tableName: string) {}

  async findAll(): Promise<T[]> {
    return await db(this.tableName).select('*').orderBy('createdAt', 'desc');
  }

  async findById(id: number): Promise<T | undefined> {
    return await db(this.tableName).where({ id }).first();
  }

  async create(data: CreateDTO): Promise<T> {
    const [result] = await db(this.tableName).insert(data).returning('*');
    return result;
  }

  async updateById(
    id: number,
    data: Partial<CreateDTO>
  ): Promise<T | undefined> {
    const [result] = await db(this.tableName)
      .where({ id })
      .update(data)
      .returning('*');
    return result;
  }

  async deleteById(id: number): Promise<boolean> {
    const deletedRows = await db(this.tableName).where({ id }).del();
    return deletedRows > 0;
  }
}
