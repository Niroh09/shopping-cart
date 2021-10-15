import { Component } from "react";
import { BubbleAlert } from "./BubbleAlert.js";
import { CartDetails } from './CartDetails';

const styles = {
    cart: {
        backgroundColor: '#359A2C',
        color: '#FFF',
        border: 'none',
        borderRadius: '15px',
        padding: '15px',
        cursor: 'pointer'
    },

    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}

export class Cart extends Component {
    render() {
        const { cart, cartIsVisible, showCart } = this.props;
        const quantity = cart.reduce((acc, el) => acc + el.quantity, 0) 
        return (
            <div >
                <span style={styles.bubble}>
                    {quantity !==0
                        ? <BubbleAlert value={quantity}/>
                        : null }
                    
                </span>
                <button onClick={showCart} style={styles.cart}>
                    Cart
                </button>
                {cartIsVisible ? <CartDetails cart={cart}/> : null}                
            </div>
        )
    }
}