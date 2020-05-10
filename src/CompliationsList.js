import React from 'react';
import Compilation from './Compilation';
import './CompilationsList.css';
import data from './collections.json';

const compilations = data.map((obj) => {
    return (
    <Compilation
        title={obj.title}
        person={obj.person}
        image={obj.images[0]}
    />
    )
})

function CompilationsList() {
    return(
        <div className="CompilationsList">
            { compilations }
        </div>
    )
}

export default CompilationsList
