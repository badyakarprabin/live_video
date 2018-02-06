import * as React from 'react';
import * as routes from './common/routes';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import Video from './components/Video';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

const App = () => (
    <div>
        <Navbar />
        <BrowserRouter history>
            <Switch>
                <Route exact path={routes.HOME} component={Home} />
                <Route exact path={routes.VIDEO} component={Video} />
            </Switch>
        </BrowserRouter>
        <Footer />
    </div>
);

export default App;
