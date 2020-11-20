import './AnotherOne.scss';
import khalid from '../../assets/images/another.png';

const AnotherOne = props => {
    return (
        <img className="another-one" src={khalid} alt="dj khalid" onClick={props.handleRefresh}/>
    );
};

export default AnotherOne;