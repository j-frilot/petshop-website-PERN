import React from "react";
import Home from "./components/pages/home/Home";
import Doggies from "./components/pages/doggies/Doggies";
// import DogInfo from "./components/pages/doginfo/DogInfo";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import { Switch, Route } from "react-router-dom";

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/doggies" component={Doggies} />
                {/* <Route path="/doggies/" component={DogInfo} />*/}
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
            </Switch>{" "}
        </>
    );
};

export default Router;
