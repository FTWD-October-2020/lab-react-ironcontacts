import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

function App() {
 
 const [showing,setShowing] = useState(contacts.splice(0,5))
 console.log(showing)
 
 
  const DisplayFirstFive = () =>{
    return showing.map((contact) => {
      return (
        <tr>
          <td><img src={contact.pictureUrl} alt={contact.name}/></td>
          <td>{contact.name}</td>
          <td>{Math.round((contact.popularity)*100)/100}</td>  
        </tr>
          
        )  
    })
}








  return (
    <div className="App">
     <h1>Iron Contacts</h1>
     <table>
     <thead>
     <tr>
       <th>Picture</th>
       <th>Name</th>
       <th>Popularity</th>
     </tr>
     </thead>
     <tbody>
     <DisplayFirstFive/> 
    
     </tbody>
     </table>

    </div>
  );
}

export default App;
