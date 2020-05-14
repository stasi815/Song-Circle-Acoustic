import React from 'react';
import './Compilation.css';
import { Link } from 'react-router-dom';
// import data from '../collections.json';


function Compilation(props) {
    const { title, person, image, id } = props
    return (
        <div className="Compilation">
            <Link to={`/details/${id}`}>
                <img src={`${process.env.PUBLIC_URL}/images/${image}`} width='auto' height='auto' alt='hello'/>
            </Link>
            <h1>
                <Link to={`/details/${id}`}>
                    {title}
                </Link>
            </h1>
            <div>{person}</div>
        </div>
    )
}

export default Compilation