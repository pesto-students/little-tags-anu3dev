import React from "react";
import { useParams } from "react-router-dom";
import "./ProductsList.scss";
import ProductsData from "../common/data/products.json";
import Pagination from "./ProductsPagination";
const PAGE_LIMIT = 5;
const DATA_LIMIT = 4;

export default function ProductsList() {
  let { productCategory } = useParams();
  productCategory = "jewelery";

  const products = ProductsData.filter(
    (product) => (product.category = productCategory)
  );

  console.log("products.length: ", products.length);

  return (
    <div className="productContainer">
      {products.length > 0 ? (
        <>
          <Pagination
            data={products}
            pageLimit={PAGE_LIMIT}
            dataLimit={DATA_LIMIT}
          />
        </>
      ) : (
        <h1>No products to display</h1>
      )}
    </div>
  );
}
