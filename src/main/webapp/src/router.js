import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import MainPage from "./service/auction/component/MainPage"


const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/auction" component={ MainPage }/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;



