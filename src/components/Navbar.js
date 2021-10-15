import { Component } from "react";
import { Logo } from './Logo';
import { Cart } from './Cart';

const styles = {
    navbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100px',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0, 0, 0, 0.1)'
    }
}

export class Navbar extends Component {
    render() {
        const { cart, cartIsVisible, showCart } = this.props;
        return (
            <nav style={styles.navbar}>
                <Logo/>
                <Cart
                    cart={cart}
                    cartIsVisible={cartIsVisible}
                    showCart={showCart}
                    />
            </nav>
        )
    }
}