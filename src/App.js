import * as React from 'react';
import * as routes from './common/routes';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Video from './components/Video';
import Contact from './components/Contact';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

const App = () => (
    <div className='container'>
        <Navbar />
        <BrowserRouter history>
            <Switch>
                <Route exact path={routes.HOME} component={Home} />
                <Route exact path={routes.LOGIN} component={Login} />
                <Route exact path={routes.VIDEO} component={Video} />
                <Route exact path={routes.CONTACT} component={Contact} />
            </Switch>
        </BrowserRouter>
        <Footer />
    </div>
);

export default App;
