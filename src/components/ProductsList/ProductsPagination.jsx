import React, { useState } from "react";
import "./ProductsList.scss";

export default function Pagination({ data, dataLimit }) {
  const [pages] = useState(Math.ceil(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState([]);

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleClickPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleChangePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / dataLimit); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const handleAddToCart = (index) => {
    setCart(cart.concat(data[index]));
  };

  return (
    <div className="productContent">
      {getPaginatedData().map((d, idx) => (
        <div className="card" key={idx}>
          <div className="cardImage">
            <img src={d.image} alt="logo" />
          </div>
          <div className="cardHeader">
            <h3 className="title">{d.title}</h3>
            <p className="desc">{d.description}</p>
            <p className="price">{d.price}</p>
            <p className="price">{d.category}</p>
            <button
              className="addToCartBtn"
              onClick={() => handleAddToCart(idx)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}

      <div className="page">
        <button
          onClick={handleClickPrevious}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={handleChangePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={handleClickNext}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </div>
  );
}
