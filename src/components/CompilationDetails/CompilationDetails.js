import React from 'react';
import './CompilationDetails.css'
import data from '../collections.json';

function CompilationDetails(props) {
  const { id } = props.match.params // Location index
  const { images, title, person, hymns } = data[id]
  const hymnList = hymns.map((hymn) => {
    const { number, name, chords, style } = hymn
    return (
      <div>
        <div>{ number }. { name }</div>
        <div>Guitar Chords: { chords }</div>
        <div>Dance Style: { style }</div>
      </div>
    )
  })

  return (
    <div className='comp-details'>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} alt="hello" />
      </div>

      <div>
        <h1>{ title }</h1>
        <div className="name">{ person }</div>
        <div>{ hymnList }</div>
      </div>
    </div>
  )
}

export default CompilationDetails