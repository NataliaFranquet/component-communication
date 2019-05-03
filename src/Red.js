import React from 'react';
import Aquamarine from './Aquamarine';

class Red extends React.Component {
  state = {
    value: 10
  }

  // constructor() {
  //   super()

  // }

  communicateWithParent() {
    console.log("Communication with RED happens!")

    this.setState({
      value: 1000
    })
  }

  changeState() {
    this.setState({
      value: 20
    })
  }

  render () {
    return (
      <div className="component red">
        <h1>RED</h1>
        <button onClick={() => this.changeState()}>Propagate state from RED to YELLOW (descending)</button>
        <h2>{this.state.value}</h2>
        <Aquamarine valueIron={this.state.value} communicateWithParent={() => this.communicateWithParent()}></Aquamarine>
        <Aquamarine></Aquamarine>
      </div>
    )
  }
}

export default Red;
