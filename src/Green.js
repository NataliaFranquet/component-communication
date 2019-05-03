import React from 'react';
import Yellow from './Yellow';

class Green extends React.Component {
  state = {
    firstYellowBoxVisible : true
  }

  // constructor() {
  //   super()

  // }

  // communicateWithParent() {
  //   console.log("Communication happens!")
  //   this.setState({
  //     firstYellowBoxVisible: false
  //   })
  // }

  render () {
    return (
      <div className="component green">
        <h1>GREEN</h1>
        <h2>{this.props.valueIron}</h2>
        <ul>
            {
              this.state.firstYellowBoxVisible ? <li><Yellow communicateWithParent={(random) => this.props.communicateWithParent(random * 10)} valueIron={this.props.valueIron}></Yellow></li> : null
            }
            <li><Yellow></Yellow></li>
            <li><Yellow></Yellow></li>
            <li><Yellow></Yellow></li>
        </ul>
      </div>
    )
  }
}

export default Green;
