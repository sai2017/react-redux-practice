import React from 'react';

// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("Hi!")}} />
//       </>
//     );  
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return (
    <div>wow!</div>
  )
}

export default App;
