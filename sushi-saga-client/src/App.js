import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import WalletForm from './components/WalletForm'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    start: 0,
    end: 4,
    eaten: [],
    wallet: 100
  }

  componentDidMount() {
    fetch(API)
    .then( res => res.json() )
    .then( sushis => this.setState({ 
      sushis: sushis
    }))
  }

  more = () => {
    if (this.state.end === 100) {
      this.setState({
        start: 0,
        end: 4
      })
    } else {
      this.setState({ 
        start: this.state.start + 4,
        end: this.state.end + 4
      })
    }
  }

  eat = (sushi) => {
    if (this.state.wallet >= sushi.price) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        wallet: this.state.wallet - sushi.price
      })
    }
  }

  addMoney = (e, amount) => {
    e.preventDefault()
    this.setState({ wallet: this.state.wallet + parseInt(amount, 10) })
    e.target.reset()
  }

  render() {
    const { start, end, eaten, wallet } = this.state
    return (
      <div className="app">
        <WalletForm addMoney={this.addMoney}/>
        <SushiContainer 
          sushis={this.state.sushis.slice(start, end)}
          more={this.more}
          eat={this.eat}
          eaten={eaten}
        />
        <Table wallet={wallet} eaten={eaten}/>
      </div>
    );
  }
}

export default App;