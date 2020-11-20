import './Cats.scss';
import axios from 'axios'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnotherOne from '../AnotherOne/AnotherOne';
import GoBack from '../GoBack/GoBack';

class Cats extends Component {
    state = {
        catImage: null
    };

    componentDidMount() {
        axios
            .get('https://api.thecatapi.com/v1/images/search?size=full&api_key=8afcd043-51f0-4625-b0be-215c05c6d4b3')
            .then( response => {
                console.log(response.data);
                this.setState({
                    catImage: response.data[0].url,
                });
            })
    };

    componentDidUpdate(prevProps) {
        if (prevProps.location.key !== this.props.location.key) {
            axios
            .get('https://api.thecatapi.com/v1/images/search?size=full&api_key=8afcd043-51f0-4625-b0be-215c05c6d4b3')
            .then( response => {
                this.setState({
                    catImage: response.data[0].url,
                });
            })
        }
    };

    render() {
        return (
            <div className="cats">
                <Link to="/cats" >
                    <AnotherOne />
                </Link>
                <div className="cats__flex-container">
                    {this.state.catImage &&
                        <div className="cats__image-container">
                            <img className="cats__image" src={this.state.catImage} alt="adorable kitty"/>
                        </div>
                    }
                    <div className="cats__info">
                        <h1 className="cats__header">About Cats</h1>
                        <h4 className="cats__description">The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact. Domestic cats are valued by humans for companionship and their ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.</h4>
                        <h4 className="cats__description">
                        The cat is similar in anatomy to the other felid species: it has a strong flexible body, quick reflexes, sharp teeth and retractable claws adapted to killing small prey. Its night vision and sense of smell are well developed. Cat communication includes vocalizations like meowing, purring, trilling, hissing, growling and grunting as well as cat-specific body language. A predator that is most active at dawn and dusk, the cat is a solitary hunter but a social species. It can hear sounds too faint or too high in frequency for human ears, such as those made by mice and other small mammals. It secretes and perceives pheromones.
                        </h4>
                    </div>
                </div>
                <GoBack />
            </div>
        );
    };
};

export default Cats;