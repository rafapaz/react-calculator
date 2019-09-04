import React from 'react'
//import { Router, Route, Redirect } from 'react-router'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Calculator from './Calculator';
import About from './About';
import Erro404 from './Erro404';

class MyRoute extends React.Component {
    render() {
        return (            
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact={true} component={Calculator} />
                        <Route path='/about' component={About} />
                        <Route path="*" component={Erro404} />
                    </Switch>
                </BrowserRouter>
        );
    }
}

export default MyRoute;