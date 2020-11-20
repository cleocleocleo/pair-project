import './Cats.scss';
import axios from 'axios'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cats extends Component {
    state = {
        catImage: null
    };

    componentDidMount() {
        axios
            .get('https://api.thecatapi.com/v1/images/search?size=full&api_key=8afcd043-51f0-4625-b0be-215c05c6d4b3')
            .then( response => {
                this.setState({
                    catImage: response.data[0].url
                });
            })
    };

    render() {
        return (
            <div>
                <h1>Meow</h1>
                {this.state.catImage &&
                <img src={this.state.catImage} alt="adorable kitty"/>}

                <Link to="/" ><button>Go Back</button></Link>
            </div>
        );
    };
};

export default Cats;