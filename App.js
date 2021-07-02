import logo from './logo.svg';
import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';
import './App.css';
import Posts from './components/Posts';
import Catagories from './components/usables/Catagories';
import Params from './components/usables/test/Params';
import React, { Component } from 'react'

export default class App extends Component {
  state={
    value:null
  };
  addToValue=(e)=>{
   if(this.state.value !== null){
    const value= e.currentTarget.innerHTML + this.state.value  
    this.setState({value})
   }else{
    const value =e.currentTarget.innerHTML
    this.setState({value})
  }



    

  }
  Clear=()=>{
    this.setState({value:null})
  }
  equal=()=>{
    const value=parseInt(this.state.value)
    this.setState({value})
  }

  render() {
    
    const {value}=this.state
    return (
      <div className="container col-2">
      <div className="row display">
        {value?value:0}
      
      </div>
      <div className="row">
        <button onClick={(e)=>{this.Clear(e)}} className="btn col-8">Clear</button>
        <button onClick={(e)=>{this.addToValue(e)}} className="btn col-4 btn-danger">/</button>
      </div>
      <div className="row">
        <button onClick={(e)=>{this.addToValue(e)}} className="btn col">7</button>
        <button onClick={(e)=>{this.addToValue(e)}} className="btn col">8</button>
        <button onClick={(e)=>{this.addToValue(e)}} className="btn col">9</button>
        <button onClick={(e)=>{this.addToValue(e)}} className="btn col btn-danger">-</button>
      </div>
      <div className="row">
        <button onClick={(e)=>{this.addToValue(e)}} className="btn col">4</button>
        <button onClick={(e)=>{this.addToValue(e)}} className="btn col">5</button>
        <button onClick={(e)=>{this.addToValue(e)}} className="btn col">6</button>
        <button onClick={(e)=>{this.addToValue(e)}} className="btn col btn-danger">+</button>
      </div>
      <div className="row">
        <button onClick={(e)=>{this.addToValue(e)}} className="btn col">1</button>
        <button onClick={(e)=>{this.addToValue(e)}} className="btn col">2</button>
        <button onClick={(e)=>{this.addToValue(e)}} className="btn col">3</button>
        <button onClick={(e)=>{this.equal(e)}} className="btn col btn-danger">=</button>
      </div>
      
    </div>
)
  }
}


// function App() {

//   return (
//       );
// }

// export default App;
