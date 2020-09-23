import React from "react";
import Contact from "./Contact";
import About from "./About";
import User from "./User";
import Home from "./Home";
import Error from "./Error";
import Search from "./Search";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Redirect } from "react-router-dom";


const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/user/:name/:lname" component={User} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/about" render={About} />
                <Route exact path="/contact" component={() => <Contact name="Contact" />} />
                <Route component={Error} />
                {/* <Redirect to="/" /> */}
            </Switch>
        </>
    )
}
export default App;