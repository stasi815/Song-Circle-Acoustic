import React from 'react';
import data from '../collections.json';
import { Link } from 'react-router-dom';


function Hymn(props) {
  const { id } = props.match.params // Location index
  const { images, title, person, hymns } = data[id]
  const hymnList = hymns.map((hymn) => {
    const { number, name, chords, style } = hymn
    return (
      <div>
        <Link to={`/${id}/${name}`}>
          <div>{ number }. { name }</div>
        </Link>
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

export default Hymn
