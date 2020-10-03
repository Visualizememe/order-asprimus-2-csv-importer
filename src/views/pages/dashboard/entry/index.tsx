import React from "react";
import { RouteConfigComponentProps } from "react-router-config";
import { GLOBAL_EXTRA_PROPS } from "../../../../app/App";
import AppendPage from "./Append";
import QueryPage from "./Query";


interface Props extends RouteConfigComponentProps<any> {
    extra: GLOBAL_EXTRA_PROPS;
}


export default function MainPage (props: Props) {
    const [ globalState, setGlobalState ] = props.extra.globalState;
    
    return (
        <>
            <div className="d-flex flex-column flex-root">
                <div className="d-flex flex-row flex-column-fluid page">
                    <div className="d-flex flex-column flex-row-fluid wrapper">
                        {
                            globalState.visiblePages.append ? <AppendPage/> : null
                        }
                        {
                            globalState.visiblePages.query ? <QueryPage/> : null
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
