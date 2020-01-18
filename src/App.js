import React from 'react';
import propTypes from 'prop-types';

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
  const users = [
    {name: "Sai", age: 29},
    {name: "Taro", age: 23},
    {name: "Onoda", age: 16},
    {name: "Kitayama", age: 22}
  ];
  return (
    <div>
      {users.map((user, index) => {
        return <User name={user.name} age={user.age} key={index} />
      })}
    </div>
  )
}

const User = (props) => {
  return (
    <div>Hi! I am {props.name} and {props.age} yaers old.</div>
  )
}

User.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired
}

export default App;
