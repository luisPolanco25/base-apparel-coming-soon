import React, { useContext } from 'react';
import './template.css';
import logo from '../../assets/logo.svg';
import girlMobile from '../../assets/hero-mobile.jpg';
import { Input } from '../Input/Input';
import { screenContext } from '../../context/ScreenContext';



export const Template = () => {

    const screenWidth = useContext(screenContext);

    return (
        <>
            <div id="main-content">

                <div id="logo">
                    <img src={logo} alt="Base Apparel's logo" />
                </div>

                {
                    (screenWidth <= 720)
                    &&
                    <img id="picture" src={girlMobile} alt="Girl posing" />
                }

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
