import React, { Component } from 'react';
import './CompilationsList.css'
import Compilation from '../Compilation/Compilation';
import data from '../collections.json';

const compilations = data.map(({ title, person, images }, i) => {
    return (
    <Compilation
        id={i}
        key={title}
        title={title}
        person={person}
        image={images[0]}
    />
    )
})

class CompilationsList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="CompilationsList">
                { compilations }
            </div>
        )
    }
}

export default CompilationsList;
