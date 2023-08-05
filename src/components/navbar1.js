import React from "react";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
// import Newsitem from "./newsitem1";

const Navbar1 = (props) => {

    // })
    return (
        <div>
            <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Newzilla
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business1">
                                    Business
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment1">
                                    Entertainment
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general1">
                                    General
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health1">
                                    Health
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science1">
                                    Science
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports1">
                                    Sports
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology1">
                                    Technology
                                </Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0 d-flex p-2">
                            <input className="form-control mr-sm-2 mx-2" type="search" placeholder="Search" aria-label="Search" />
                            {/* onChange={(e) => { setSearch(e.target.value) }} */}
                            <button className="btn btn-outline-success my-sm-0" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar1;
