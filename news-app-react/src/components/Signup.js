import React from 'react'
import axios from 'axios'

class Signup extends React.Component {

    state = {
        username: '',
        password: '',
        password_confirmation: '',
        errors: '',
        admin: false
    }

    handleChange = (event) => {
        let { name, value, type, checked } = event.target
        value = type === "checkbox" ? checked : value
        console.log(value)
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, password, password_confirmation, admin } = this.state

        let user = {
            username: username,
            password: password,
            password_confirmation: password_confirmation,
            admin: admin
        }

        axios.post('http://localhost:3001/users', { user }, { withCredentials: true})
            .then(response => {
                if(response.data.status === 'created') {
                    this.props.handleLogin(response.data)
                    this.redirect()
                    console.log("created user")
                } else {
                    this.setState({
                        errors: response.data.errors
                    })
                    console.log("error creating user")
                }
            })
    }

    redirect = () => {
        this.props.history.push('/')
    }


    render() {

        const { username, password, password_confirmation } = this.state

        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        placeholder="username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />

                    <input 
                        placeholder="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />

                    <input 
                        placeholder="password confirmation"
                        type="password"
                        name="password_confirmation"
                        value={password_confirmation}
                        onChange={this.handleChange}
                    />

                    <input 
                        name="admin"
                        type="checkbox"
                        checked={this.state.admin}
                        onChange={this.handleChange}
                    />

                    

                    <button placeholder="submit" type="submit">
                        Submit
                    </button>

                </form>
            </div>
        )
    }
}

export default Signup