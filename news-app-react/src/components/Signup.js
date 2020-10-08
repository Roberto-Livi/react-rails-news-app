import React from 'react'
import axios from 'axios'

class Signup extends React.Component {

    state = {
        username: '',
        password: '',
        password_confirmation: '',
        errors: '',
        admin: false,
        adminSecret: "newsapp",
        adminInput: '',
        adminCheckbox: false
    }

    handleChange = (event) => {
        let { name, value, type, checked } = event.target
        value = type === "checkbox" ? checked : value

        this.setState({
            [name]: value
        })
    }

    showAdminCheckbox = (event) => {
        let { name, value } = event.target
        if(this.state.adminSecret === value){
            this.setState({
                adminCheckbox: true
            })
        } else {
            this.setState({
                adminCheckbox: false
            })
        }
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

        const inputColor = {
                backgroundColor: "lightgrey"
        }

        const { username, password, password_confirmation, adminInput, adminCheckbox } = this.state

        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="ui inverted segment">
                    <div className="two fields">
                    <div className="field">
                    <label>Username</label><br />
                    <input 
                        style={inputColor}
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    </div>

                    <div className="field">
                    <label>Password</label><br />
                    <input 
                        style={inputColor}
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    </div>
    
                    <div className="field">
                    <label>Password Confirmation</label><br />
                    <input 
                        style={inputColor}
                        type="password"
                        name="password_confirmation"
                        value={password_confirmation}
                        onChange={this.handleChange}
                    />
                    </div> 
                    <br />
                    <br />

                    <div className="field">
                    <label>Enter Key for Admin Account</label><br />
                    <input 
                        style={inputColor}
                        type="text"
                        name="adminInput"
                        value={adminInput}
                        onChange={this.showAdminCheckbox}
                    />
                    </div>
                    </div>
                    <br />
               
                { adminCheckbox ? 
                    <div className="inline field">
                    <label>Admin </label>
                    <input
                        name="admin"
                        type="checkbox"
                        checked={this.state.admin}
                        onChange={this.handleChange}
                    />
                    </div> : null
                }
                    <br /> 
                    

                    <button className="ui submit button" placeholder="submit" type="submit">
                        Submit
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup