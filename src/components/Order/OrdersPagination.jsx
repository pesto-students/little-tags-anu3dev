import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Order.scss";
import "../ProductsList/ProductsList.scss";

export default function OrdersPagination({ data, dataLimit }) {
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
    <div className="orderContent">
      {getPaginatedData().map((d, idx) => (
        <div className="row orderItem" key={idx}>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
            <img src={d.image} alt="product" />
          </div>
          <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12">
            <h6 style={{ fontWeight: "bold" }}>{d.title}</h6>
            <h6>{d.description}</h6>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-12">
            <p>₹ {d.price}</p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <h6>
              <span style={{ fontWeight: "bold" }}>Ordered on: </span>
              {d.orderDate}{" "}
            </h6>
            <Link to={`/products/${d.category}/${d.id}`}>View Ordered Product</Link>
          </div>
        </div>
      ))}
      {data.length > 0 ? (
        <div className="orderPageNum">
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

OrdersPagination.propTypes = {
  data: PropTypes.array.isRequired,
  dataLimit: PropTypes.number.isRequired,
};
