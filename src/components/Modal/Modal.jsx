import React from "react";
import "./Modal.scss";

export default function Modal() {
  return (
    <div>
      <div className="modal" id="myModal1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">It's first time only!</h1>
              <a href="." data-dismiss="modal">
                <i className="las la-times"></i>
              </a>
            </div>
            <div className="modal-body">
              <input type="text" placeholder="Enter Full Name" />
              <input type="text" placeholder="Enter Email" />
              <br />
              <input type="text" placeholder="Enter Password" />
              <br />
              <button type="button" className="btn1 btnWidth">
                Submit
              </button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn1 btnFoot"
                data-toggle="modal"
                data-target="#myModal1"
              >
                Login
              </button>
              <button type="button" className="btn1 btnFoot" data-dismiss="modal">
                Close
              </button>
            </div>
            <div className="popUpIcon">
              <p>With social media links</p>
              <ul>
                <li>
                  <a href=".">
                    <i className="lab la-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href=".">
                    <i className="lab la-facebook"></i>
                  </a>
                </li>
                {/* <li>
                  <a href=".">
                    <i className="lab la-linkedin-in"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Welcome Back!</h1>
              <a href="." data-dismiss="modal">
                <i className="las la-times"></i>
              </a>
            </div>
            <div className="modal-body">
              <input type="text" placeholder="Enter Email" />
              <br />
              <input type="text" placeholder="Enter Password" />
              <br />
              <button type="button" className="btn1 btnWidth">
                Submit
              </button>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn1 btnFoot"
                data-toggle="modal"
                data-target="#myModal1"
              >
                SignUp
              </button>
              <button type="button" className="btn1 btnFoot" data-dismiss="modal">
                Close
              </button>
            </div>
            <div className="popUpIcon">
              <p>With social media links</p>
              <ul>
                <li>
                  <a href=".">
                    <i className="lab la-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href=".">
                    <i className="lab la-facebook"></i>
                  </a>
                </li>
                {/* <li>
                  <a href=".">
                    <i className="lab la-linkedin-in"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
