import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function EmailContact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.name);

    // emailjs
    //   .sendForm(
    //     "service_v97u8tm",
    //     "template_xhl1mz9",
    //     form.current,
    //     "p3pYmTDbiXFd-HVNU"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div className="flex justify-center bg-[#111] p-3 ">
      <button className="emailBtn">
        Email me
      </button>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col items-center hidden"
      >
        <label>Your email</label>
        <input type="email" name="user_email" className="form-input border" />
        <label>Your name</label>
        <input type="text" name="user_name" className="form-input border" />
        <label>Message</label>
        <textarea name="message" className="form-input border" />
        <button
          type="submit"
          className="bg-[#333] text-[#fefefe] p-2 rounded-lg m-2 shadow-2xl focus:shadow-none "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EmailContact;
