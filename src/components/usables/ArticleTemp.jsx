import React,{Component} from 'react'

class ArticleTemp extends Component {
    state = {  }
    render() { 
        const  {source, author, title, description, url, urlToImage, publishedAt, content}=this.props.post
        console.log(this.props)
        return (         
        <div>
            <button className="btn" onClick={()=>{window.history.go(-1)}}> {`<-`} </button>
            <h2>{title}</h2>
            <img src={urlToImage} height="700" width="auto" />
            <p>{publishedAt}</p>
            <p>{author}</p>
            <p>{content}</p>
            <div className="desc">{description}</div>
        </div> );
    }
}
 
export default ArticleTemp;


// export default function ArticleTemp(props) {
   
//     return (

//     )
// }
