export interface SnippetData {
  title: string;
  category: string;
  subCategory?: string;
  language: string;
  filePath?: string;
  fileName?: string;
  description?: string;
  codeContent: string;
  isPublic: boolean;
}

export interface Snippet extends SnippetData {
  id: number;
  userId: number;
  likesCount: number;
  createdAt: Date;
}
