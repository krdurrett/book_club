import React, { Component } from 'react'
import BookContainer from './BookContainer'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [
        {
          title: 'The Name of the Wind',
          description: 'Tale of Kvothe',
          image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodreads.com%2Fbook%2Fshow%2F186074.The_Name_of_the_Wind&psig=AOvVaw3GRVm_rkrempksrbCXuGue&ust=1643819519935000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjV3NP43vUCFQAAAAAdAAAAABAJ'
        },
        {
          title: 'The Wise Mans Fear',
          description: 'Tale of Kvothe, as he ages',
          image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fcianpepper%2Fa-wise-mans-fear%2F&psig=AOvVaw1Ml6A428N_F8rOSsHdIv6q&ust=1643820083281000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLin_Kb53vUCFQAAAAAdAAAAABAF'
        },
        {
          title: 'The Slow Regard of Silent Things',
          description: 'Tale of Auri',
          image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodreads.com%2Fbook%2Fshow%2F21535271-the-slow-regard-of-silent-things&psig=AOvVaw0oEq68ibLQ52DUNWX2xTaH&ust=1643820264388000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiltPv53vUCFQAAAAAdAAAAABAD'
        }
      ]
    }
  }

  render() {
    return (
      <main className='App'>
        <h1>Book Club</h1>
        <BookContainer name='Kayla'/>
      </main>
    )
  }
}

export default App 
