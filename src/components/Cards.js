import React from 'react';
import '../styles/Cards.css';
import CardItem from './CardItem';

//Videos
import JeepDown from '../assets/videos/jeep.mp4';
import winpunches from '../assets/videos/win-punches.mp4';
import animaciongulag from '../assets/videos/animaciongulag.mp4';
import yone from '../assets/videos/yone.mp4';
import nidalee from '../assets/videos/nidalee.mp4';

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Plays!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={JeepDown}
                            text='Get out of the car |  WARZONE'
                            label='Cod'
                            path='/services'
                        />
                        <CardItem
                            src={yone}
                            text='Nobody loves Teemo'
                            label='LoL'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={animaciongulag}
                            text='Watch your back | WARZONE'
                            label='Cod'
                            path='/services'
                        />
                        <CardItem
                            src={nidalee}
                            text='One shot One kill'
                            label='Lol'
                            path='/services'
                        />
                        <CardItem
                            src={winpunches}
                            text='Punch to win | WARZONE'
                            label='Cod'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;
