import React from 'react';
import './Compilation.css';
import data from './collections.json';


function Compilation(props) {
    const { title, person, image } = props
    return (
        <div className="Compilation">
            <img src={`${process.env.PUBLIC_URL}images/${image}`} width='auto' height='auto' alt='alt image'/>
            <h1>{title}</h1>
            <div>{person}</div>
        </div>
    )
}

export default Compilation