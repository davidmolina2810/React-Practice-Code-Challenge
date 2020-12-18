import React, { Component } from 'react'

export default class WalletForm extends Component {
  state = {
    amount: ''
  }

  handleChange = (e) => {
    this.setState({ amount: e.target.value })
  }

  render() {
    return(
      <div className='add-money-form'>
        <h3>Add Money to Wallet</h3>
        <form onSubmit={(e) => this.props.addMoney(e, this.state.amount)}>
          <label>Amount: </label>
          <input type='text' onChange={this.handleChange} ></input>
          <input type='submit' value="Add Money"></input>
        </form>
      </div>
    )
  }
}