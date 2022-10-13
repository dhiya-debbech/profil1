import React from "react";



class Count extends React.Component {

    state = { count: 0 };
  
    componentDidMount() {
      setInterval(() => {
        this.setState(prevState => {
          return {
            count: prevState.count + 1,
          };
        });
      }, 1000);
    }
  
   
  
    render() {
      return (
        <h1>{this.state.count}</h1>
      );
    }
  }
  
  export default Count;