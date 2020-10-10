import React from 'react'
import FrontPage from './FrontPage'
import { connect } from 'react-redux'
import axios from 'axios'
import { fetchArticles } from '../actions'

class Articles extends React.Component {

    componentDidMount(){
        axios.get('http://localhost:3001/articles')
            .then(response => {
                this.props.fetchArticles(response.data.articles)
            })
    }

    renderArticles = () => {
        return this.props.allArticles.map((a, index) => <FrontPage key={index} article={a} /> )
    }

    render() {
        
        console.log("Articles")
        return (
            <div>
                {this.renderArticles()}
            </div>
        )
    }
}

const mapStateToProps = ({ allArticles }) => {
    return { allArticles }
}

export default connect(mapStateToProps, { fetchArticles })(Articles)