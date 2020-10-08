import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        errors: ''
    }

    componentDidMount() {
        return this.props.loggedInStatus ? this.redirect() : null
    }

    handleChange = (event) => {
        const { name, value } = event.target
        console.log(event.target.value)
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, password } = this.state

        let user = {
            username: username,
            password: password
        }

        axios.post('http://localhost:3001/login', { user }, { withCredentials: true })
            .then(response => {
                if(response.data.logged_in) {
                    this.props.handleLogin(response.data)
                    this.redirect()
                    console.log("logged in")
                } else {
                    this.setState({
                        errors: response.data.errors
                    })
                    console.log("unable to log in")
                }
            })
    }

    redirect = () => {
        this.props.history.push('/')
    }


    render() {

        const { username, password } = this.state

        return (
            <div>
                <h1>Log In</h1>
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

                    <button placeholder="submit" type="submit">
                        Log In
                    </button>

                    <div>
                        or <Link to="/signup">Sign Up</Link>
                    </div>

                </form>
            </div>
        )
    }
}

export default Login