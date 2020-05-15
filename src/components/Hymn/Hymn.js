import React from 'react';
import data from '../collections.json';
import { Link } from 'react-router-dom';


function Hymn(props) {

  // const { number, name, chords, style, id } = props
  const { id } = props.match.params // Location index
  const { images, title, person, hymns } = data[id]
  const hymnList = hymns.map((hymn) => {
    const { number, name, chords, style } = hymn
    return (
      <div>
        <h1>
          <Link to={`/details/${id}/hymn`}>
          {number}. {name}
          </Link>
        </h1>
      </div>
    )
})

return (
  <div>{hymnList}</div>
)
}



// expected output: properties of each hymn (number, name, chords, style) from within the 


export default Hymn

// import { Link } from 'react-router-dom';
// import data from '../collections.json';


// function Hymn(props) {
//   const { id } = props.match.params
//   const { number, name, chords, style } = data[id]
//   return (
//       <div className="Hymn">
//           <h1>
//               <Link to={`/hymn/${id}`}>
//                   {title}
//               </Link>
//           </h1>
//           <div>{name}</div>
//       </div>
//   )
// }
// function Hymn(props) {
// const { number, name, chords, style } = hymn
// const { id } = props.match.params // Location index
// const { images, title, person, hymns } = data[id]

// const hymnList = hymns.map((hymn) => {
//   const { number, name, chords, style } = hymn
//   return (
//     <div>
//       <div>{ number }. { name }</div>
//       <div>Guitar Chords: { chords }</div>
//       <div>Dance Style: { style }</div>
//     </div>
//   )
// })

// }

// export default Hymn