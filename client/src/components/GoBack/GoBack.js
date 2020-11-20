import './GoBack.scss';
import { Link } from 'react-router-dom';
import paw from '../../assets/icons/paw.svg';

const GoBack = () => {
    return (
        <Link to="/" >
            <div className="go-back">
                <div className="go-back__container">
                    <img className="go-back__image" src={paw} alt="paw print"/>
                    <h5 className="go-back__text">go back</h5>
                </div>
            </div>
        </Link>
    );
};

export default GoBack;