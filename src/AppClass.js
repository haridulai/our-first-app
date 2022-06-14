import React, { Component } from 'react'

// updating state can be asynchronus
// can be triggered and be outsynced with another action on the page
export default class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            count: 0,

        }
    }
    
    increment = () => {
        this.setState((previousState) => ({
            count: previousState.count + 1
        }))
    }
    decrement = () => {
        this.setState((previousState) => ({
            count: previousState.count - 1
        }))
    }


  render() {
    return (
    <div className="App">
      <h1 className="app__title">Welcome to my counter app</h1>
      <p>the count is {this.state.count}</p>
      <button onClick={this.decrement}>-</button>
      <button onClick={this.increment}>+</button>
    </div>
    )
  }
}
