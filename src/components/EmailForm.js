import React from "react";
import Footer from "./Footer";

function EmailForm({ handleClose }) {
  return (
    <div className="text-[#111] my-[10vh] sm:my-auto">
        <div className="sm:flex sm:flex-col sm:space-y-5">
            <span className="text-2xl font-medium absolute right-5 top-5 sm:self-end sm:static sm:right-auto sm:top-auto cursor-pointer" onClick={handleClose}>&#10006;</span>
            <p className="text-2xl font-semibold tracking-wide text-left">Send me an email &#128522;</p>
        </div>
      <form className="flex flex-col items-center space-y-5 caret-[#111] my-5"  onSubmit={e => e.preventDefault}>
        {/* <label>Your email</label> */}
        <input type="email" name="user_email" placeholder="Type your email here..." className="form-input border border-[#111] p-3 w-full focus:rounded-none" />
        {/* <label>Your name</label> */}
        <input type="text" name="user_name" placeholder="Type your name here..." className="form-input border border-[#111] p-3 w-full focus:rounded-none" />
        {/* <label>Message</label> */}
        <textarea name="message" placeholder="Type what you want to say..." className="form-input border border-[#111] p-3 w-full focus:rounded-none" />
        <button
          type="submit"
          className="bg-[#222] text-[#fefefe] p-3 m-2 focus:shadow-none hover:bg-[#333] w-full border"
        >
          Submit
        </button>
        
        <div className="footer absolute bottom-5 sm:hidden">
          <p>© Phil Cajurao 2023</p>
        </div>
      </form>
    </div>
  );
}

export default EmailForm;
