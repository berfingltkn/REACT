import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import CourseItem from './CourseItem';
import { clearCart } from '../control/cartSlice';

export default function CourseList() {
    const dispatch=useDispatch();
    const {cartItems,quantity,total}=useSelector((store)=>store.cart);
  return (
    <>
  {quantity<1 ?(
    <section className='cart'>
    <header>
        <h2>Sepetim</h2>
        <h2>Boş</h2>
    </header>
    </section>
    
  ):(
<section className='cart'>
    <header>
        <h2>Sepetim</h2>
    </header>
    <div>
        {cartItems.map((item)=>{

            return <CourseItem key={item.id} {...item} />;
        })}
    </div>

    <footer>
        <hr />
        <div>
            <h4>
                Toplam Tutar <span>{total} $</span>
            </h4>
        </div>
        <button className='cartClearButton' onClick={()=>dispatch(clearCart())}>Temizle</button>
    </footer>
</section>

  )}
  </>
  );
}
