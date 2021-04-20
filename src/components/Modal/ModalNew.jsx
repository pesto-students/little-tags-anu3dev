import React, { useState, useEffect } from "react";
import Modal from "./ReuseModal";

function ModalNew() {
  const [show, setShow] = useState(false);
  const callModal = () => {
    const userVisitStatus = localStorage.getItem("userVisitStatus");
    if (!userVisitStatus) {
      localStorage.setItem("userVisitStatus", true);
      setShow(true);
    }
  };
  const closeModalHandler = () => setShow(false);
  useEffect(() => {
    callModal();
  }, []);
  return (
    <div>
      {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
      <Modal show={show} close={closeModalHandler} />
    </div>
  );
}

export default ModalNew;
