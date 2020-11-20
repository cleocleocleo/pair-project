import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Need a break from coding? Clear your mind with some cute animals!</h1>
            <h2>Choose a type to get started:</h2>
            <Link to="/cats" >🐱 Cats</Link>
            <Link to="/dogs" >🐶 Dogs</Link> 
            <Link to="/foxes" >🦊 Foxes</Link> 
        </div>
    );
};

export default Home;