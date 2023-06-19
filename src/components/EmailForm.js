import React, { useState } from "react";
import Footer from "./Footer";

function EmailForm({ handleClose }) {

    const [validated, setValidated] = useState(false);

    const [errorEmail, setErrorEmail] = useState(false);
    const [emptyEmail, setEmptyEmail] = useState(false);

    const [errorName, setErrorName] = useState(false);
    const [emptyName, setEmptyName] = useState(false);

    const [emptyMessage, setEmptyMessage] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        message: ''
    });
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        if(formData.email != '') {
            setEmptyEmail(false)
        }
        if(formData.name != '') {
            setEmptyName(false)
        }
        if(formData.message != '') {
            setEmptyMessage(false)
        }

        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const nameRegex = /^[A-Za-z]+$/;

        if(!emailRegex.test(formData.email)) {
            setErrorEmail(true)
        } else {
            setErrorEmail(false)
        }

        if(!nameRegex.test(formData.name)) {
            setErrorName(true)
        } else {
            setErrorName(false)
        }

        setFormData((prevFormData) => {
            return {
              ...prevFormData,
              [name]: value,
            };
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(formData.email == '') {
            setEmptyEmail(true)
        }
        if(formData.name == '') {
            setEmptyName(true)
        }
        if(formData.message == '') {
            setEmptyMessage(true)
        }


    }

  return (
    <div className="text-[#111] my-[15vh] sm:my-auto">
        <div>
            <div className="sm:flex sm:flex-col sm:space-y-5">
                <span className="text-2xl font-medium absolute right-5 top-10 sm:self-end sm:static sm:right-auto sm:top-auto cursor-pointer" onClick={handleClose}>&#10006;</span>
                <p className="text-2xl font-semibold tracking-wide text-left">Send me an email &#128522;</p>
            </div>
            <form className="flex flex-col items-center space-y-5 caret-[#111] my-5"  onSubmit={handleSubmit}>

                {/* <label>Your email</label> */}
                <div className="w-full">
                    <input type="email" value={formData.email} onChange={handleChange} autoComplete='off' name="email" placeholder="Type your email here..." className={`form-input border p-3 w-full focus:rounded-none 
                    ${errorEmail || emptyEmail ? 'border-red-500' : "border-[#111]"}`} 
                    />
                    <span className={`ml-2 text-red-500 ${errorEmail ? 'block' : "hidden"}`}>Sorry, it doesn't look like an email.</span>
                    <span className={`ml-2 text-red-500 ${emptyEmail ? 'block' : "hidden"}`}>Please enter an email.</span>
                </div>

                {/* <label>Your name</label> */}
                <div className="w-full">
                    <input type="text" value={formData.name} onChange={handleChange} autoComplete='off' name="name" placeholder="Type your name here..." className={`form-input border border-[#111] p-3 w-full focus:rounded-none
                    ${errorName || emptyName ? 'border-red-500' : "border-[#111]"}`} 
                    />
                    <span className={`ml-2 text-red-500 ${errorName ? 'block' : "hidden"}`}>That name is not valid.</span>
                    <span className={`ml-2 text-red-500 ${emptyName ? 'block' : "hidden"}`}>Please enter a name.</span>
                </div>

                {/* <label>Message</label> */}
                <div className="w-full">
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Type what you want to say..." className={`form-input border border-[#111] p-3 w-full focus:rounded-none
                    ${emptyMessage ? 'border-red-500' : "border-[#111]"}`} 
                    />
                    <span className={`ml-2 text-red-500 ${emptyMessage ? 'block' : "hidden"}`}>You forgot your message.</span>
                </div>
               
                <button
                type="submit"
                className="bg-[#222] text-[#fefefe] p-3 m-2 focus:shadow-none hover:bg-[#333] w-full border"
                >
                Submit
                </button>
            </form>
        </div>
      
        <div className="footer flex justify-center mt-20 sm:hidden">
            <p>© Phil Cajurao 2023</p>
        </div>
    </div>
  );
}

export default EmailForm;
