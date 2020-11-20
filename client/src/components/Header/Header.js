import './Header.scss';
import {Link} from 'react-router-dom';


function Header() {
    return (
        <header className="header">
            <Link to="/" ><h2 className="header__title">Five Minute Break</h2></Link>
            <div className="header__link-container">
                <Link to="/cats" ><p className="header__link-cat">Cats</p></Link>
                <Link to="/dogs" ><p className="header__link-dog">Dogs</p></Link>
                <Link to="/foxes" ><p className="header__link-fox">Foxes</p></Link>
            </div>
        </header>
    )}

export default Header;