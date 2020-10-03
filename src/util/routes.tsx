import { RouteConfig } from "react-router-config";
import { lazy } from "react";
import DashboardLayout from "../views/layouts/Dashboard";


const ROUTES = [
    {
        path: "/",
        component: DashboardLayout,
        routes: [
            {
                path: "/",
                exact: true,
                component: lazy(() => import("../views/pages/dashboard/entry"))
            }
        ]
    }
] as unknown as RouteConfig[];


export default ROUTES;
