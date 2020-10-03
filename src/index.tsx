import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { unregister } from "./serviceWorker";
import STORE from "./util/store";


const { PUBLIC_URL } = process.env;


ReactDOM.render(
    <App store={ STORE } basename={ PUBLIC_URL }/>,
    document.getElementById("root")
)


// Unregistering from service worker
unregister();
