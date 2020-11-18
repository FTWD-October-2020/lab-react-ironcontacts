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
    setShowing([...randomContact, ...showing])

    //setShowing([{name: "Jessica Beal"}, {name:'Idris Elba'}, {name:'Emily Clarke'}, {name:"Jennifer Lawrence"} ])
  }

  const SortByName = () => {
    let nameSort = [...showing]
    nameSort.sort((celeb1, celeb2) => {
      if (celeb1.name < celeb2.name) {
        return -1;
      } else if (celeb1.name > celeb2.name) {
        return 1;
      } else {
        return 0;
      }
    })
    setShowing(nameSort)
  }

  const SortByPopularity = () => {
    let popularitySort = [...showing]
    popularitySort.sort((celeb1, celeb2) => {
      if (celeb1.popularity < celeb2.popularity) {
        return 1;
      } else if (celeb1.popularity > celeb2.popularity) {
        return -1;
      } else {
        return 0;
      }
    })
    setShowing(popularitySort)
  }





  return (
    <div className="App">
      <button onClick={(AddRandomContact)}>Add Random Contact</button>
      <button onClick={(SortByName)}>Sort by name</button>
      <button onClick={SortByPopularity}>Sort by popularity</button>
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
