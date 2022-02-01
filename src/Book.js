import React from 'react'
import './Book.css'

const Book = ({ title, description, img, id}) => {
    return (
        <div className='book'>
            <img src={img} />
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}

export default Book