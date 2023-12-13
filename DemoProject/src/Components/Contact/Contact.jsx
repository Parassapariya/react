export default function Contact() {
    return (
        <>

            <div className="pa-breadcrumb">
                <div className="container-fluid">
                    <div className="pa-breadcrumb-box">
                        <h1>contact us</h1>
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>contact us</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* breadcrumb end */}
            {/* contact start */}
            <div className="pa-contact spacer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="pa-contact-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12301.513435483917!2d-96.04069515802735!3d39.57362236131941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87be3e79433f6007%3A0x86baec447b34422!2sAmerica%20City%2C%20KS%2066540%2C%20USA!5e0!3m2!1sen!2sin!4v1588407931927!5m2!1sen!2sin"
                                    aria-hidden="false"
                                    tabIndex={0}
                                />
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="pa-contact-form">
                                <form>
                                    <input
                                        type="text"
                                        placeholder="Enater your name"
                                        name="full_name"
                                        id="full_name"
                                        className="require"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                        name="email"
                                        id="email"
                                        className="require"
                                        data-valid="email"
                                        data-error="Email should be valid."
                                    />
                                    <input
                                        type="text"
                                        placeholder="Enter your subject"
                                        name="subject"
                                        id="subject"
                                        className="require"
                                    />
                                    <textarea
                                        placeholder="Message here"
                                        name="message"
                                        id="message"
                                        className="require"
                                        defaultValue={""}
                                    />
                                    <button type="button" className="pa-btn submitForm">
                                        submit
                                    </button>
                                    <div className="response" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact end */}
            {/* contact detail start */}
            <div className="pa-contact-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="pa-contact-box">
                                <h4>Address</h4>
                                <p>25 LNB Devonshire Street London W1G 7AE</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="pa-contact-box">
                                <h4>Contant no.</h4>
                                <p>+001 4567891236</p>
                                <p>+001 7894561230</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="pa-contact-box">
                                <h4>Email</h4>
                                <p>support@pureaurveda.com</p>
                                <p>support.pureaurveda@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact detail end */}


        </>
    )
}
