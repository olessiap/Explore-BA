import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            neighborhood: '',
            name: '',
            details: '',
            option: 'bar'
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
        const { neighborhood, name, details, option } = this.state
        return(
            <div>
                <h2>Add New Place</h2>
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
                    <label>Type of Place</label>
                    <select option={this.state.value} onChange={this.handleChange}>
                        <option value="bar">Bar</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="activity">Activity</option>
                    </select>
                    <input 
                        type="button"
                        value="Submit"
                        onClick={this.submitForm} />
                </form>
            </div>
            
        )
    }
}

export default Form