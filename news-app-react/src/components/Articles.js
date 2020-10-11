import React from 'react'
import FrontPage from './FrontPage'
import { connect } from 'react-redux'
import { fetchArticles } from '../actions'

class Articles extends React.Component {

    componentDidMount(){
        this.props.fetchArticles()
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