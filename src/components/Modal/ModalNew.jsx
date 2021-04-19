import React, { useState } from "react";
import { Modal } from "./ReuseModal";

function ModalNew() {
  const [show, setShow] = useState(true);
  // console.log(show);
  const callModal = () => {
    const userVisitStatus = localStorage.getItem("userVisitStatus");
    return userVisitStatus ? "" : localStorage.setItem("userVisitStatus", true) || Xyz();
  };
  const Xyz = () => setShow(true);
  // console.log(show);
  const closeModalHandler = () => setShow(false);

  return (
    <div onLoad={callModal()}>
      {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
      {/* <button onClick={() => setShow(true)} className="btn">
        Open Modal
      </button> */}
      <Modal show={show} close={closeModalHandler} />
    </div>
  );
}

export default ModalNew;
