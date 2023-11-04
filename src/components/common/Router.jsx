import { RouterProvider, Router as TRouter } from "@tanstack/react-router"

import rootRoute from "./rootRoute";
import homeRoute from "@pages/Home/homeRoute";
import contactRoute from "@pages/Contact/contactRoute";

const Router = () => {

    const routeTree = rootRoute.addChildren([
        homeRoute,
        contactRoute
    ]);

    const router = new TRouter({
        routeTree
    });

    return <RouterProvider router={router} />;
}

export default Router;
