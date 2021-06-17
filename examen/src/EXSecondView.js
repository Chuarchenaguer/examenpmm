import * as React from 'react';
import { Fragment } from 'react';

import './EXSecondView.css'

export class EXSecondView extends React.Component{

    render() {
        return (
            <Fragment>
                <div className={'second-view-container'}>
                    <h1>Welcome to the second view!</h1>
                    <h2>Well done!</h2>
                </div>
                
            </Fragment>
        )
    }

}
