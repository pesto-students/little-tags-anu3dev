import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductsList.scss";

export default function ProductsPagination({ data, dataLimit }) {
  const [pages] = useState(Math.ceil(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

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

  return (
    <div className="productContent row">
      {getPaginatedData().map((d, idx) => (
        <div className="card col-md-4" key={idx}>
          <div className="cardImage">
            <img src={d.image} alt="product" />
          </div>
          <div className="cardHeader">
            <h3 className="title">{d.title}</h3>
            <p className="desc">{d.description}</p>
            <p className="price">₹ {d.price}</p>
            <p className="price">{d.category}</p>
            <Link to={"/products/" + d.category + "/" + d.id} className="viewBtn">
              View
            </Link>
          </div>
        </div>
      ))}

      <div className="page">
        <button
          onClick={handleClickPrevious}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          Prev
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={handleChangePage}
            className={`paginationItem ${currentPage === item ? "active" : null}`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={handleClickNext}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
