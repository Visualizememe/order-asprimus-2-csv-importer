import React from "react";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";


export default function DashboardHeader () {
    return (
        <div className="header header-fixed">
            {/*}
            <div className="header-mobile header-mobile-fixed">
                <div className="kt-header-mobile__logo">
                    <Link to="/">
                        <img
                            alt="Logo"
                            src="/assets/media/logos/logo-7.png"
                            className="max-h-30-px"
                        />
                    </Link>
                    <div className="d-flex align-items-center">
                        <button className="btn p-0 rounded-0 ml4">
                            <i className="fas fa-home"/>
                        </button>
                    </div>
                </div>
            </div>
            */ }
            <div className="container">
                <div className="header-menu-wrapper header-menu-wrapper-left">
                    <div className="header-menu header-menu-left header-menu-mobile header-menu-layout-default">
                        <ul className="menu-nav">
                            <MenuItem
                                text={ "Dashboard" }
                                linkTo={ "/" }
                            />
                            <MenuItem
                                text={ "Moderation" }
                                linkTo={ "/" }
                            />
                            <MenuItem
                                text={ "Data" }
                                linkTo={ "/" }
                            />
                        </ul>
                    </div>
                </div>
                <div className="topbar">
                    <div className="dropdown show">
                        <div className="topbar-item" data-toggle="dropdown" data-offset="10x,0px" aria-expanded="false">
                            <div className="btn btn-icon btn-hover-transparent-white btn-dropdown btn-lg mr-1">
                                    <span className="icon">
                                        <i className="fas fa-th-large"/>
                                    </span>
                            </div>
                        </div>
                        <div
                            className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg"
                        >
                            {/* Quick Action Title */ }
                            <div className="d-flex flex-column flex-center py-10 rounded-to border-bottom">
                                <h4 className="text-dark font-weight-bold">
                                    Quick Actions
                                </h4>
                            </div>
                            
                            {/* Quick Action Buttons */ }
                            <div className="row row-paddingless">
                                <div className="col-6">
                                    <Link to="/"
                                          className="d-block py-10 px-5 text-center bg-hover-light border-right border-bottom">
                                            <span className="icon">
                                                <i className="fas fa-search"
                                                   style={ { color: "#14cb7e", fontSize: 24 } }/>
                                            </span>
                                        <span className="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">
                                            Search users
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
