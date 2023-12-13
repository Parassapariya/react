export default function Shop() {
    return (
        <>

            <div className="pa-breadcrumb">
                <div className="container-fluid">
                    <div className="pa-breadcrumb-box">
                        <h1>Shop</h1>
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>Shop</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* breadcrumb end */}
            {/* product start */}
            <div className="pa-product-shop spacer-top spacer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 order-lg-last">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="pa-product-box">
                                        <div className="pa-product-img">
                                            <img
                                                src="assets/images/product3.png"
                                                alt="image"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="pa-product-content">
                                            <h4>
                                                <a href="product-single.html">Oolong Tea</a>
                                            </h4>
                                            <p className="pa-product-rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="far fa-star" />
                                                <i className="far fa-star" />
                                            </p>
                                            <p>
                                                <del>$ 130</del>$ 120
                                            </p>
                                        </div>
                                        <div className="pa-product-cart">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 469.333 469.333"
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M434.979,42.667H85.333c-1.053,0-2.014,0.396-3.001,0.693l-8.594-28.241C71.005,6.138,62.721,0,53.333,0H10.667
                                                      C4.776,0,0,4.776,0,10.667V32c0,5.891,4.776,10.667,10.667,10.667h26.865l66.646,219.01l-24.891,29.039
                                                      c-9.838,11.477-14.268,27.291-9.74,41.713c5.791,18.445,22.07,30.237,40.839,30.237H416c5.891,0,10.667-4.776,10.667-10.667
                                                      v-21.333c0-5.891-4.776-10.667-10.667-10.667H110.385l33.813-39.448c0.85-0.992,1.475-2.112,2.12-3.219h206.703
                                                      c16.533,0,31.578-9.548,38.618-24.507l74.434-158.17c2.135-4.552,3.26-9.604,3.26-14.615v-3.021
                                                      C469.333,58.048,453.952,42.667,434.979,42.667z"
                                                                />
                                                                <circle cx={128} cy="426.667" r="42.667" />
                                                                <circle cx={384} cy="426.667" r="42.667" />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                                                      c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                                                      c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                                                      s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                                                      C512,93.417,453.532,30,376,30z"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 461.312 461.312"
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M230.656,156.416c-40.96,0-74.24,33.28-74.24,74.24s33.28,74.24,74.24,74.24s74.24-33.28,74.24-74.24
                                                      S271.616,156.416,230.656,156.416z M225.024,208.64c-9.216,0-16.896,7.68-16.896,16.896h-24.576
                                                      c0.512-23.04,18.944-41.472,41.472-41.472V208.64z"
                                                                />
                                                            </g>
                                                            <g>
                                                                <path
                                                                    d="M455.936,215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464,184.064,5.376,215.296
                                                      c-7.168,8.704-7.168,21.504,0,30.72c25.088,31.232,114.688,133.12,225.28,133.12s200.192-101.888,225.28-133.12
                                                      C463.104,237.312,463.104,224.512,455.936,215.296z M230.656,338.176c-59.392,0-107.52-48.128-107.52-107.52
                                                      s48.128-107.52,107.52-107.52s107.52,48.128,107.52,107.52S290.048,338.176,230.656,338.176z"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="pa-product-box">
                                        <div className="pa-product-img">
                                            <img
                                                src="assets/images/product5.png"
                                                alt="image"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="pa-product-content">
                                            <h4>
                                                <a href="product-single.html">Green Tea</a>
                                            </h4>
                                            <p className="pa-product-rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="far fa-star" />
                                                <i className="far fa-star" />
                                            </p>
                                            <p>
                                                <del>$ 130</del>$ 120
                                            </p>
                                        </div>
                                        <div className="pa-product-cart">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 469.333 469.333"
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M434.979,42.667H85.333c-1.053,0-2.014,0.396-3.001,0.693l-8.594-28.241C71.005,6.138,62.721,0,53.333,0H10.667
                                                      C4.776,0,0,4.776,0,10.667V32c0,5.891,4.776,10.667,10.667,10.667h26.865l66.646,219.01l-24.891,29.039
                                                      c-9.838,11.477-14.268,27.291-9.74,41.713c5.791,18.445,22.07,30.237,40.839,30.237H416c5.891,0,10.667-4.776,10.667-10.667
                                                      v-21.333c0-5.891-4.776-10.667-10.667-10.667H110.385l33.813-39.448c0.85-0.992,1.475-2.112,2.12-3.219h206.703
                                                      c16.533,0,31.578-9.548,38.618-24.507l74.434-158.17c2.135-4.552,3.26-9.604,3.26-14.615v-3.021
                                                      C469.333,58.048,453.952,42.667,434.979,42.667z"
                                                                />
                                                                <circle cx={128} cy="426.667" r="42.667" />
                                                                <circle cx={384} cy="426.667" r="42.667" />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                                                      c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                                                      c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                                                      s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                                                      C512,93.417,453.532,30,376,30z"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 461.312 461.312"
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M230.656,156.416c-40.96,0-74.24,33.28-74.24,74.24s33.28,74.24,74.24,74.24s74.24-33.28,74.24-74.24
                                                      S271.616,156.416,230.656,156.416z M225.024,208.64c-9.216,0-16.896,7.68-16.896,16.896h-24.576
                                                      c0.512-23.04,18.944-41.472,41.472-41.472V208.64z"
                                                                />
                                                            </g>
                                                            <g>
                                                                <path
                                                                    d="M455.936,215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464,184.064,5.376,215.296
                                                      c-7.168,8.704-7.168,21.504,0,30.72c25.088,31.232,114.688,133.12,225.28,133.12s200.192-101.888,225.28-133.12
                                                      C463.104,237.312,463.104,224.512,455.936,215.296z M230.656,338.176c-59.392,0-107.52-48.128-107.52-107.52
                                                      s48.128-107.52,107.52-107.52s107.52,48.128,107.52,107.52S290.048,338.176,230.656,338.176z"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="pa-product-box">
                                        <div className="pa-product-img">
                                            <img
                                                src="assets/images/product6.png"
                                                alt="image"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="pa-product-content">
                                            <h4>
                                                <a href="product-single.html">Sencha Tea</a>
                                            </h4>
                                            <p className="pa-product-rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="far fa-star" />
                                                <i className="far fa-star" />
                                            </p>
                                            <p>
                                                <del>$ 130</del>$ 120
                                            </p>
                                        </div>
                                        <div className="pa-product-cart">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 469.333 469.333"
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M434.979,42.667H85.333c-1.053,0-2.014,0.396-3.001,0.693l-8.594-28.241C71.005,6.138,62.721,0,53.333,0H10.667
                                                      C4.776,0,0,4.776,0,10.667V32c0,5.891,4.776,10.667,10.667,10.667h26.865l66.646,219.01l-24.891,29.039
                                                      c-9.838,11.477-14.268,27.291-9.74,41.713c5.791,18.445,22.07,30.237,40.839,30.237H416c5.891,0,10.667-4.776,10.667-10.667
                                                      v-21.333c0-5.891-4.776-10.667-10.667-10.667H110.385l33.813-39.448c0.85-0.992,1.475-2.112,2.12-3.219h206.703
                                                      c16.533,0,31.578-9.548,38.618-24.507l74.434-158.17c2.135-4.552,3.26-9.604,3.26-14.615v-3.021
                                                      C469.333,58.048,453.952,42.667,434.979,42.667z"
                                                                />
                                                                <circle cx={128} cy="426.667" r="42.667" />
                                                                <circle cx={384} cy="426.667" r="42.667" />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                                                      c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                                                      c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                                                      s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                                                      C512,93.417,453.532,30,376,30z"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 461.312 461.312"
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M230.656,156.416c-40.96,0-74.24,33.28-74.24,74.24s33.28,74.24,74.24,74.24s74.24-33.28,74.24-74.24
                                                      S271.616,156.416,230.656,156.416z M225.024,208.64c-9.216,0-16.896,7.68-16.896,16.896h-24.576
                                                      c0.512-23.04,18.944-41.472,41.472-41.472V208.64z"
                                                                />
                                                            </g>
                                                            <g>
                                                                <path
                                                                    d="M455.936,215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464,184.064,5.376,215.296
                                                      c-7.168,8.704-7.168,21.504,0,30.72c25.088,31.232,114.688,133.12,225.28,133.12s200.192-101.888,225.28-133.12
                                                      C463.104,237.312,463.104,224.512,455.936,215.296z M230.656,338.176c-59.392,0-107.52-48.128-107.52-107.52
                                                      s48.128-107.52,107.52-107.52s107.52,48.128,107.52,107.52S290.048,338.176,230.656,338.176z"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="pa-product-box">
                                        <div className="pa-product-img">
                                            <img
                                                src="assets/images/product4.png"
                                                alt="image"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="pa-product-content">
                                            <h4>
                                                <a href="product-single.html">Black Organic Tea</a>
                                            </h4>
                                            <p className="pa-product-rating">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="far fa-star" />
                                                <i className="far fa-star" />
                                            </p>
                                            <p>
                                                <del>$ 130</del>$ 120
                                            </p>
                                        </div>
                                        <div className="pa-product-cart">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 469.333 469.333"
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M434.979,42.667H85.333c-1.053,0-2.014,0.396-3.001,0.693l-8.594-28.241C71.005,6.138,62.721,0,53.333,0H10.667
                                                      C4.776,0,0,4.776,0,10.667V32c0,5.891,4.776,10.667,10.667,10.667h26.865l66.646,219.01l-24.891,29.039
                                                      c-9.838,11.477-14.268,27.291-9.74,41.713c5.791,18.445,22.07,30.237,40.839,30.237H416c5.891,0,10.667-4.776,10.667-10.667
                                                      v-21.333c0-5.891-4.776-10.667-10.667-10.667H110.385l33.813-39.448c0.85-0.992,1.475-2.112,2.12-3.219h206.703
                                                      c16.533,0,31.578-9.548,38.618-24.507l74.434-158.17c2.135-4.552,3.26-9.604,3.26-14.615v-3.021
                                                      C469.333,58.048,453.952,42.667,434.979,42.667z"
                                                                />
                                                                <circle cx={128} cy="426.667" r="42.667" />
                                                                <circle cx={384} cy="426.667" r="42.667" />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                                                      c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                                                      c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                                                      s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                                                      C512,93.417,453.532,30,376,30z"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 461.312 461.312"
                                                        >
                                                            <g>
                                                                <path
                                                                    d="M230.656,156.416c-40.96,0-74.24,33.28-74.24,74.24s33.28,74.24,74.24,74.24s74.24-33.28,74.24-74.24
                                                      S271.616,156.416,230.656,156.416z M225.024,208.64c-9.216,0-16.896,7.68-16.896,16.896h-24.576
                                                      c0.512-23.04,18.944-41.472,41.472-41.472V208.64z"
                                                                />
                                                            </g>
                                                            <g>
                                                                <path
                                                                    d="M455.936,215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464,184.064,5.376,215.296
                                                      c-7.168,8.704-7.168,21.504,0,30.72c25.088,31.232,114.688,133.12,225.28,133.12s200.192-101.888,225.28-133.12
                                                      C463.104,237.312,463.104,224.512,455.936,215.296z M230.656,338.176c-59.392,0-107.52-48.128-107.52-107.52
                                                      s48.128-107.52,107.52-107.52s107.52,48.128,107.52,107.52S290.048,338.176,230.656,338.176z"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="pa-add">
                                        <img
                                            src="assets/images/add.jpg"
                                            alt="image"
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="pa-product-sidebar">
                                <div className="pa-widget pa-search">
                                    <input type="text" placeholder="Product search" />
                                    <button className="pa-btn">Search</button>
                                </div>
                                <div className="pa-widget pa-shop-category">
                                    <h2 className="pa-sidebar-title">Categories</h2>
                                    <ul>
                                        <li>
                                            <a href="javascript:;">
                                                Top products <span>4</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                Latest products <span>5</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                New trending <span>6</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                New arrivals <span>2</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                Recently added <span>9</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pa-widget pa-product-widget">
                                    <h2 className="pa-sidebar-title">Top poducts</h2>
                                    <ul>
                                        <li>
                                            <div className="pa-pro-wid-img">
                                                <img
                                                    src="assets/images/product-wid1.png"
                                                    alt="image"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="pa-pro-wid-content">
                                                <h4>
                                                    <a href="javascript:;">Black Organic Tea</a>
                                                </h4>
                                                <p>Ut enim ad minim veniam, quis nostrud exerci</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="pa-pro-wid-img">
                                                <img
                                                    src="assets/images/product-wid2.png"
                                                    alt="image"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="pa-pro-wid-content">
                                                <h4>
                                                    <a href="javascript:;">Loose Leaf Tea</a>
                                                </h4>
                                                <p>Ut enim ad minim veniam quis nostrud exerci</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="pa-pro-wid-img">
                                                <img
                                                    src="assets/images/product-wid3.png"
                                                    alt="image"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="pa-pro-wid-content">
                                                <h4>
                                                    <a href="javascript:;">Green Tea</a>
                                                </h4>
                                                <p>Ut enim ad minim veniam quis nostrud exerci</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pa-widget pa-tag">
                                    <h2 className="pa-sidebar-title">Tag clouds</h2>
                                    <ul>
                                        <li>
                                            <a href="javascript:;">product</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">Ayurveda</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">pure</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">trending</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">herbal</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">healthy</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">product</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">Ayurveda</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">trending</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">pure</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">herbal</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">healthy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* product end */}
            {/* product start */}
            <div className="pa-product">
                <div className="container">
                    <div className="pa-heading">
                        <img src="assets/images/herbal.svg" alt="image" className="img-fluid" />
                        <h1>Related products</h1>
                        <h5>herbal</h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="pa-product-box">
                                <div className="pa-product-img">
                                    <img
                                        src="assets/images/product1.png"
                                        alt="image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="pa-product-content">
                                    <h4>
                                        <a href="product-single.html">Black Organic Tea</a>
                                    </h4>
                                    <p className="pa-product-rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                        <i className="far fa-star" />
                                    </p>
                                    <p>
                                        <del>$ 130</del>$ 120
                                    </p>
                                </div>
                                <div className="pa-product-cart">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 469.333 469.333"
                                                >
                                                    <g>
                                                        <path
                                                            d="M434.979,42.667H85.333c-1.053,0-2.014,0.396-3.001,0.693l-8.594-28.241C71.005,6.138,62.721,0,53.333,0H10.667
                                              C4.776,0,0,4.776,0,10.667V32c0,5.891,4.776,10.667,10.667,10.667h26.865l66.646,219.01l-24.891,29.039
                                              c-9.838,11.477-14.268,27.291-9.74,41.713c5.791,18.445,22.07,30.237,40.839,30.237H416c5.891,0,10.667-4.776,10.667-10.667
                                              v-21.333c0-5.891-4.776-10.667-10.667-10.667H110.385l33.813-39.448c0.85-0.992,1.475-2.112,2.12-3.219h206.703
                                              c16.533,0,31.578-9.548,38.618-24.507l74.434-158.17c2.135-4.552,3.26-9.604,3.26-14.615v-3.021
                                              C469.333,58.048,453.952,42.667,434.979,42.667z"
                                                        />
                                                        <circle cx={128} cy="426.667" r="42.667" />
                                                        <circle cx={384} cy="426.667" r="42.667" />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <path
                                                            d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                                              c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                                              c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                                              s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                                              C512,93.417,453.532,30,376,30z"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 461.312 461.312"
                                                >
                                                    <g>
                                                        <path
                                                            d="M230.656,156.416c-40.96,0-74.24,33.28-74.24,74.24s33.28,74.24,74.24,74.24s74.24-33.28,74.24-74.24
                                              S271.616,156.416,230.656,156.416z M225.024,208.64c-9.216,0-16.896,7.68-16.896,16.896h-24.576
                                              c0.512-23.04,18.944-41.472,41.472-41.472V208.64z"
                                                        />
                                                    </g>
                                                    <g>
                                                        <path
                                                            d="M455.936,215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464,184.064,5.376,215.296
                                              c-7.168,8.704-7.168,21.504,0,30.72c25.088,31.232,114.688,133.12,225.28,133.12s200.192-101.888,225.28-133.12
                                              C463.104,237.312,463.104,224.512,455.936,215.296z M230.656,338.176c-59.392,0-107.52-48.128-107.52-107.52
                                              s48.128-107.52,107.52-107.52s107.52,48.128,107.52,107.52S290.048,338.176,230.656,338.176z"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="pa-product-box">
                                <div className="pa-product-img">
                                    <img
                                        src="assets/images/product2.png"
                                        alt="image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="pa-product-content">
                                    <h4>
                                        <a href="product-single.html">Loose Leaf Tea</a>
                                    </h4>
                                    <p className="pa-product-rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                        <i className="far fa-star" />
                                    </p>
                                    <p>
                                        <del>$ 130</del>$ 120
                                    </p>
                                </div>
                                <div className="pa-product-cart">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 469.333 469.333"
                                                >
                                                    <g>
                                                        <path
                                                            d="M434.979,42.667H85.333c-1.053,0-2.014,0.396-3.001,0.693l-8.594-28.241C71.005,6.138,62.721,0,53.333,0H10.667
                                              C4.776,0,0,4.776,0,10.667V32c0,5.891,4.776,10.667,10.667,10.667h26.865l66.646,219.01l-24.891,29.039
                                              c-9.838,11.477-14.268,27.291-9.74,41.713c5.791,18.445,22.07,30.237,40.839,30.237H416c5.891,0,10.667-4.776,10.667-10.667
                                              v-21.333c0-5.891-4.776-10.667-10.667-10.667H110.385l33.813-39.448c0.85-0.992,1.475-2.112,2.12-3.219h206.703
                                              c16.533,0,31.578-9.548,38.618-24.507l74.434-158.17c2.135-4.552,3.26-9.604,3.26-14.615v-3.021
                                              C469.333,58.048,453.952,42.667,434.979,42.667z"
                                                        />
                                                        <circle cx={128} cy="426.667" r="42.667" />
                                                        <circle cx={384} cy="426.667" r="42.667" />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <path
                                                            d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                                              c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                                              c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                                              s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                                              C512,93.417,453.532,30,376,30z"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 461.312 461.312"
                                                >
                                                    <g>
                                                        <path
                                                            d="M230.656,156.416c-40.96,0-74.24,33.28-74.24,74.24s33.28,74.24,74.24,74.24s74.24-33.28,74.24-74.24
                                              S271.616,156.416,230.656,156.416z M225.024,208.64c-9.216,0-16.896,7.68-16.896,16.896h-24.576
                                              c0.512-23.04,18.944-41.472,41.472-41.472V208.64z"
                                                        />
                                                    </g>
                                                    <g>
                                                        <path
                                                            d="M455.936,215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464,184.064,5.376,215.296
                                              c-7.168,8.704-7.168,21.504,0,30.72c25.088,31.232,114.688,133.12,225.28,133.12s200.192-101.888,225.28-133.12
                                              C463.104,237.312,463.104,224.512,455.936,215.296z M230.656,338.176c-59.392,0-107.52-48.128-107.52-107.52
                                              s48.128-107.52,107.52-107.52s107.52,48.128,107.52,107.52S290.048,338.176,230.656,338.176z"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="pa-product-box">
                                <div className="pa-product-img">
                                    <img
                                        src="assets/images/product3.png"
                                        alt="image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="pa-product-content">
                                    <h4>
                                        <a href="product-single.html">Oolong Tea</a>
                                    </h4>
                                    <p className="pa-product-rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                        <i className="far fa-star" />
                                    </p>
                                    <p>
                                        <del>$ 130</del>$ 120
                                    </p>
                                </div>
                                <div className="pa-product-cart">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 469.333 469.333"
                                                >
                                                    <g>
                                                        <path
                                                            d="M434.979,42.667H85.333c-1.053,0-2.014,0.396-3.001,0.693l-8.594-28.241C71.005,6.138,62.721,0,53.333,0H10.667
                                              C4.776,0,0,4.776,0,10.667V32c0,5.891,4.776,10.667,10.667,10.667h26.865l66.646,219.01l-24.891,29.039
                                              c-9.838,11.477-14.268,27.291-9.74,41.713c5.791,18.445,22.07,30.237,40.839,30.237H416c5.891,0,10.667-4.776,10.667-10.667
                                              v-21.333c0-5.891-4.776-10.667-10.667-10.667H110.385l33.813-39.448c0.85-0.992,1.475-2.112,2.12-3.219h206.703
                                              c16.533,0,31.578-9.548,38.618-24.507l74.434-158.17c2.135-4.552,3.26-9.604,3.26-14.615v-3.021
                                              C469.333,58.048,453.952,42.667,434.979,42.667z"
                                                        />
                                                        <circle cx={128} cy="426.667" r="42.667" />
                                                        <circle cx={384} cy="426.667" r="42.667" />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <path
                                                            d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                                              c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                                              c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                                              s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                                              C512,93.417,453.532,30,376,30z"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 461.312 461.312"
                                                >
                                                    <g>
                                                        <path
                                                            d="M230.656,156.416c-40.96,0-74.24,33.28-74.24,74.24s33.28,74.24,74.24,74.24s74.24-33.28,74.24-74.24
                                              S271.616,156.416,230.656,156.416z M225.024,208.64c-9.216,0-16.896,7.68-16.896,16.896h-24.576
                                              c0.512-23.04,18.944-41.472,41.472-41.472V208.64z"
                                                        />
                                                    </g>
                                                    <g>
                                                        <path
                                                            d="M455.936,215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464,184.064,5.376,215.296
                                              c-7.168,8.704-7.168,21.504,0,30.72c25.088,31.232,114.688,133.12,225.28,133.12s200.192-101.888,225.28-133.12
                                              C463.104,237.312,463.104,224.512,455.936,215.296z M230.656,338.176c-59.392,0-107.52-48.128-107.52-107.52
                                              s48.128-107.52,107.52-107.52s107.52,48.128,107.52,107.52S290.048,338.176,230.656,338.176z"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="pa-product-box">
                                <div className="pa-product-img">
                                    <img
                                        src="assets/images/product4.png"
                                        alt="image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="pa-product-content">
                                    <h4>
                                        <a href="product-single.html">Black Organic Tea</a>
                                    </h4>
                                    <p className="pa-product-rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                        <i className="far fa-star" />
                                    </p>
                                    <p>
                                        <del>$ 130</del>$ 120
                                    </p>
                                </div>
                                <div className="pa-product-cart">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 469.333 469.333"
                                                >
                                                    <g>
                                                        <path
                                                            d="M434.979,42.667H85.333c-1.053,0-2.014,0.396-3.001,0.693l-8.594-28.241C71.005,6.138,62.721,0,53.333,0H10.667
                                              C4.776,0,0,4.776,0,10.667V32c0,5.891,4.776,10.667,10.667,10.667h26.865l66.646,219.01l-24.891,29.039
                                              c-9.838,11.477-14.268,27.291-9.74,41.713c5.791,18.445,22.07,30.237,40.839,30.237H416c5.891,0,10.667-4.776,10.667-10.667
                                              v-21.333c0-5.891-4.776-10.667-10.667-10.667H110.385l33.813-39.448c0.85-0.992,1.475-2.112,2.12-3.219h206.703
                                              c16.533,0,31.578-9.548,38.618-24.507l74.434-158.17c2.135-4.552,3.26-9.604,3.26-14.615v-3.021
                                              C469.333,58.048,453.952,42.667,434.979,42.667z"
                                                        />
                                                        <circle cx={128} cy="426.667" r="42.667" />
                                                        <circle cx={384} cy="426.667" r="42.667" />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <path
                                                            d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                                              c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                                              c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                                              s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                                              C512,93.417,453.532,30,376,30z"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 461.312 461.312"
                                                >
                                                    <g>
                                                        <path
                                                            d="M230.656,156.416c-40.96,0-74.24,33.28-74.24,74.24s33.28,74.24,74.24,74.24s74.24-33.28,74.24-74.24
                                              S271.616,156.416,230.656,156.416z M225.024,208.64c-9.216,0-16.896,7.68-16.896,16.896h-24.576
                                              c0.512-23.04,18.944-41.472,41.472-41.472V208.64z"
                                                        />
                                                    </g>
                                                    <g>
                                                        <path
                                                            d="M455.936,215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464,184.064,5.376,215.296
                                              c-7.168,8.704-7.168,21.504,0,30.72c25.088,31.232,114.688,133.12,225.28,133.12s200.192-101.888,225.28-133.12
                                              C463.104,237.312,463.104,224.512,455.936,215.296z M230.656,338.176c-59.392,0-107.52-48.128-107.52-107.52
                                              s48.128-107.52,107.52-107.52s107.52,48.128,107.52,107.52S290.048,338.176,230.656,338.176z"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="pa-product-box">
                                <div className="pa-product-img">
                                    <img
                                        src="assets/images/product5.png"
                                        alt="image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="pa-product-content">
                                    <h4>
                                        <a href="product-single.html">Green Tea</a>
                                    </h4>
                                    <p className="pa-product-rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                        <i className="far fa-star" />
                                    </p>
                                    <p>
                                        <del>$ 130</del>$ 120
                                    </p>
                                </div>
                                <div className="pa-product-cart">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 469.333 469.333"
                                                >
                                                    <g>
                                                        <path
                                                            d="M434.979,42.667H85.333c-1.053,0-2.014,0.396-3.001,0.693l-8.594-28.241C71.005,6.138,62.721,0,53.333,0H10.667
                                              C4.776,0,0,4.776,0,10.667V32c0,5.891,4.776,10.667,10.667,10.667h26.865l66.646,219.01l-24.891,29.039
                                              c-9.838,11.477-14.268,27.291-9.74,41.713c5.791,18.445,22.07,30.237,40.839,30.237H416c5.891,0,10.667-4.776,10.667-10.667
                                              v-21.333c0-5.891-4.776-10.667-10.667-10.667H110.385l33.813-39.448c0.85-0.992,1.475-2.112,2.12-3.219h206.703
                                              c16.533,0,31.578-9.548,38.618-24.507l74.434-158.17c2.135-4.552,3.26-9.604,3.26-14.615v-3.021
                                              C469.333,58.048,453.952,42.667,434.979,42.667z"
                                                        />
                                                        <circle cx={128} cy="426.667" r="42.667" />
                                                        <circle cx={384} cy="426.667" r="42.667" />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <path
                                                            d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                                              c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                                              c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                                              s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                                              C512,93.417,453.532,30,376,30z"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 461.312 461.312"
                                                >
                                                    <g>
                                                        <path
                                                            d="M230.656,156.416c-40.96,0-74.24,33.28-74.24,74.24s33.28,74.24,74.24,74.24s74.24-33.28,74.24-74.24
                                              S271.616,156.416,230.656,156.416z M225.024,208.64c-9.216,0-16.896,7.68-16.896,16.896h-24.576
                                              c0.512-23.04,18.944-41.472,41.472-41.472V208.64z"
                                                        />
                                                    </g>
                                                    <g>
                                                        <path
                                                            d="M455.936,215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464,184.064,5.376,215.296
                                              c-7.168,8.704-7.168,21.504,0,30.72c25.088,31.232,114.688,133.12,225.28,133.12s200.192-101.888,225.28-133.12
                                              C463.104,237.312,463.104,224.512,455.936,215.296z M230.656,338.176c-59.392,0-107.52-48.128-107.52-107.52
                                              s48.128-107.52,107.52-107.52s107.52,48.128,107.52,107.52S290.048,338.176,230.656,338.176z"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="pa-product-box">
                                <div className="pa-product-img">
                                    <img
                                        src="assets/images/product6.png"
                                        alt="image"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="pa-product-content">
                                    <h4>
                                        <a href="product-single.html">Sencha Tea</a>
                                    </h4>
                                    <p className="pa-product-rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="far fa-star" />
                                        <i className="far fa-star" />
                                    </p>
                                    <p>
                                        <del>$ 130</del>$ 120
                                    </p>
                                </div>
                                <div className="pa-product-cart">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 469.333 469.333"
                                                >
                                                    <g>
                                                        <path
                                                            d="M434.979,42.667H85.333c-1.053,0-2.014,0.396-3.001,0.693l-8.594-28.241C71.005,6.138,62.721,0,53.333,0H10.667
                                              C4.776,0,0,4.776,0,10.667V32c0,5.891,4.776,10.667,10.667,10.667h26.865l66.646,219.01l-24.891,29.039
                                              c-9.838,11.477-14.268,27.291-9.74,41.713c5.791,18.445,22.07,30.237,40.839,30.237H416c5.891,0,10.667-4.776,10.667-10.667
                                              v-21.333c0-5.891-4.776-10.667-10.667-10.667H110.385l33.813-39.448c0.85-0.992,1.475-2.112,2.12-3.219h206.703
                                              c16.533,0,31.578-9.548,38.618-24.507l74.434-158.17c2.135-4.552,3.26-9.604,3.26-14.615v-3.021
                                              C469.333,58.048,453.952,42.667,434.979,42.667z"
                                                        />
                                                        <circle cx={128} cy="426.667" r="42.667" />
                                                        <circle cx={384} cy="426.667" r="42.667" />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <path
                                                            d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
                                              c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
                                              c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
                                              s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
                                              C512,93.417,453.532,30,376,30z"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 461.312 461.312"
                                                >
                                                    <g>
                                                        <path
                                                            d="M230.656,156.416c-40.96,0-74.24,33.28-74.24,74.24s33.28,74.24,74.24,74.24s74.24-33.28,74.24-74.24
                                              S271.616,156.416,230.656,156.416z M225.024,208.64c-9.216,0-16.896,7.68-16.896,16.896h-24.576
                                              c0.512-23.04,18.944-41.472,41.472-41.472V208.64z"
                                                        />
                                                    </g>
                                                    <g>
                                                        <path
                                                            d="M455.936,215.296c-25.088-31.232-114.688-133.12-225.28-133.12S30.464,184.064,5.376,215.296
                                              c-7.168,8.704-7.168,21.504,0,30.72c25.088,31.232,114.688,133.12,225.28,133.12s200.192-101.888,225.28-133.12
                                              C463.104,237.312,463.104,224.512,455.936,215.296z M230.656,338.176c-59.392,0-107.52-48.128-107.52-107.52
                                              s48.128-107.52,107.52-107.52s107.52,48.128,107.52,107.52S290.048,338.176,230.656,338.176z"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* product end */}
        </>

    )
}
