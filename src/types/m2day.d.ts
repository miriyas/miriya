export interface M2PostType {
  id: string;
  content: string;
  createdAt: Date;
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

export interface NewM2PostType {
  content: string;
}
