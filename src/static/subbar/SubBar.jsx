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
                        <li>Need help? +91-9876543210</li>
                        <li><input type="text" placeholder="Search Here" /></li>
                    </ul>
                </div>
                <div className="subBarRightTwo">
                    <ul>
                        <li><i className="las la-user"></i></li>
                        <li><i className="las la-heart"></i></li>
                        <li><i className="las la-shopping-cart"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}