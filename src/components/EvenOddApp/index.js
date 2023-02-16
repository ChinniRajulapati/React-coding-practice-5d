import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {text: 0, reference: 'Even'}

  onIncrement = () => {
    this.setState(() => {
      const number = parseInt(Math.random() * 100)
      if (number % 2 === 0) {
        return {text: number, reference: 'Even'}
      }
      return {text: number, reference: 'Odd'}
    })
  }

  render() {
    const {text, reference} = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="count-heading">Count {text}</h1>
          <p className="count-paragraph">Count is {reference}</p>

          <button onClick={this.onIncrement} className="btn">
            Increment
          </button>
          <p className="random-number">
            *Increase By random number between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
