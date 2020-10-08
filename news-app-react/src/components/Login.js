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

        if(this.props.loggedInStatus){
            this.props.history.push('/')
        }

        const { username, password } = this.state

        const inputColor = {
            backgroundColor: "lightgrey"
    }

        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                <div className="ui inverted segment">
                    <div className="two fields">
                    <div className="field">
                    <label>Username </label>
                    <input 
                        style={inputColor}
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    </div>
                    <br />

                    <div className="field">
                    <label>Password </label>
                    <input 
                        style={inputColor}
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    </div>
                    </div>
                    <br />

                    <button className="ui submit button" type="submit">
                        Log In
                    </button>
                        or <Link to="/signup">Sign Up</Link>

                    </div>
                </form>
            </div>
        )
    }
}

export default Login