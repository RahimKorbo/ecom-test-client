import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthInitiate from "./components/ecom/AuthInitiate";
import OtpPage from "./components/ecom/OtpPage";
import AuthResult from "./components/ecom/AuthResult";



export function Main(){
    return(
        <main>
            <Switch>
                <Route exact path="/" component={AuthInitiate} />
                <Route exact path="/otp" component={OtpPage} />
                <Route exact path="/result" component={AuthResult} />
            </Switch>
        </main>
    )
}