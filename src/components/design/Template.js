import React from 'react';
import './template.css';
import logo from '../../assets/logo.svg';
import { Input } from '../Input/Input';



export const Template = () => {
    return (
        <>
            <div id="main-content">

                <div id="logo">
                    <img src={logo} alt="Base Apparel's logo" />
                </div>

                <div id="title">
                    <h1><span>We're</span> coming soon</h1>
                </div>

                <div id="main-text">
                    <p>
                    Hello fellow shoppers! We're currently building our new fashion store. 
                    Add your email below to stay up-to-date with announcements and our launch deals.
                    </p>
                </div>

                <Input />

            </div>

            <div id="main-image"></div>
        </>
    )
}
