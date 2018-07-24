import React, { Component } from 'react';
import Header from '../components/Header.js';
import FooterPage from '../components/Footer.js';
import '../css/App.css';
import {getApartments} from '../api/index.js';
import Login from '../components/Login';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import ApartmentContainer  from '../containers/apartments.js';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apartments: []
        }
    }
    componentWillMount() {
        getApartments()
        .then(APIapartments => {
            this.setState({
                apartments: APIapartments
            })
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Router>
                    <div>
                    <Switch>
                        <Route path="/apartments" component={ApartmentContainer} />
                        <Route path="/login" component={Login} />
                        <Route exact path="/" component={ApartmentContainer} />
                    </Switch>
                    </div>
                </Router>
                <FooterPage />
            </div>
        );
    }
}

export default App;
