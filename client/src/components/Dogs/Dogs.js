import './Dogs.scss';
import axios from 'axios'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dogs extends Component {
    state = {
        dogImage: null
    };

    componentDidMount() {
        axios
            .get('https://random.dog/woof?include=jpg')
            .then( response => {
                console.log(response.data)
                this.setState({
                    dogImage: response.data
                });
            });
    };

    render() {
        return (
            <div>
                <h1>Woof</h1>
                {this.state.dogImage &&
                <img src={`https://random.dog/${this.state.dogImage}`} alt="adorable pupper"/>}

                <Link to="/" ><button>Go Back</button></Link>
            </div>
        );
    };
};

export default Dogs;