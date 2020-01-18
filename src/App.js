import React from 'react';
import { setState } from 'expect/build/jestMatchersObject';

const App = () => (<Counter />)


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }
  handleClickPlus() {
    this.setState({count: this.state.count + 1});
  }

  handleClickMinus() {
    this.setState({count: this.state.count -1 });
  }
  render() {
    return (
      <>
        <div>counter: {this.state.count}</div>
        <button onClick={() => {this.handleClickPlus()}}>+1</button>
        <button onClick={() => {this.handleClickMinus()}}>-1</button>
      </>
    )
  }
}

export default App;
