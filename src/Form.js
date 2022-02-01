import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            description: '',
            image: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value})
    }

    submitBook = event => {
        event.preventDefault()
        const newBook = {
            id: Date.now(),
            ...this.state
        }
        this.props.addBook(newBook)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({ title: '', description: '', image: ''})
    }

    render() {
        return(
            <form>
                <input
                    type='text'
                    placeholder='Title'
                    name='title'
                    value={this.state.title}
                    onChange={event => this.handleChange(event)} 
                />
                 <input
                    type='text'
                    placeholder='Description'
                    name='description'
                    value={this.state.description}
                    onChange={event => this.handleChange(event)}  
                />
                 <input
                    type='text'
                    placeholder='Image URL'
                    name='image'
                    value={this.state.image} 
                    onChange={event => this.handleChange(event)} 
                />

                <button onClick={event => this.submitBook(event)}>Submit</button>
            </form>
        )
    }
}

export default Form 