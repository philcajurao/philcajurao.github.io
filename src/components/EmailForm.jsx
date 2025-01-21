import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "motion/react"

const EmailForm = () => {

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    const [formData, setFormData] = useState({
        from_email: { value: "", isValid: true, errorMessage: "" },
        message: { value: "", isValid: true, errorMessage: "" },
    });

    const [isLoading, setIsLoading] = useState(false);

    const [submissionState, setSubmissionState] = useState({
        state: false,
        success: false,
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: { ...prev[name], value, isValid: true, errorMessage: "" }
        }))
    }

    const sendForm = (e) => {
        e.preventDefault();

        const templateParams = {
            from_email: formData.from_email.value,
            message: formData.message.value,
        }

        let isValid = true;

        if (!formData.from_email.value) {
            setFormData(prev => ({
                ...prev,
                from_email: { ...prev.from_email, isValid: false, errorMessage: "This field shouldn't be empty." }
            }))
            isValid = false;
        } else if (!emailRegex.test(formData.from_email.value)) {
            setFormData((prev) => ({
                ...prev,
                from_email: { ...prev.from_email, isValid: false, errorMessage: "Invalid email format." }
            }))
            isValid = false;
        }

        if (!formData.message.value) {
            setFormData(prev => ({
                ...prev,
                message: { ...prev.message, isValid: false, errorMessage: "This field shouldn't be empty." }
            }))
            isValid = false;
        } else if (formData.message.value.length < 2) {
            setFormData(prev => ({
                ...prev,
                message: { ...prev.message, isValid: false, errorMessage: "Enter atleast 2 characters." }
            }))
            isValid = false;
        }

        if (!isValid) return;

        setIsLoading(true)
        emailjs.send('service_v97u8tm', 'template_xhl1mz9', templateParams).then(
            (response) => {

                if (response) {
                    setFormData({
                        from_email: { value: "", isValid: true, errorMessage: "" },
                        message: { value: "", isValid: true, errorMessage: "" },
                    })

                    setIsLoading(false)
                    setSubmissionState({ ...submissionState, state: true, success: true })

                    setTimeout(() => {
                        setSubmissionState({ ...submissionState, state: false });
                    }, 2000);
                }

            },
            // error
            () => {

                setIsLoading(false)
                setSubmissionState({ ...submissionState, state: true, success: false })

                setTimeout(() => {
                    setSubmissionState({ ...submissionState, state: false });
                }, 2000);
            },
        );
    }

    useEffect(() => {
        emailjs.init({
            publicKey: 'p3pYmTDbiXFd-HVNU',
            // Do not allow headless browsers
            blockHeadless: true,
            blockList: {
                // Block the suspended emails
                list: ['foo@emailjs.com', 'bar@emailjs.com'],
                // The variable contains the email address
                watchVariable: 'userEmail',
            },
            limitRate: {
                // Set the limit rate for the application
                id: 'app',
                // Allow 1 request per 10s
                throttle: 10000,
            },
        });
    }, []);


    return (
        <form className="rounded justify-center p-8 w-full max-w-lg">

            {
                submissionState.state ? (
                    submissionState.success ?
                        <div className="toast toast-center toast-middle">
                            <div className="alert alert-success rounded">
                                <span>Message sent successfully.</span>
                            </div>
                        </div>
                        :
                        <div className="toast toast-center toast-middle">
                            <div className="alert alert-error rounded text-base-content">
                                <span>Something went wrong. Please try again later.</span>
                            </div>
                        </div>
                ) : null
            }


            <div className="space-y-4">
                <div className="form-control">
                    <label className="label" htmlFor="from_email">Email</label>
                    <div className={`transition duration-0 tooltip tooltip-error tooltip-open ${formData.from_email.isValid ? "opacity-0" : "opacity-100"}`} data-tip={formData.from_email.errorMessage} />
                    <input type="email" name="from_email" value={formData.from_email.value} onChange={handleFormChange}
                        className={`input ${!formData.from_email.isValid ? "border-error" : "border-base-content/75"} rounded w-full max-w-lg`}
                        placeholder="Type your email here"
                    />
                </div>

                <div className="form-control">
                    <label className="label" htmlFor="message">How can I help you?</label>
                    <div className={`transition duration-0 tooltip tooltip-error tooltip-open ${formData.message.isValid ? "opacity-0" : "opacity-100"}`} data-tip={formData.message.errorMessage} />
                    <textarea name="message" value={formData.message.value} onChange={handleFormChange}
                        className={`textarea ${!formData.message.isValid ? "border-error" : "border-base-content/75"} text-base rounded w-full max-w-lg`} rows={8}
                        placeholder="Type your email here"
                    />
                </div>
            </div>

            <div className="mt-8 flex flex-col justify-center text-center sm:flex-row sm:justify-between items-center space-x-4 space-y-4">
                <div className="text-sm text-base-content/50">I typically responds within a day. ✌️</div>
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className={`bg-base-300 py-3 w-full text-center sm:w-auto sm:px-10 border transition-all duration-300 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:rounded-md hover:shadow-[4px_4px_0px_white] ${isLoading ? "btn-disabled opacity-20 bg-black" : ""}`} onClick={sendForm}>
                    {
                        isLoading ?
                            <span className="loading loading-dots loading-sm" /> :
                            "Submit"
                    }
                </motion.button>
            </div>
        </form>
    );
}

export default EmailForm;
