import React from "react";
import { Link } from "react-router-dom";
import { GLOBAL_EXTRA_PROPS, GLOBAL_STATE } from "../../../../app/App";
import deepmerge from "deepmerge";


interface Props {
    extra: GLOBAL_EXTRA_PROPS;
}


export default function SubHeader (props: Props) {
    const [ state, setState ] = props.extra.globalState;
    
    const handleClick = (id: keyof GLOBAL_STATE["visiblePages"]) => () => {
        const originalValue = state[id];
        
        const visiblePages = {
            query: true,
            append: false
        } as GLOBAL_STATE["visiblePages"];
        for (let itemName of Object.keys(state.visiblePages)) {
            const value = !state.visiblePages[itemName];
            
            if (itemName === id) {
                visiblePages[itemName] = value;
            } else {
                visiblePages[itemName] = false;
            }
        }
    
        const newStateData = deepmerge(state, {
            visiblePages
        });
        
        setState(newStateData);
    };
    
    return (
        <div className="subheader bg-white h-100px">
            <div className="container flex-wrap flex-sm-nowrap">
                <div className="d-none d-lg-flex align-items-center flex-wrap w-250px">
                    <h2 className="h-auto">
                        Dashboard
                    </h2>
                </div>
                <div className="subheader-nav nav flex-grow-1">
                    <Link to="#" className={ `nav-item ${ state.visiblePages.append ? "active" : "" }` }
                          onClick={ handleClick("append") }>
                        <span className="nav-label px-10">
                            <span className="nav-title text-dark-75 font-weight-bold font-size-h4">
                                Append
                            </span>
                            <span className="nav-desc text-muted">
                                Retrieve data from input file
                            </span>
                        </span>
                    </Link>
                    <Link to="#" className={ `nav-item ${ state.visiblePages.query ? "active" : "" }` }
                          onClick={ handleClick("query") }>
                        <span className="nav-label px-10">
                            <span className="nav-title text-dark-75 font-weight-bold font-size-h4">
                                Query
                            </span>
                            <span className="nav-desc text-muted">
                                Find data based on query
                            </span>
                        </span>
                    </Link>
                
                </div>
            </div>
        </div>
    );
}
