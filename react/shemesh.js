import React from 'react';

import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Site from './components/Site';
import LinkTo from './components/LinkTo';
import NoMatch from './components/NotFound';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

injectTapEventPlugin();

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/about" component={About}></Route>
                {/*<Route path="/site/:url" component={Site}></Route>*/}
                {/*<Route path="/link/:url" component={LinkTo}/>*/}
                <Route path="*" component={NoMatch}/>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('app'));
