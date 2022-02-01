import React from 'react'
import './Book.css'

const Book = ({ title, description, img, id, deleteBook}) => {
    return (
        <div className='book'>
            <img src={img} />
            <p>{title}</p>
            <p>{description}</p>
            <button onClick={() => deleteBook(id)}>Read it already? Remove 🗑</button>
        </div>
    )
}

export default Book