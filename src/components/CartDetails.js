import { Component } from "react";

const styles = {
    cartDetails: {
        backgroundColor: '#FFF',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.1)',
        borderRadius: '5px',
        width: 300,
        right: 50,
    },

    ul: {
        margin: 0,
        padding: 0
    },

    product: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #AAA'
    },

    img: {
        width: 50,
        height: 32,
    }

}


export class CartDetails extends Component {
    render() {
        const { cart } = this.props;
        return (
            <div style={styles.cartDetails}>
                <ul style={styles.ul}>
                    {cart.map(item => 
                        <li key={item.name} style={styles.product}>
                            <img alt={item.name} src={item.img} style={styles.img}/>
                            {item.name} <span>{item.quantity}</span>
                        </li>)}
                </ul>
            </div>
        )
    }
}