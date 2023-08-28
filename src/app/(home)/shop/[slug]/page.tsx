"use client";
import { useState, useEffect } from "react";
import { Product } from "@/utils/models/product.model";
import { getCategoriesAndDocuments } from "@/utils/firebase/firebase.config";

import ProductItem from "@/components/productItem";
import PRODUCTS from "../../../../../products";
import Link from "next/link";
export default function Page({ params }: { params: { slug: string } }) {
  const [products, setProducts] = useState<Product[]>([]);

  const getCategories = async () => {
    const categories = await getCategoriesAndDocuments();
    console.log(categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section>
      <Link href="/" className="text-orange font-bold underline italic">
        Back
      </Link>
      <h1> {params.slug}</h1>
      <div>
        {products.map(
          (product) =>
            product.category === params.slug && (
              <ProductItem key={product.id} product={product} />
            )
        )}
      </div>
    </section>
  );
}
