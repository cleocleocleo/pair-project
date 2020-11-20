import './Dogs.scss';
import axios from 'axios'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnotherOne from '../AnotherOne/AnotherOne';
import GoBack from '../GoBack/GoBack';

class Dogs extends Component {
    state = {
        dogImage: null
    };

    componentDidMount() {
        axios
            .get('https://random.dog/woof?include=jpg')
            .then( response => {
                console.log(response);
                this.setState({
                    dogImage: response.data
                });
            });
    };

    componentDidUpdate(prevProps) {
        if (prevProps.location.key !== this.props.location.key) {
            axios
            .get('https://random.dog/woof?include=jpg')
            .then( response => {
                this.setState({
                    dogImage: response.data
                });
            })
        }
    };

    render() {
        return (
            <div className="dogs">
                <Link to="/dogs" >
                    <AnotherOne />
                </Link>
                <div className="dogs__flex-container">
                    {this.state.dogImage &&
                        <div className="dogs__image-container">
                            <img className="dogs__image" src={`https://random.dog/${this.state.dogImage}`} alt="adorable doggie"/>
                        </div>
                    }
                    <div className="dogs__info">
                        <h1 className="dogs__header">About Dogs</h1>
                        <h4 className="dogs__description">The dog (Canis familiaris when considered a distinct species or Canis lupus familiaris when considered a subspecies of the wolf) is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids, and is the most widely abundant terrestrial carnivore. The dog and the extant gray wolf are sister taxa as modern wolves are not closely related to the wolves that were first domesticated, which implies that the direct ancestor of the dog is extinct. The dog was the first species to be domesticated, and has been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes.</h4>
                        <h4 className="dogs__description">
                        Their long association with humans has led dogs to be uniquely attuned to human behavior, and they can thrive on a starch-rich diet that would be inadequate for other canids. Dogs vary widely in shape, size, and colors. They perform many roles for humans, such as hunting, herding, pulling loads, protection, assisting police and military, companionship, and, more recently, aiding disabled people, and therapeutic roles. This influence on human society has given them the sobriquet of "man's best friend."
                        </h4>
                    </div>
                </div>
                <GoBack />
            </div>
        );
    };
};

export default Dogs;