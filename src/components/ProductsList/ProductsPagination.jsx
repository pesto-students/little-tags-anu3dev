import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
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
    <div className="productContent">
      <div className="row" style={{ width: "100%" }}>
        {getPaginatedData().map((d, idx) => (
          <div className="card col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12" key={idx}>
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
      </div>
      {data.length > 0 ? (
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
      ) : (
        <h2>No Results!</h2>
      )}
    </div>
  );
}

ProductsPagination.propTypes = {
  data: PropTypes.array.isRequired,
  dataLimit: PropTypes.number.isRequired,
};
