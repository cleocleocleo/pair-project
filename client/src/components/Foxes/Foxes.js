import './Foxes.scss';
import axios from 'axios'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Foxes extends Component {
    state = {
        foxImage: null
    };

    componentDidMount() {
        axios
            .get('https://randomfox.ca/floof/')
            .then( response => {
                console.log(response.data.image)
                this.setState({
                    foxImage: response.data.image
                });
            });
    };

    render() {
        return (
            <div>
                <h1>The quick brown fox jumps over the lazy dog...</h1>
                {this.state.foxImage &&
                <img src={this.state.foxImage} alt="adorable fox"/>}

                <Link to="/" ><button>Go Back</button></Link>
            </div>
        );
    };
};

export default Foxes;