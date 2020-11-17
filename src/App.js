import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

let firstFive = contacts.splice(0, 5)

function App() {

  const [showing, setShowing] = useState(firstFive)
  // const [contactsLeft, setContactsLeft] = useState(contacts)
  console.log(showing)
  // console.log(contactsLeft)


  const DisplayFirstFive = () => {
    return showing.map((contact) => {
      return (
        <tr>
          <td><img src={contact.pictureUrl} alt={contact.name} /></td>
          <td>{contact.name}</td>
          <td>{Math.round((contact.popularity) * 100) / 100}</td>
        </tr>

      )
    })
  }
  const AddRandomContact = () => {

    let randomContact = contacts.splice(Math.floor(Math.random() * contacts.length), 1)
    setShowing([...showing, ...randomContact])


  }







  return (
    <div className="App">
      <button onClick={(AddRandomContact)}>Add Random Contact</button>
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
          <DisplayFirstFive />

        </tbody>
      </table>

    </div>
  );
}

export default App;
