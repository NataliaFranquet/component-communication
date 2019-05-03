import React from 'react';
import Green from './Green';

class Aquamarine extends React.Component {
  state = {

  }

  // constructor() {
  //   super()

  // }

  render () {
    return (
      <div className="component aquamarine">
        <h1>Aquamarine</h1>
        <h2>{this.props.valueIron}</h2>
        <Green valueIron={this.props.valueIron} communicateWithParent={(randomTimesTen) => this.props.communicateWithParent(randomTimesTen)}></Green>
        <Green></Green>
      </div>
    )
  }
}

export default Aquamarine;
