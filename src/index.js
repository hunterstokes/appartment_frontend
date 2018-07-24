import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import ApartmentContainer  from './containers/apartments.js';

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route path="/apartments" component={ApartmentContainer} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={ApartmentContainer}/>
    </Switch>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
