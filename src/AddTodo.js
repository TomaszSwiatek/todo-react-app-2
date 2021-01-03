import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        id: null,
        content: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        e.target.content.value = null; //:)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="content" className="">What to do?</label>
                    <input type="text" id="content" name="content" onChange={this.handleChange} />
                    <button className="btn btn-small blue right">Add</button>
                </form>
            </div>
        )
    }
}

export default AddTodo
