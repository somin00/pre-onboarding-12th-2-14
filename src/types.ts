export interface IssueType {
  id: number;
  number: number;
  title: string;
  created_at: string;
  comments: number;
  body: string;
  user: {
    [key: string]: string;
  };
}
