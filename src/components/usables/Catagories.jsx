import React, { Component } from 'react';
import { BrowserRouter , route ,withRouter} from 'react-router-dom';
class Catagories extends Component {
    state = {  }
    render() { 
        const myStyle=(myurl)=>  {
        return    {background:`url(${myurl} )`, backgroundSize : "cover",backgroundPosition: "center"}
        }  
        const {data}=this.props
        return ( 
            <ul className="catagory" >
                {data.map(
                    elem => <li key={elem.title}  onClick={()=>{this.props.history.push("/post/"+elem.title)}} style={myStyle(elem.url)}>
                                    {elem.title}
                            </li>
                )}
            </ul> );
    }
}

export default withRouter(Catagories);
 
// export default Catagories;

// export default function Catagories({data}) {
//     return (
//     )
// }


    // {Catagories.map(e => <li>{e}</li>)}