import React from 'react';
import Yellow from './Yellow';

class Green extends React.Component {
  state = {

  }

  // constructor() {
  //   super()

  // }

  render () {
    return (
      <div className="component green">
        <h1>GREEN</h1>
        <h2>{this.props.valueIron}</h2>
        <ul>
            <li><Yellow valueIron={this.props.valueIron}></Yellow></li>
            <li><Yellow></Yellow></li>
            <li><Yellow></Yellow></li>
            <li><Yellow></Yellow></li>
        </ul>
      </div>
    )
  }
}

export default Green;
