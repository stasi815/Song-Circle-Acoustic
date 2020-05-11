import React from 'react';
import data from './collections.json';

function CompilationDetails(props) {
  const { id } = props.match.params // Location index
  const { images, title, person } = data[id]

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} />
      </div>

      <div>
        <h1>{ title }</h1>
        <p>{ person }</p>
      </div>

    </div>
  )
}

export default CompilationDetails