import React from 'react';
import { BsFillBasketFill } from 'react-icons/bs';
import {useSelector} from 'react-redux';

function Navbar() {

const {quantity}=useSelector((store)=>store.cart);

    return (
        <nav>
            <div className='navbar'>
                <h3>Kurs Uygulaması</h3>
                <div className='navDiv'>
                    <div className='itemsDiv'>
                        <p>{quantity}</p>
                    </div>
                    <BsFillBasketFill style={{
    position: 'absolute',
    bottom: '12px',
    right: '11px'
}} />
                </div>
            </div>
        </nav>
    );
}
export default Navbar;