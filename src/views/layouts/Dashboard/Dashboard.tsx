import React from "react";
import { RouteConfigComponentProps } from "react-router-config";
import SubHeader from "./SubHeader";
import { GLOBAL_EXTRA_PROPS } from "../../../app/App";
import MainPage from "../../pages/dashboard/entry";


interface Props extends RouteConfigComponentProps<any> {
    extra: GLOBAL_EXTRA_PROPS;
}


export default function DashboardLayout (props: Props) {
    console.log(props);
    
    return (
        <div className="kt-grid__item--fluid">
            {/* Header */ }
            <SubHeader
                extra={ props.extra }
            />
            
            {/* Page Content */ }
            <MainPage { ...props }/>
        </div>
    );
}
