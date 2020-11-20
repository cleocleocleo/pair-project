import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import catImg from '../assets/images/home-cat.jpg';
import foxImg from '../assets/images/home-fox.jpg';
import dogImg from '../assets/images/home-dog.jpg';
import pawPrint from '../assets/images/paw-print.png';

const Home = () => {
    return (
        <div className="home">
            <p className="home__description">Need a break? Look at some cute animals!<br/> Or don't, whatever, it's your life.</p>
            <div className="home__img-container">
                <Link to="/cats" ><div className="home__card">
                    <img className="home__img" src={catImg} alt="cat img"/>
                    <div className="home__text-wrapper">
                        <h2 className="home__wrapper-title">KITTIES</h2>
                    </div>
                </div></Link>
                <Link to="/dogs"><div className="home__card">
                    <img className="home__img" src={dogImg} alt="dog img"/>
                    <div className="home__text-wrapper-dog">
                        <h2 className="home__wrapper-title">DOGGIES</h2>
                    </div>
                </div></Link>
                <Link to="/foxes"><div className="home__card">
                    <img className="home__img" src={foxImg} alt="fox img"/>
                    <div className="home__text-wrapper-fox">
                        <h2 className="home__wrapper-title">FOXXIES</h2>
                    </div>
                </div></Link>
            </div>
            <img className="paw-print1" src={pawPrint} alt="paw print"/>
            <img className="paw-print2" src={pawPrint} alt="paw print"/>
        </div>
    );
};

export default Home;