import React, { Dispatch, SetStateAction, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Store } from "redux";
import { renderRoutes } from "react-router-config";
import ROUTES from "../util/routes";


export interface GLOBAL_EXTRA_PROPS {
    globalState: [ GLOBAL_STATE, Dispatch<SetStateAction<GLOBAL_STATE>> ]
}


export interface GLOBAL_STATE {
    visiblePages: {
        append: boolean;
        query: boolean;
    }
}


export default function App (options: { store: Store, basename: string }) {
    const [ globalState, setGlobalState ] = useState({
        visiblePages: {
            append: true,
            query: false
        }
    } as GLOBAL_STATE);
    
    
    return (
        <Provider store={ options.store }>
            <React.Suspense fallback={ <h2>Loading</h2> }>
                <BrowserRouter basename={ options.basename }>
                    <div className="header-fixed header-mobile-fixed subheader-enabled">
                        {
                            renderRoutes(ROUTES, {
                                extra: {
                                    globalState: [ globalState, setGlobalState ]
                                }
                            })
                        }
                    </div>
                </BrowserRouter>
            </React.Suspense>
        </Provider>
    );
}
