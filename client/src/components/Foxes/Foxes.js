import './Foxes.scss';
import axios from 'axios'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnotherOne from '../AnotherOne/AnotherOne';
import GoBack from '../GoBack/GoBack';

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

    componentDidUpdate(prevProps) {
        if (prevProps.location.key !== this.props.location.key) {
            axios
            .get('https://randomfox.ca/floof/')
            .then( response => {
                console.log(response.data.image)
                this.setState({
                    foxImage: response.data.image
                });
            });
        }
    };

    render() {
        return (
            <div className="foxes">
            <Link to="/foxes" >
                <AnotherOne />
            </Link>
            <div className="foxes__flex-container">
                {this.state.foxImage &&
                    <div className="foxes__image-container">
                        <img className="foxes__image" src={this.state.foxImage} alt="adorable fox"/>
                    </div>
                }
                <div className="foxes__info">
                    <h1 className="foxes__header">About Foxes</h1>
                    <h4 className="foxes__description">Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. Foxes have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush).</h4>
                    <h4 className="foxes__description">
                    Twelve species belong to the monophyletic "true foxes" group of genus Vulpes. Approximately another 25 current or extinct species are always or sometimes called foxes; these foxes are either part of the paraphyletic group of the South American foxes, or of the outlying group, which consists of the bat-eared fox, gray fox, and island fox. Foxes live on every continent except Antarctica. By far the most common and widespread species of fox is the red fox (Vulpes vulpes) with about 47 recognized subspecies. The global distribution of foxes, together with their widespread reputation for cunning, has contributed to their prominence in popular culture and folklore in many societies around the world. The hunting of foxes with packs of hounds, long an established pursuit in Europe, especially in the British Isles, was exported by European settlers to various parts of the New World.
                    </h4>
                </div>
            </div>
            <GoBack />
        </div>
        );
    };
};

export default Foxes;