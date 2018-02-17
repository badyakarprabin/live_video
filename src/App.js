import * as React from 'react';
import * as routes from './common/routes';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Video from './components/Video';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LiveClasses from './components/classess/LiveClasses';

const App = () => (
    <div>
        <Navbar />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                <Route exact path={process.env.PUBLIC_URL + routes.LOGIN} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + routes.VIDEO} component={Video} />
                <Route exact path={process.env.PUBLIC_URL + routes.COURSE} component={LiveClasses} />
                <Route exact path={process.env.PUBLIC_URL + routes.PROFILE} component={Profile} />
                {/* <Route exact path={routes.VIDEO} component={Opentok} /> */}
                <Route exact path={process.env.PUBLIC_URL + routes.CONTACT} component={Contact} />
            </Switch>
        </BrowserRouter>
        <Footer />
    </div>
);

export default App;
