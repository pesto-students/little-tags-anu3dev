import React, { useState, useEffect } from "react";
import Modal from "./ReuseModal";

function ModalNew() {
  const [show, setShow] = useState(false);
  // const userPre = localStorage.getItem("authUser");

  const callModal = () => {
    const userVisitStatus = localStorage.getItem("userVisitStatus");
    if (!userVisitStatus) {
      localStorage.setItem("userVisitStatus", true);
      setShow(true);
    }
  };

  useEffect(() => {
    callModal();
  }, []);

  const closeModalHandler = () => setShow(false);

  return (
    <div>
      {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
      <Modal show={show} close={closeModalHandler} />
    </div>
  );
}

export default ModalNew;
