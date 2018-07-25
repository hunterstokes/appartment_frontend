import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import '../css/App.css';
import {getApartments} from '../api/index.js';
import Login from '../components/Login';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import ApartmentContainer  from '../containers/apartments.js';
import AuthService from '../sevices/AuthService';

const Auth = new AuthService()


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apartments: []
        }
    }

    handleLogout(){ // <- Remove local storage, and redirect the user
        Auth.logout()
        this.props.history.replace('/login');
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
                <Footer />
            </div>
        );
    }
}

export default App;
