import './App.css';
import * as React from 'react';
import { EXButton } from './EXButton.js';
import { Fragment } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { EXSecondView } from './EXSecondView.js';
import { Principal } from './Principal.js';


export class App extends React.Component {


    render() {

        return (
            <Fragment>
                <ul>
                    <li>
                        <NavLink to={'/first'} activeClassName={'menu-active'}>Principal</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/second'} activeClassName={'menu-active'}>EXSecondView</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path={'/second'}>
                        <EXSecondView />
                    </Route>
                    <Route path={'/first'}>
                        <Principal />
                    </Route>
                </Switch>
            </Fragment>
        );
    }
}

export default App;
