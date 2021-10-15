import { Component } from "react";

const styles = {
    layout: {
        backgroundColor: '#FFF',
        color: '#0A283E',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    container: {
        width: '1200px'
    }
};

export class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}