import React from "react";
import JohneDoe from "./images/John-Doe.jpg"

class Profil extends React.Component{
   
    
    render(){
     return (
        <div>
        <img  src={JohneDoe} alt="jhon-doe" />
        <h1>Jhon doe</h1>
    
        </div>
     )
     
    }
}
export default Profil;