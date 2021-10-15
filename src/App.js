import { Component } from 'react';
import { Products } from './components/Products';
import { Layout } from './components/Layout';
import { Title } from './components/Title';
import { Navbar } from './components/Navbar';

class App extends Component {
  state = {
    products: [
      { name: 'Tomato', price: 1500, img:'/products/tomate.jpg'},
      { name: 'Pea', price: 2500, img: '/products/arbejas.jpg'},
      { name: 'Lettuce', price: 500, img:'/products/lechuga.jpg'},
    ],
    cart: [],
    cartIsVisible: false,
  }

  addToCart = (product) => {
    const { cart } = this.state;
    if(cart.find(item => item.name === product.name)){
      const newCart = cart.map(
        item => item.name === product.name 
        ? ({
          ...item,
          quantity: item.quantity + 1
        })
        : item)
        return this.setState({cart: newCart})
    }

    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1,
      })
    })
  }

  showCart = () => {
    if(!this.state.cart.length){
      return
    }
    this.setState({ cartIsVisible: !this.state.cartIsVisible })
  }

  render() {
    const { cartIsVisible } = this.state
    return (
      <div>
        <Navbar
          cart={this.state.cart}
          cartIsVisible={cartIsVisible}
          showCart={this.showCart}
          />
        <Layout>
          <Title />
          <Products
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}


export default App;
