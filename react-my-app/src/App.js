import React from 'react';
import Square from './components/Square'
import PropTypesExample from './components/PropTypesExample'
import KeysTest from './components/KeysTest'
import RouterApp from './components/Router-test/RouterApp'
import One from './components/HOCs/One';
import SongsList from './components/SongsList';
import UseStateOne from './components/Hooks/UseStateOne';
import UseReducerOne from './components/Hooks/UseReducerOne';
import UseEffectOne from './components/Hooks/UseEffectOne'
import UseCallbackOne from './components/Hooks/UseCallbackOne'
import UseContextOne from './components/Hooks/UseContextOne'
import UseRefOne from './components/Hooks/UseRefOne'



// export default function App() {
//   return (
//     <div>
//       App here
//       <Square side = {25} />
//       <PropTypesExample />
//       <KeysTest />
//       <One />     
//     </div>
//   )
// }


// export default function App(props) {
//   return (
//     <div>
//        <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//        </ul>
//        {props.children}
//     </div>
//  )
// }


// Use of redux

// export default function App() {
//   return (
//     <div>
//       <SongsList />
//     </div>
//   )
// }


// Use of Hooks

export default function App() {
  return (
    <div>
      <UseStateOne />  <br />
      <UseReducerOne />  <br />
      <UseEffectOne />  <br />
      <UseCallbackOne />  <br />
      <UseContextOne /> <br />
      <UseRefOne />
    </div>
  )
}