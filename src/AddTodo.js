import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        content: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.content.value) {
            this.props.addTodo(this.state)
            // e.target.content.value = null; //also works
            this.setState({
                content: ""
            })
        }
        else {
            console.log("write in value to input");
            window.prompt("write in value to input");
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="content" className="">What to do?</label>
                    <input type="text" id="content" onChange={this.handleChange} value={this.state.content} />
                    <button className="btn btn-small blue right">Add</button>

                </form>
            </div>
        )
    }
}

export default AddTodo
