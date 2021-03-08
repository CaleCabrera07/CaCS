import React from 'react';
import '../styles/Cards.css';
import CardItem from './CardItem';

//Images
import dinoBlanco from '../assets/images/dinoBlanco.png';
import dinoRosa from '../assets/images/dinorosa.png';
import dinoVerde from '../assets/images/dinoverde.png';
import dinoNegro from '../assets/images/dinoNegro.png';
import dinoRayado from '../assets/images/dinoRayado.png';

const Cards = () => {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Plays!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={dinoBlanco}
                            text='Amazing Cod Play'
                            label='Cod'
                            path='/services'
                        />
                        <CardItem
                            src={dinoVerde}
                            text='Amazing LoL Play'
                            label='LoL'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={dinoNegro}
                            text='Amazing Cod Play'
                            label='Cod'
                            path='/services'
                        />
                        <CardItem
                            src={dinoRosa}
                            text='Amazing LoL Play'
                            label='Lol'
                            path='/products'
                        />
                        <CardItem
                            src={dinoRayado}
                            text='Amazing Cod Play'
                            label='Cod'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;
