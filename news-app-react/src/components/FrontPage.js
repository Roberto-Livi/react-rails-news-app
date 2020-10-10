import React from 'react'

const FrontPage = ({ article }) => {
    console.log(article)
    console.log("Front Page")
    return (
        <div>
            <h1>{article.title}</h1>
            <img src={article.imageurl} alt="image" />
            <h4>{article.preview}</h4>
        </div>
    )
}

export default FrontPage