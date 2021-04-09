import React from 'react';
import "./ProductCat.scss";
import proA from "../../img/proA.png";
import proB from "../../img/proB.png";
import proC from "../../img/proC.png";
import proD from "../../img/proD.png";
import proE from "../../img/proE.webp";

export default function ProductCat() {
    return (
        <div className="productCat">
                <h1>Product Catogaries</h1>
            <div className="row">
            <div className="productCatTop col-lg-6 col-md-6">
                <img src={proD} alt=""/>
                <p className="onTextButton">Check the colection! <br/><br/> It's amazing.</p>
                <button className="onImageButton btn">Browse Products</button>
            </div>
            <div className="productCatTop col-lg-6 col-md-6">
                <img src={proE} alt=""/>
                <p className="onTextButton">Check the colection! <br/><br/> It's amazing.</p>
                <button className="onImageButton btn">Browse Products</button>
            </div>
            <div className="productCatBot col-lg-4 col-md-4">
                <img src={proA} alt=""/>
                <p className="onTextButtonSmall">Check the colection! <br/><br/> It's amazing.</p>
                <button className="onImageButtonSmall btn">Browse Products</button>
            </div>
            <div className="productCatBot col-lg-4 col-md-4">
                <img src={proB} alt=""/>
                <p className="onTextButtonSmall">Check the colection! <br/><br/> It's amazing.</p>
                <button className="onImageButtonSmall btn">Browse Products</button>
            </div>
            <div className="productCatBot col-lg-4 col-md-4">
                <img src={proC} alt=""/>
                <p className="onTextButtonSmall">Check the colection! <br/><br/> It's amazing.</p>
                <button className="onImageButtonSmall btn">Browse Products</button>
            </div>
            </div>
        </div>
    )
}
