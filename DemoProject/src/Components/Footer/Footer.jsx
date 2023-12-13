export default function Footer() {
    return (
        <>

            {/* footer start */}
            <div className="pa-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="pa-foot-box">
                                <h2 className="pa-foot-title">Top Products</h2>
                                <ul>
                                    <li>
                                        <a href="javascript:;">Black Organic Tea</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">Loose Leaf Tea</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">Oolong Tea</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">Green Tea</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">Sencha Tea</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="pa-foot-box">
                                <h2 className="pa-foot-title">Legal Information</h2>
                                <ul>
                                    <li>
                                        <a href="javascript:;">About Us</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">Customer Service</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">Return Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pa-foot-box pa-foot-subscribe">
                                <img
                                    src="assets/images/logo.svg"
                                    alt="image"
                                    className="img-fluid"
                                />
                                <div className="pa-newsletter">
                                    <form>
                                        <input type="text" placeholder="Subscribe newsletter" />
                                        <button className="pa-btn">Subscribe now</button>
                                    </form>
                                </div>
                                <p>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer end */}
            {/* copyright start */}
            <div className="pa-copyright">
                <div className="container">
                    <p>
                        Copyright © 2020-2023. All right reserved.{" "}
                        <a href="index.html">Pure Ayurveda</a>
                    </p>
                </div>
            </div>


        </>
    )
}