import EmailForm from "../components/EmailForm";

const Contacts = () => {
    return (
        <div className="h-full px-4 py-16">
            <div className="flex flex-col justify-center items-center">
                <div className="text-center text-xl">
                    <div>
                        <p>Call me directly</p>
                        <p className="flex items-center justify-center text-2xl mt-2">
                            <span className="mr-2">
                                <svg
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em"
                                >
                                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448 18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                </svg>
                            </span>
                            <span className="">
                                (+63) 961 625 9849
                            </span>
                        </p>
                    </div>
                    <div className="divider my-8">OR</div>
                </div>
                <div className="sm:p-4 border w-full max-w-lg">
                    <div className=" flex flex-col justify-center items-center">
                        <EmailForm />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contacts;
