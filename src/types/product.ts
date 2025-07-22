export interface Products {
  data: Product[];
  meta: Meta;
}

export interface SingleProduct {
  data: Product;
  meta: Meta;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Product {
  id: number;
  documentId: string;
  slug: string;
  Name: string;
  link: string;
  descriptions: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  Price: string;
  images: Image[];
  thumbnail: Image;
  SEO: SEO;
  category: Category;
  localizations: any[];
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface SEO {
  id: number;
  metaTitle: string;
  metaDescription: string;
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Formats {
  small: Properties;
  medium: Properties;
  thumbnail: Properties;
}

export interface Properties {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}
