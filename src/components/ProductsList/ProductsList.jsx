import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductsList.scss";
import ProductsData from "../common/data/products.json";
import Pagination from "./ProductsPagination";
const DATA_LIMIT = 6;

export default function ProductsList() {
  let { productCategory } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsData = ProductsData.filter(
      (product) => (product.category = productCategory)
    );
    setProducts(productsData);
  }, [productCategory]);

  return (
    <div>
      {products.length > 0 ? (
        <>
          <Pagination data={products} dataLimit={DATA_LIMIT} />
        </>
      ) : (
        <h1>No products to display</h1>
      )}
    </div>
  );
}
