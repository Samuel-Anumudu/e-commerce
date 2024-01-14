interface ImageUrls {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface IncludesItem {
  quantity: number;
  item: string;
}

export interface Products {
  [category: string]: {
    id: number;
    slug: string;
    name: string;
    image: ImageUrls;
    categoryImage: ImageUrls;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: IncludesItem[];
  }[];
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  image: ImageUrls;
  categoryImage: ImageUrls;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludesItem[];
}
