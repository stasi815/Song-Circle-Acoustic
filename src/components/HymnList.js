import React from 'react'
import Hymn from '../components/Hymn/Hymn'
import data from './collections.json'


// const hymns = data.hymns.map(({ name, chords, style }, i) => {
//   return (
//     <Hymn
//       id={i}
//       name={name}
//       chords={chords}
//       style={style}
//     />
//   )
// })



function HymnList() {
    return (
        <div>
          <Hymn 
            number="1"
            name="Hymn 1"
            chords="D A G"
            style="valsa"
          />
          <Hymn 
            number="1"
            name="Hymn 1"
            chords="D A G"
            style="valsa"
          />
          <Hymn />
          <Hymn />
        </div>
      )
}



// const songs = hymns.map((obj) => {
//   return obj.name
// })

// const songs = hymns.map((hymn) => {
//   const { number, name, chords, style } = hymn
//   return (
//     <div>
//       <div>{ number }. { name }</div>
//       <div>Guitar Chords: { chords }</div>
//       <div>Dance Style: { style }</div>
//     </div>
//   )
// })

// console.log(hymns)
// console.log(hinos)
// console.log(songs)


export default HymnList
