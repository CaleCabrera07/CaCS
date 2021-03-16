import React from 'react';
import '../styles/HeroSection.css';
import '../App.css';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className='hero-container'>
            {/* <video src='../assets/videos/video-2.mp4' autoPlay loop muted /> */}
            <h1>Do you want to play?</h1>
            <p>Let's play !</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    linkto='https://cacs.netlify.app/services'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    linkto='https://www.youtube.com/watch?v=5AacGoDKwfU&t=17s'
                    target='_blank'
                    //onClick={console.log('hey')}
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;
