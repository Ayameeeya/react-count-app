import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
        <div>count:{props.value}</div>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
      </React.Fragment>
    );
  }
}

// stateから必要な情報をコンポーネントにマッピングする関数
const mapStateToProps = state => ({ value: state.count.value })

// dispatch関数をコンポーネントにマッピングする関数
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

// こんな書き方もある↓
// const mapDispatchToProps = ({ increment, decrement })

// stateとacitonをコンポーネントに関連づける
export default connect(mapStateToProps, mapDispatchToProps)(App)
