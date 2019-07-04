import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            neighborhood: '',
            name: '',
            details: ''
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]:value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { neighborhood, name, details } = this.state
        return(
            <form>
                <label>neighborhood</label>
                <input 
                    type="text"
                    name="neighborhood"
                    value={neighborhood}
                    onChange={this.handleChange}/>
                <label>Name</label>
                <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}/>
                <label>Details</label>
                <input 
                    type="text"
                    name="details"
                    value={details}
                    onChange={this.handleChange}/>
                <input 
                    type="button"
                    value="Submit"
                    onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form