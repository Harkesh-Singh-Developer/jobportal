import React from "react";
import logo from "../../assets/logo/apnacarrer_logo.png";
import {
  Avatar,
  Button,
  Chip,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Logout from "@mui/icons-material/Logout";

function AppBarComponent({ logout, uid }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLoginClick = () => {
    navigate("/login"); // Navigate to login page
  };

  const handleLogoutClick = () => {
    logout();
    navigate("/");
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <nav className="navbar navbar-expand-lg center-nav transparent navbar-light">
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <Link to="/">
              <img src={logo} srcSet={logo} alt="apnacareer logo" height={40} />
            </Link>
          </div>
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header d-lg-none">
              <Link to="/">
                <img
                  src={logo}
                  srcSet={logo}
                  alt="apnacareer logo"
                  height={30}
                />
              </Link>
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
                    Jobs
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link className="dropdown-item" to="/jobs">
                        Part Time Jobs
                      </Link>
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
                        <Avatar variant="rounded">Img</Avatar>
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
                {uid ? (
                  <div>
                    <Chip
                      size="medium"
                      avatar={<Avatar />}
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    />

                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                    >
                      <MenuItem
                        onClick={() => {
                          handleClose();
                          navigate("/profile");
                        }}
                      >
                        <ListItemIcon>
                          <Avatar sx={{ width: 24, height: 24 }} />
                        </ListItemIcon>
                        View Profile
                      </MenuItem>

                      <MenuItem onClick={handleLogoutClick}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Menu>
                  </div>
                ) : (
                  <Button color="inherit" onClick={handleLoginClick}>
                    Login
                  </Button>
                )}
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
    </div>
  );
}

export default AppBarComponent;
