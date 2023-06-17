export interface M2PostType {
  id: string;
  content: string;
  createdAt: Date;
  tags: string;
  likes: number;
  comments: {
    id: string;
    author: {
      nickname: string;
      nicknameIsFake?: boolean;
      profileUrl?: string;
    };
    body: string;
  }[];
}
