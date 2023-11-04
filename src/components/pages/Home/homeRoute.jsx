import { Route } from "@tanstack/react-router"
import rootRoute from "../../common/rootRoute";
import Home from "./Home";

const homeRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home,
});

export default homeRoute;
