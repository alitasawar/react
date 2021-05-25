// import React from 'react'
import React,{Component} from 'react';
// export default function counter() {
    
//     return (
//         <div>
//             <button className="btn btn-success">Click Me</button>
//             <h1>Hello World</h1>
//         </div>
//     )
// }
class counter extends Component {
    state = { 
        counter:10,
        list:['apples','mangoes','oranges']
     }
    
    render() {
 
        return ( <React.Fragment>
            <button className={this.classesExtract()} >Click Me</button>
            <h1>Hello World</h1>
            <div className="listTest">
                {this.state.list.map(
                    (e)=>{
                       return ( <div className="item" key={e}>{e}
                       </div>)
                    }
                )}
            </div>
            </React.Fragment>
            
            
            );
    }
    mycounter(){
    const    {count} = this.state.counter;
     return   count===0?"zero":count;
        
    }

    classesExtract() {
        let classes = "btn m2 btn-";
        classes += (this.state.counter === 0) ? "primary" : "warning";
        return classes;
    }
}
 
export default counter;