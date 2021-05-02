import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../common/data/products.json";
import ProductsPagination from "../ProductsList/ProductsPagination";
import "../ProductsList/ProductsList.scss";
const DATA_LIMIT = 6;

export default function SearchProducts() {
  const { searchText } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    let products = Data.filter((product) => {
      return (
        product.category.toLowerCase().includes(searchText) ||
        product.description.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText)
      );
    });
    setSearchResults(products);
  }, [searchText]);

  return (
    <div>
      <ProductsPagination data={searchResults} dataLimit={DATA_LIMIT} />
    </div>
  );
}
