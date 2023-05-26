import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  render() {
    const {count} = this.state
    return (
      <div className="bg-counter">
        <h1 className="head">
          The Button has been clicked<span className="count">{count}</span>times
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <button onClick={this.onIncrement()} className="button" type="submit">
          Click Me!
        </button>
      </div>
    )
  }
}

// class ClickCounter extends Component {
//   state = {count: 0}

//   onIncrement = () => {
//     this.setState(prevState => prevState.count + 1)
//   }

//   render() {
//     const {count} = this.state
//     return (
//       <div className="bg-counter">
//         <h1 className="head">
//           The Button has been clicked<span className="count">{count}</span>times
//         </h1>
//         <p className="para">Click the button to increase the count!</p>
//         <button onClick={this.onIncrement()} className="button" type="submit">
//           Click Me!
//         </button>
//       </div>
//     )
//   }
// }

export default ClickCounter
