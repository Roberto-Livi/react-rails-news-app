import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../actions'

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        errors: ''
    }

    handleChange = (event) => {
        const { name, value } = event.target
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

        this.props.loginUser({ user })
        this.redirect()
                    
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


export default connect(null, { loginUser })(Login)