import React from 'react';
import './Home.css';
import DropDown from '../DropDown/DropDown';

export default function Home(props) {
    return(
        <div className="container">
            Here we have a home page
            <DropDown />
        </div>
    )
}