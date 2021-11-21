import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import './App.css'

import Header from '../Header/Header'
import Tweet from '../Tweet/Tweet'

const maxTweets = 10;

export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tweets: [],
      term: ''
    }
  }

  componentDidMount () {
    const socket = socketIOClient('http://localhost:3000')

    socket.on('connect', () => {
      socket.on('newTweet', (tweet) => {
        let newState = [...this.state["tweets"], tweet]
        if (newState.length > maxTweets) {
          newState = newState.slice(1)
        }
        this.setState({tweets: newState})
      })
      socket.on('searchTerm', (term) => {
        this.setState({ term })
      })
    })
    socket.on('disconnect', () => {
      socket.off('newTweet')
      socket.removeAllListeners('newTweet')
    })
  }

  render () {
    let tweetsState = [...this.state.tweets]
    let tweets = tweetsState.reverse()
    let tweetCards = tweets.map((tweet) => {
      return <Tweet key={tweet.id} tweet={tweet} />
    })
    return (
      <div className='app-container'>
        <Header term={this.state.term} />
        <div className='tweets-container'>
          {tweetCards}
        </div>
      </div>
    )
  }
}

export default App
