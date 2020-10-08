import React from 'react'
import axios from 'axios'

class Signup extends Component {

    state = {
        username: '',
        password: '',
        password_confirmation: '',
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
                        name="password confirmation"
                        value={password_confirmation}
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

export default Signup