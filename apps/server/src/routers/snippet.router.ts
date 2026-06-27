import { Router } from 'express';
import * as snippetController from '../controllers/snippet.controller.js';

const router = Router();

router
  .route('/')
  .get(snippetController.getAllSnippets)
  .post(snippetController.createSnippet);

router
  .route('/:id')
  .get(snippetController.getSnippet)
  .patch(snippetController.updateSnippet)
  .delete(snippetController.deleteSnippet);

export default router;
