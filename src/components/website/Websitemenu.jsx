import React from "react";

function Websitemenu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <a href="./index.html">
              <img
                src="./assets/img/logo-dark.png"
                srcSet="./assets/img/logo-dark@2x.png 2x"
                alt=""
              />
            </a>
          </div>
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header d-lg-none">
              <a href="./index.html">
                <img
                  src="./assets/img/logo-light.png"
                  srcSet="./assets/img/logo-light@2x.png 2x"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li className="dropdown dropdown-submenu dropend">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li className="dropdown dropdown-submenu dropend">
                          <a
                            className="dropdown-item dropdown-toggle"
                            href="#"
                            data-bs-toggle="dropdown"
                          >
                            Dropdown
                          </a>
                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="dropdown-item" href="#">
                                Another Action
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="dropdown-item" href="#">
                            Another Action
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="#">
                        Another Action
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown dropdown-mega">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Mega Menu
                  </a>
                  <ul className="dropdown-menu mega-menu">
                    <li className="mega-menu-content">
                      <div className="row gx-0 gx-lg-3">
                        <div className="col-lg-6">
                          <h6 className="dropdown-header">One</h6>
                          <div className="row gx-0">
                            <div className="col-lg-6">
                              <ul className="list-unstyled">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Link
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Link
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Link
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/*/column */}
                            <div className="col-lg-6">
                              <ul className="list-unstyled">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Link
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Link
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Link
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/*/column */}
                          </div>
                          {/*/.row */}
                        </div>
                        {/*/column */}
                        <div className="col-lg-3">
                          <h6 className="dropdown-header">Two</h6>
                          <ul className="list-unstyled">
                            <li>
                              <a className="dropdown-item" href="#">
                                Link
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Link
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Link
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*/column */}
                        <div className="col-lg-3">
                          <h6 className="dropdown-header">Three</h6>
                          <ul className="list-unstyled">
                            <li>
                              <a className="dropdown-item" href="#">
                                Link
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Link
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Link
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*/column */}
                      </div>
                      {/*/.row */}
                    </li>
                    {/*/.mega-menu-content*/}
                  </ul>
                  {/*/.dropdown-menu */}
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Dropdown Large
                  </a>
                  <div className="dropdown-menu dropdown-lg">
                    <div className="dropdown-lg-content">
                      <div>
                        <h6 className="dropdown-header">One</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a className="dropdown-item" href="#">
                              Link
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Link
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another Link
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* /.column */}
                      <div>
                        <h6 className="dropdown-header">Two</h6>
                        <ul className="list-unstyled">
                          <li>
                            <a className="dropdown-item" href="#">
                              Link
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Link
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another Link
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* /.column */}
                    </div>
                    {/* /auto-column */}
                  </div>
                </li>
              </ul>
              {/* /.navbar-nav */}
              <div className="d-lg-none mt-auto pt-6 pb-6 order-4">
                <a href="mailto:first.last@email.com" className="link-inverse">
                  info@email.com
                </a>
                <br /> 00 (123) 456 78 90 <br />
                <nav className="nav social social-white mt-4">
                  <a href="#">
                    <i className="uil uil-twitter" />
                  </a>
                  <a href="#">
                    <i className="uil uil-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="uil uil-dribbble" />
                  </a>
                  <a href="#">
                    <i className="uil uil-instagram" />
                  </a>
                  <a href="#">
                    <i className="uil uil-youtube" />
                  </a>
                </nav>
                {/* /.social */}
              </div>
              {/* /offcanvas-nav-other */}
            </div>
            {/* /.offcanvas-body */}
          </div>
          {/* /.navbar-collapse */}
          <div className="navbar-other w-100 d-flex ms-auto">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item dropdown language-select text-uppercase">
                <a
                  className="nav-link dropdown-item dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  En
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <a className="dropdown-item" href="#">
                      En
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="dropdown-item" href="#">
                      De
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="dropdown-item" href="#">
                      Es
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item d-none d-md-block">
                <a
                  href="./contact.html"
                  className="btn btn-sm btn-primary rounded-pill"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item d-lg-none">
                <button className="hamburger offcanvas-nav-btn">
                  <span />
                </button>
              </li>
            </ul>
            {/* /.navbar-nav */}
          </div>
          {/* /.navbar-other */}
        </div>
        {/* /.container */}
      </nav>
      {/* /.navbar */}
    </>
  );
}

export default Websitemenu;
