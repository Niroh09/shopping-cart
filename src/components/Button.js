import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#FFF',
        cursor: 'pointer',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px'
    }
};

export class Button extends Component {
    render(){
        return (
            <button style={styles.button} {...this.props}/>
        )
    }
}
