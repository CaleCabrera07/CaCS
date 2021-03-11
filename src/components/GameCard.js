import React from 'react';
import '../App.css';

//game icons
import lolIcon from '../assets/images/lol.png';
import codIcon from '../assets/images/cod.png';

//Serives = Gaming
const GameCard = () => {
    return (
        <>
            <div className='container__gaming'>
                <div className='box__gaming info'>
                    <img src={lolIcon} alt='lol icon' />
                    <h3>League Of Legends</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur nihil, aliquam non dolor numquam vero.
                    </p>
                </div>
                <div className='box__gaming gameplay'>
                    <img src='' alt='' />
                </div>
                <div className='box__gaming info'>
                    <img src={codIcon} alt='cod icon' />
                    <h3>Call of Duty</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur nihil, aliquam non dolor numquam vero.
                    </p>
                </div>
            </div>
        </>
    );
};

export default GameCard;
