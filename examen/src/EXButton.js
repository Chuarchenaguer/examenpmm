import './EXButton.css';
import * as React from 'react';

export const EXButton = (props) => {

    return (
        <button type={'submit'}>{props.name}</button>
        
    );
}

export const JustDoIt = () => {
    console.log("Exercise 4 done!");
    return null;
};