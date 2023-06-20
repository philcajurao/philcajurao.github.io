import React, { useState } from "react";
import EmailForm from "./EmailForm";
import Modal from "./Modal";

function EmailContact() {

  const [open, setOpen] = useState(false);
  

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-center bg-[#111] p-3 ">
      <button className="emailBtn" onClick={() => setOpen(true)}>
        Email me
      </button>

      <Modal open={open} handleClose={handleClose}>
        <EmailForm handleClose={handleClose}/>
      </Modal>
    </div>
  );
}

export default EmailContact;
