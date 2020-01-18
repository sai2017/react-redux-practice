import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../action';

class App extends React.Component {
  render() {
    const props = this.props
    return (
      <>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </>
    )
  }
}

const mapStatetoProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStatetoProps, mapDispatchToProps)(App)
