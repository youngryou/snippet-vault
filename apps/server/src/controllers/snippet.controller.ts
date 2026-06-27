import { Request, Response, NextFunction } from 'express';
import { snippetService } from '../services/snippet.service.js';
import { AppError } from '../utils/appError.js';

export const getAllSnippets = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const snippets = await snippetService.getAll();
    res.status(200).json({ status: 'success', data: snippets });
  } catch (error) {
    next(error);
  }
};

export const getSnippet = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) {
      return next(new AppError('Invalid snippet ID', 400));
    }

    const snippet = await snippetService.getById(id);
    res.status(200).json({ status: 'success', data: snippet });
  } catch (error) {
    next(error);
  }
};

export const createSnippet = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newSnippet = await snippetService.create(req.body);
    res.status(201).json({ status: 'success', data: newSnippet });
  } catch (error) {
    next(error);
  }
};

export const updateSnippet = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) {
      return next(new AppError('Invalid snippet ID', 400));
    }

    const updatedSnippet = await snippetService.update(id, req.body);
    res.status(200).json({ status: 'success', data: updatedSnippet });
  } catch (error) {
    next(error);
  }
};

export const deleteSnippet = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) {
      return next(new AppError('Invalid snippet ID', 400));
    }

    await snippetService.delete(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
