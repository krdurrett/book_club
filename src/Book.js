import React from 'react'
import './Book.css'

const Book = ({ title, description, img, id, deleteBook}) => {
    return (
        <div className='book'>
            <img src={img} />
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
            <button onClick={() => deleteBook(id)}>Read it? Remove 🗑</button>
        </div>
    )
}

export default Book