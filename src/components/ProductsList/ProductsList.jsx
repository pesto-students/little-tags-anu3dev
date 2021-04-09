import React from "react";
import { useParams } from "react-router-dom";
import "./ProductsList.scss";
import ProductsData from "../common/data/products.json";

export default function ProductsList() {
    let { productCategory } = useParams();
    productCategory = "jewelery";
  
    const products = ProductsData.filter(
      (product) => (product.category = productCategory)
    );
  
    const content = products.map(
      ({ id, title, price, description, category, image }) => (
        <li key={id}>
          <h3>{title}</h3>
          <p>{price}</p>
          <p>{description}</p>
          <p>{category}</p>
          <p>{image}</p>
        </li>
      )
    );
    return (
      <div className="productContainer">
        <ul>{content}</ul>
      </div>
    );
  }