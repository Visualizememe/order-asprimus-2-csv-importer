import React from 'react';
import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <div
            id="kt_header_menu"
            className="header-menu header-menu-mobile"
        >
            <ul className="menu-nav">
                <li className="menu-item menu-item-rel">
                    <NavLink className="menu-link" to="/dashboard">
                        <span className="menu-text">Dashboard</span>
                        <i className="menu-arrow"/>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
