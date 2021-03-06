import React, { Component } from 'react'
import BookContainer from './BookContainer'
import Form from './Form'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [
        // {
        //   id: 1,
        //   title: 'The Name of the Wind',
        //   description: 'Tale of Kvothe',
        //   image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1610525073i/30688375._SX540_.jpg'
        // },
        // {
        //   id: 2,
        //   title: 'The Wise Mans Fear',
        //   description: 'Tale of Kvothe, as he ages',
        //   image: 'https://i1.sndcdn.com/avatars-000126148758-f00pzk-t500x500.jpg'
        // },
        // {
        //   id: 3,
        //   title: 'The Slow Regard of Silent Things',
        //   description: 'Tale of Auri',
        //   image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1414580631i/11668451._SY540_.png'
        // }
      ]
    }
  }

  addBook = (newBook) => {
    this.setState({ books: [...this.state.books, newBook]})
  }

  deleteBook = (id) => {
    const filteredBooks = this.state.books.filter(book => book.id != id)
    this.setState({ books: filteredBooks})
  }

  render() {
    return (
      <main className='App'>
        <h1 className='title-bar'>Book Club</h1>
        {!this.state.books.length && <h2 className='no-data'>No Books Yet -- Add Some!</h2>}
        <Form className='form' addBook={this.addBook} />
        <BookContainer className='book-container' books={this.state.books} deleteBook={this.deleteBook}/>
      </main>
    )
  }
}

export default App 
