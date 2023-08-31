"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Products } from "@/utils/models/product.model";
import ProductItem from "@/components/productItem";
import PRODUCTS from "../../../../../products";
import {
  getCategoriesAndDocuments,
  addCollectionAndDocuments,
} from "@/utils/firebase/firebase.config";

export default function Page({ params }: { params: { slug: string } }) {
  const [categoriesMap, setcategoriesMap] = useState<Products>({});

  /* TODO: Call AddCollectionAndDocuments before getting Categories Map` hook */
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", PRODUCTS);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setcategoriesMap(categoriesMap);
    };

    getCategoriesMap();
  }, []);

  return (
    <section>
      <Link href="/" className="text-orange font-bold underline italic">
        Back
      </Link>
      <h1> {params.slug}</h1>
      <div>
        {!categoriesMap || !Object.keys(categoriesMap).length ? (
          <p>Loading...</p>
        ) : (
          Object.keys(categoriesMap).map((category) =>
            categoriesMap[category].map(
              (product) =>
                category === params.slug && (
                  <ProductItem key={product.id} product={product} />
                )
            )
          )
        )}
      </div>
    </section>
  );
}
