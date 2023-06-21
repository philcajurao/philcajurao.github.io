import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Success from "./Success";
import Failed from "./Failed";
import Loading from "./Loading";

function EmailForm({ handleClose }) {

    const form = useRef();

    const emailEl = document.getElementById('email');
    const nameEl = document.getElementById('name');
    const messageEl = document.getElementById('message');

    const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
    const [isSubmittedFailed, setIsSubmittedFailed] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(true);

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
    const handleChange = () => {

        if(emailEl.value != '') {
            setEmptyEmail(false)
        }
        if(nameEl.value != '') {
            setEmptyName(false)
        }
        if(messageEl.value != '') {
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
    }

    const handleSuccessSubmission = () => {
            setIsSubmittedSuccessfully(true);
        setTimeout(() => {
            setIsSubmittedSuccessfully(false);
            
            emailEl.value = '';
            nameEl.value = '';
            messageEl.value = '';
        }, 3000);
    }
    const handleFailedSubmission = () => {
        setIsSubmittedFailed(true);
    setTimeout(() => {
        setIsSubmittedFailed(false);
        
            emailEl.value = '';
            nameEl.value = '';
            messageEl.value = '';
    }, 4000);
}

    const handleSubmit = (e) => {
        e.preventDefault()

        if(emailEl.value == '') {
            setEmptyEmail(true)
        } else if(nameEl.value == '') {
            setEmptyName(true)
        } else if(messageEl.value == '') {
            setEmptyMessage(true)
        } else {
            
            // setTimeout(() => {  
                setIsSubmitted(false);
                // setTimeout(() => {  
                    emailjs 
                .sendForm(
                "service_v97u8tm",
                "template_xhl1mz9",
                form.current,
                "p3pYmTDbiXFd-HVNU"
                )
                .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    handleSuccessSubmission();
                    setIsSubmitted(true);
                },
                (error) => {
                    console.log(error.text);
                    handleFailedSubmission();
                    setIsSubmitted(true);
                }
                );
            //     }, 5000);
                
            // }, 1000);
        }

        


    }

  return (
    <div className="text-[#111] my-[15vh] sm:my-auto">
        <div>
            <div className="sm:flex sm:flex-col sm:space-y-5">
                <span className="text-2xl font-medium absolute right-5 top-10 sm:self-end sm:static sm:right-auto sm:top-auto cursor-pointer" onClick={handleClose}>&#10006;</span>
                <p className="text-2xl font-semibold tracking-wide text-left">Send me an email &#128522;</p>
            </div>
            <form className="flex flex-col items-center caret-[#111] mt-5 mb-2" ref={form} onSubmit={handleSubmit}>
                    <input type="email" id="email" autoComplete='off' name="from_email" placeholder="Type your email here..." onChange={handleChange} className={`form-input border p-3 w-full focus:rounded-none
                        ${emptyEmail ? 'border-red-500' : "border-[#111]"}
                    `} />
                    {/* <span className={`ml-2 text-red-500 ${errorEmail ? 'block' : "hidden"}`}>Doesn't look like an email.</span> */}
                    <span className={`ml-2 mt-0 self-start text-red-500 ${emptyEmail ? 'block' : "hidden"}`}>Please enter an email.</span>

                    <input type="text" id="name" autoComplete='off' name="from_name" placeholder="Type your name here..." onChange={handleChange} className={`form-input border border-[#111] p-3 mt-5 w-full focus:rounded-none
                        ${emptyName ? 'border-red-500' : "border-[#111]"}
                    `} />
                    {/* <span className={`ml-2 text-red-500 ${errorName ? 'block' : "hidden"}`}>That name is not valid.</span> */}
                    <span className={`ml-2 mt-0 self-start text-red-500 ${emptyName ? 'block' : "hidden"}`}>Please enter a name.</span>

                    <textarea name="message" id="message" placeholder="Type what you want to say..." onChange={handleChange} className={`form-input border border-[#111] p-3 mt-5 w-full focus:rounded-none
                        ${emptyMessage ? 'border-red-500' : "border-[#111]"}
                    `} />
                    <span className={`ml-2 mt-0 self-start text-red-500 ${emptyMessage ? 'block' : "hidden"}`}>You forgot your message.</span>
               
                <input
                type="submit"
                className={`bg-[#222] text-[#fefefe] p-3 m-2 focus:shadow-none hover:bg-[#333] w-full border 
                    ${isSubmitted ? 'cursor-pointer' : "cursor-wait"}
                `}
                value="Submit"
                />
            </form>
        </div>

        <div className="mt-[-10px]">
            <div className={`${isSubmitted ? 'hidden' : 'block'}`}>
                <Loading />  
            </div>
            <div className={`${isSubmittedSuccessfully ? 'block' : 'hidden'}`}>
                <Success />  
            </div>
            <div className={`${isSubmittedFailed ? 'block' : 'hidden'}`}>
                <Failed />  
            </div>
        </div>
        
      
        <div className="text-center text-[#111] flex flex-col sm:hidden absolute w-full left-0 bottom-5">
          <span>© 2023</span>
          <span>Cris Philip "Phil" Cajurao</span>
        </div>
    </div>
  );
}

export default EmailForm;
