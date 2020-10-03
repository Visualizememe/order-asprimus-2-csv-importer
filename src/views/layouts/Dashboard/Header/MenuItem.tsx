import { Link } from "react-router-dom";
import React, { useState } from "react";

type Props = {
    text: string;
    linkTo: any;
    items?: any[];
};
export default function MenuItem (props: Props) {
    const [state, setState] = useState({
        hovered: false,
        active: false
    });
    
    const handleHover = (hovered: boolean) => () => {
        setState(previousState => ({
            ...previousState,
            hovered
        }));
    };
    
    return (
        <li
            className={
                `menu-item ${state.hovered ? "menu-item-hover" : ""} ${props.items ? "menu-item menu-item-submenu menu-item-rel" : ""}`
            }
            onMouseEnter={handleHover(true)}
            onMouseLeave={handleHover(false)}
        >
            <Link to={props.linkTo} className="menu-link">
                <span className="menu-text">
                    {
                        props.text
                    }
                </span>
            </Link>
            {
                props.items && (
                    <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                        <ul className="menu-subnav">
                            {
                                props.items.map(item => (
                                    <li className="menu-item menu-item-submenu">
                                        {
                                            item
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </li>
    );
};
