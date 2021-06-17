import './App.css';
import * as React from 'react';
import { EXButton, JustDoIt } from './EXButton.js';
import { Fragment } from 'react';

export class Principal extends React.Component {
    constructor() {
        super()
        this.state = {
            ejer3: 'Welcome to the IT world!',
            ejer6text: "Here button.I called you"
        };
        this.callMe = this.callMe.bind(this);
    }

    componentDidMount() {
        this.setState({ ejer3: 'Already in!' }, () => {
            console.log("Change for exercise 3, done")
        })
    };

    callMe() {
        this.setState({ ejer3: 'Here button. I called you' }, () => {
            console.log("cambiado")
        })
    };


    render() {

        return (
            <Fragment>
                <div className="App" onClick={this.callMe}>
                    <EXButton name={'Listo para hacer click'}></EXButton>
                    <JustDoIt />
                </div>
                <div>
                    <h1>
                        {this.state.ejer3}
                    </h1>
                </div>
            </Fragment>
        );
    }
}
