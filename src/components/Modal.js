import React from "react";
import EmailForm from "./EmailForm";

function Modal({ open, handleClose, children }) {
  return (
    <div
      onClick={handleClose}
      className={`
    fixed inset-0 flex z-30 text-white justify-center items-center transition-colors
    ${open ? "visible" : "invisible"}
    `}
    >
      <div
        className={`p-5 bg-[#fefefe] shadow-xl w-full sm:max-w-[50vw] sm:h-auto mx-auto h-[100vh] sm:border transition-all duration-500 sm:duration-300 
        ${
          open
            ? "sm:scale-100 sm:opacity-100 translate-y-0"
            : "sm:scale-0 sm:opacity-0 translate-y-full sm:translate-y-80"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
