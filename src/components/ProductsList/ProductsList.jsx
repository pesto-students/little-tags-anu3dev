import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductsList.scss";
import ProductsData from "../common/data/products.json";
import ProductsPagination from "./ProductsPagination";
const DATA_LIMIT = 8;

export default function ProductsList() {
  const { productCategory } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    let productsData = ProductsData.filter((product) => product.category === productCategory);
    setProducts(productsData);
  }, [productCategory]);
  return (
    <div>
      {products.length > 0 ? (
        <>
          <ProductsPagination data={products} dataLimit={DATA_LIMIT} />
        </>
      ) : (
        <h1>No products to display:</h1>
      )}
    </div>
  );
}
