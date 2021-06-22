import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { getPosts } from './fetch';

class Posts extends Component {
    state = { posts:[] ,search:null}

    SearchTheApi=async()=>{
      const param=this.props.match.params.id 
      const search=(this.state.search === null)?param:this.state.search || "pakistan"
      const res=  axios.get(`https://newsapi.org/v2/everything?q=${search}&pageSize=10&apiKey=e112bbb1408343fe9d51d1e1cfd117e2`)
      const {data} = await res
      this.setState({posts :data})
    }
     componentDidMount(){
      
        this.SearchTheApi()  
          // const url=`https://newsapi.org/v2/everything?q=${search}&pageSize=10&apiKey=e112bbb1408343fe9d51d1e1cfd117e2`
          // const res=  axios.get(url)
          // const {data} = await res
          // this.setState({posts :data})
          
        
    }
    date=(time)=>{
        let currentTime=new Date().getTime()
        console.log(time.slice(0,10) );
    }
    updateNewsList =(e)=>{
      const newword=e.currentTarget.value
      this.setState({search:newword})
    }
    applySearch=()=>{
      const posts=this.SearchTheApi(this.state.search)
      this.setState({posts})
    }
    render() { 
        const {posts ,search}=this.state
        return ( 
          <React.Fragment>
            <input type="text" className="s_inp" name="search" value={search} onChange={(e)=>{this.updateNewsList(e)}} />
            <button className="btn btn-primary" onClick={()=>this.applySearch()}>Search 🔎</button>
            <div className="posts container-fluid col-8">
                {
                  posts.articles && posts.articles.map((post,id) => 
                      <div className="post row m-4" key={post.source.id+id}>
                        <img  src={post.urlToImage} height="auto" width="300px" />
                        <div className="col-7 p-3 ">
                          <h6 className="title">{post.title}</h6>
                          <p className="auther">{post.auther}</p>
                          <p className="publishedAt">{post.publishedAt}</p>
                          <p className="content">{post.content}</p>
                          <p className="desc">{post.description}</p>
                          <Link to={`/param/${JSON.stringify(post)}`}  >Info</Link>
                          <a href="#">{post.source.name}</a>
                          <a href={post.url}>Read more...</a>
                        
                        </div>
                        </div>
                    )

                }
            </div>
            </React.Fragment>
         );
    }
}
 
export default Posts;