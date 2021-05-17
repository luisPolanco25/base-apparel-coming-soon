import React, { useContext, useState } from 'react';
import './input.css';
import arrowIcon from '../../assets/icon-arrow.svg';
import errorIcon from '../../assets/icon-error.svg';
import validator from 'validator';
import Swal from 'sweetalert2';
import './swal2.css';
import { screenContext } from '../../context/ScreenContext';

export const Input = () => {

    const [inputValue, setinputValue] = useState('');
    const [isInputCorrect, setIsInputCorrect] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const screenWidth = useContext(screenContext);
    
    const handleInputChange = ({target}) => {
        setIsInputCorrect(true);
        setErrorMessage('');
        setinputValue(target.value);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (inputValue === '') {
            setErrorMessage('This field cannot be empty');
            setIsInputCorrect(false);
        } else if (!validator.isEmail(inputValue)) {
            setErrorMessage('Please provide a valid email');
            setIsInputCorrect(false);
        }

        if (validator.isEmail(inputValue)) {
            Swal.fire(
                'Good work!',
                'Your submission was succesfully sent!',
                'success'
                )
            setinputValue('');
        }

        
    }

    return (
        <>
            <form onSubmit={handleSubmitForm} >

                <input 
                    type="text" 
                    placeholder="Email Address"
                    value={inputValue}
                    onChange={handleInputChange}
                    style={(!isInputCorrect) ? {border: '2px solid hsl(0, 93%, 68%)'} : null}
                />

                
                <button 
                    type="submit"
                    style={(!isInputCorrect && screenWidth > 720) ? {marginTop: '1px'} : null}
                >
                    <img src={arrowIcon} alt="Arrow button" />
                </button>
                
                <p id="error-message">{errorMessage}</p>
                <img id="error-icon" src={errorIcon} alt="" style={(isInputCorrect) ? {display: 'none'} : null} />

            </form>
            
        </>
    )
}
