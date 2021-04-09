import React from "react";
import "./SubBar.scss";

export default function SubBar(){

    return(
        <div className="subBar">
            <div className="subBarLeft">
                <div className="logo">
                    <p>Instant order</p>
                </div>
            </div>
            <div className="subBarRight">
                <div className="subBarRightOne">
                    <ul>
                        <li><a href="tel:+91-9876543210"><i className="las la-phone-volume"></i> +91-9876543210</a></li>
                        <li><input type="text" placeholder="Search Here" /></li>
                    </ul>
                </div>
                <div className="subBarRightTwo">
                    <ul>
                        <li><a href="."><i className="las la-user"></i></a></li>
                        <li><a href="."><i className="las la-heart"></i></a></li>
                        <li><a href="."><i className="las la-shopping-cart"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}