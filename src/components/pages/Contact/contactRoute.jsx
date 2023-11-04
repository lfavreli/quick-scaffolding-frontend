import { Route } from "@tanstack/react-router"
import rootRoute from "@components/common/rootRoute";
import Contact from "./Contact";

const contactRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/contact",
    component: Contact,
});

export default contactRoute; 
