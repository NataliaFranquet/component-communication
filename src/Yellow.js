import React from 'react';

class Yellow extends React.Component {
  state = {

  }

  // constructor() {
  //   super()

  // }

  render () {
    return (
      <div className="component yellow">
        <h1>Yellow</h1>
        <h2>{this.props.valueIron}</h2>
      </div>
    )
  }
}

export default Yellow;
