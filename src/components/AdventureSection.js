import React from 'react'
import { Button } from './Button'
import '../App.css';
import './AdventureSection.css';
//import video from '../assets/videos/Universe.mp4';


function AdventureSection() {
    return (
        <div className='adventure-container'>
            {/* <video src={video} autoPlay loop muted /> */}
            
            <div className='MainHeading'>
                <h1 className='heading'> ADVENTURE AWAITS </h1>
            <p className='ready'> Ready to go? </p>
            </div>

            <div className="adv-btns">
                <Button classNames="btns" buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    SIGN IN
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    CREATE AN ACCOUNT
                </Button>
            </div> 
            
        </div>
    )
}

export default AdventureSection
