import React from "react";
import PropTypes from "prop-types";
import "./ProductDetail.scss";

export default function ImagesThumb({ images, tab, imageRef }) {
  return (
    <div className="thumb" ref={imageRef}>
      {images.map((image, id) => (
        <img className="thumbImage" key={id} src={image} alt="thumbimage" onClick={() => tab(id)} />
      ))}
    </div>
  );
}

ImagesThumb.propTypes = {
  images: PropTypes.array.isRequired,
  tab: PropTypes.func.isRequired,
  imageRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};
