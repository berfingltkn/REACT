import React from 'react';
import { Link } from 'react-router-dom';
import BurgerBackImage from '../assets/burger-background.jpg';
import '../styles/Home.css';

export function Home() {
    return (
        <div
            className='mainPage'
            style={{ backgroundImage: `url(${BurgerBackImage})` }}>
            <div className='order'>
                <Link to="/menu">
                    <button>Sipariş Ver</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;