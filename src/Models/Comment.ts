export type CommentPost = {
  title: string;
  content: string;
};

export type CommentGet = {
  id: number;            // Unique identifier for the comment
  title: string;         // Title of the comment
  content: string;       // Content of the comment
  createOn: string;      // Date and time the comment was created (ISO 8601 format)
  appUser: string;       // User who created the comment
  stockId: number;       // Associated stock identifier
};
