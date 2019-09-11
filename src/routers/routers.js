import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainLayout from "../containers/MainLayout";
import Posts from "../containers/posts";
import Contact from "../containers/contact";
import Counter from "../containers/Counter";
import Register from '../component/Register';
import RegisterSuccess from '../component/RegisterSuccess';
import RegisterNew from '../component/RegisterNew';

const MainRouter = () => (
    <BrowserRouter>
        <MainLayout>
            <Switch>
                <Route exact path="/" component={Register} />
                <Route path="/RegisterNew" component={RegisterNew} />
                <Route path="/success" component={RegisterSuccess} />
                <Route exact path="/home" component={Counter} />
                <Route exact path="/posts" component={Posts} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </MainLayout>
    </BrowserRouter>
);

export default MainRouter;
