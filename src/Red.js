import React from 'react';
import Aquamarine from './Aquamarine';

class Red extends React.Component {
  state = {
    value: 10
  }

  // constructor() {
  //   super()

  // }

  changeState() {
    this.setState({
      value: 20
    })
  }

  render () {
    return (
      <div className="component red">
        <h1>RED</h1>
        <button onClick={() => this.changeState()}>Change state</button>
        <h2>{this.state.value}</h2>
        <Aquamarine valueIron={this.state.value}></Aquamarine>
        <Aquamarine></Aquamarine>
      </div>
    )
  }
}

export default Red;
