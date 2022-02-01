import React from 'react'
import Book from './Book'
import './BookContainer.css'

const BookContainer = ({books, deleteBook}) => {
    const bookCards = books.map(book => {
        return (
            <Book
                title={book.title}
                description={book.description}
                img={book.image}
                id={book.id}
                key={book.id}
                deleteBook={deleteBook}
            />
        )
    })
    return (
        <div className='book-container'>
          {bookCards}
        </div>
    )
}

export default BookContainer