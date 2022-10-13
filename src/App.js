import Profil from './Components/Profil'
import './App.css';
import React from 'react';
import Count from './Components/Count';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      isShow:true
      };
     
  }
  componentDidMount() {
    setInterval(() => {
      
    
    }, 1000);
  }

  handleClick = () =>{
    this.setState({ isShow: !this.state.isShow})
}
  render(){
    return(
      <div className='App'>
         {this.state.isShow && <Profil />}
        <button onClick={this.handleClick}>CLick here!</button>
        <Count/>
      
      </div>
    )
  }
}
export default App;
