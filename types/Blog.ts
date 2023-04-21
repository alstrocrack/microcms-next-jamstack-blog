export interface Blog {
  id: number;
  title: string;
  updatedAt: string;
  category: {
    name: string;
  };
  image: {
    url: string;
  };
  content: string;
}

export interface FetchedContents {
  contents: Blog[];
}
