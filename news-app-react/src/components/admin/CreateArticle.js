import React from 'react'
import ImageUploader from 'react-images-upload'
import axios from 'axios'
import { createArticle } from '../../actions/index'
import { connect } from 'react-redux'

class CreateArticle extends React.Component {

    state = {
        title: '',
        preview: '',
        content: '',
        imageurl: '',
        category: '',
        user_id: null
    }

    handleOnChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
        console.log(value)
    }

    handleImageChange = (event) => {
        this.setState({
            imageurl: event[0].name
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { title, preview, content, imageurl, category } = this.state

        let article = {
            title: title,
            preview: preview,
            content: content,
            imageurl: imageurl,
            category: category,
            user_id: this.props.id
        }

        axios.post('http://localhost:3001/articles', { article }, { withCredentials: true })
            .then(response => {
                if(response.data.created) {
                    this.props.createArticle(response.data.article)
                    this.redirect()
                    console.log("created article")
                } else {
                    this.setState({
                        errors: response.data.errors
                    })
                    console.log("unable to create article")
                }
            })
    }

    redirect = () => {
        this.props.history.push('/')
    }

    render() {

        const margin = {
            width: "50vw",
            margin: "10px"
        }

        const { title, preview, content, imageurl, category } = this.state

        return (
            <div>
                <div className="ui form">
                <form onSubmit={this.handleSubmit} style={margin}>
                    <h1 className="ui header">Create Article</h1>

                    <div className="field">
                        <label>Title</label>
                        <input 
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.handleOnChange} />
                    </div>

                    <div className="field">
                        <label>Category</label>
                        <input 
                            type="text"
                            name="category"
                            value={category}
                            onChange={this.handleOnChange} />
                    </div>

                    <ImageUploader 
                        withIcon={true}
                        buttonText="Upload Image"
                        value={imageurl}
                        onChange={this.handleImageChange}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />

                    <div class="field">
                        <label>Preview</label>
                        <textarea 
                            rows="2"
                            type="text"
                            name="preview"
                            value={preview}
                            onChange={this.handleOnChange}></textarea>
                    </div>

                    <div className="field">
                        <label>Content</label>
                        <textarea
                            type="text"
                            name="content"
                            value={content}
                            onChange={this.handleOnChange}></textarea>
                    </div>

                    <button className="ui submit button" type="submit" style={{backgroundColor: "lightgreen"}}>
                        Submit
                    </button>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ id }) => {
    return { id }
}

export default connect(mapStateToProps, { createArticle })(CreateArticle)