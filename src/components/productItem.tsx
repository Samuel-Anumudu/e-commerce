import { Product } from "@/utils/models/product.model";

export default function ProductItem({ product }: { product: Product }) {
  return <div className="border">{product.name}</div>;
}
