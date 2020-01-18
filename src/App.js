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
  const users = [
    {name: "Sai", age: 29},
    {name: "Taro", age: 23},
    {name: "Onoda", age: 16},
    {name: "Kitayama"}
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

User.defaultProps = {
  age: 1
}

export default App;
