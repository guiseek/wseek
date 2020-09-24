export class Article {
  id: string;
  title: string;
  resume: string;
  headline: string;
  tags: string[] = [];
  content: any[] = [];
  image: ArticleImage[] = [];
  featuredImageId: string;
  datePublished: Date;
  dateModified: Date;
  author: Author;
  publisher: Publisher;
  claps: number;
}

export interface Author {
  name: string;
}

export interface Publisher {
  name: string;
  logo: Logo;
}

export interface Logo {
  url: string;
}

export class ArticleImage {
  id: string;
  url: string;
  alt: string;
  sources?: ImageData[] = [
    { width: 100, height: 100, data: new Uint8ClampedArray([]) }
  ];
}

