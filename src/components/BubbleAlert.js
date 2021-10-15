import { Component } from "react";

const styles = {
    bubbleAlert: {
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        padding: '2px 10px',
        fontSize: '0.9rem',
        color: '#FFF',
        width: '20px',
    }
};

export class BubbleAlert extends Component {
    getNumber(n) {
        if(!n) {return ' '}
        return n > 9 ? '9+' : n;
    }

    render() {
        const { value } = this.props
        return (
            <span style={styles.bubbleAlert}>
                {this.getNumber(value)}
            </span>
        )
    }
}