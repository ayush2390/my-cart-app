import React, { useContext } from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

function CartContainer() {
    const {cart, amount} = useGlobalContext()
    if(cart.length === 0){
        return(
            <section className='cart'>
                <header>
                    <h2>Your wishlist</h2>
                    <h4 className='empty-cart'>is current empty</h4>
                </header>
            </section>
        )
    }
  return (
    <section className='cart'>
      <header>
          <h2>
              Your wishlist
          </h2>
      </header>
      <div>
        {cart.map((item) => {
            return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
          <hr />
          <div className='cart-total'>
              <h4>total <span>$ {amount}</span></h4>
          </div>
          <button className='btn clear-btn' onClick={() => console.log('Clear car')}>Clear cart</button>
      </footer>
    </section>
  )
}

export default CartContainer
