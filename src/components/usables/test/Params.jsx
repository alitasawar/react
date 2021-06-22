import React, { Component } from 'react';
import ArticleTemp from '../ArticleTemp';

class Params extends Component {
    state = {  }
    render() { 
        const post=()=>{
            const pathUrl=this.props.location.pathname;
             const post_Json= JSON.parse(pathUrl.slice(7,pathUrl.lenght))
             return post_Json
        }
        // const { match }=this.props
        // console.log( this.props);
        return (
            <div>
                <h2></h2>
                <ArticleTemp post={post()}></ArticleTemp>
            </div>
        );
    }
}
 
export default Params;