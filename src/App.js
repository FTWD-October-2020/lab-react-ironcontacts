import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

let firstFive = contacts.splice(0, 5)

function App() {

  const [showing, setShowing] = useState(firstFive)
  const [allShowing, setAllShowing] = useState(firstFive)
  // const [contactsLeft, setContactsLeft] = useState(contacts)
  console.log(showing)
  // console.log(contactsLeft)


  const DisplayFirstFive = () => {
    return showing.map((contact, index) => {
      return (
        <tr>
          <td><img src={contact.pictureUrl} alt={contact.name} /></td>
          <td>{contact.name}</td>
          <td>{Math.round((contact.popularity) * 100) / 100}</td>
          <td><button onClick={(e) => removeRow(index)}>X</button></td>
          {/* <td><button onClick={removeRow(index)}>X</button></td> */}
        </tr>

      )
    })
  }
  const addRandomContact = () => {

    let randomContact = contacts.splice(Math.floor(Math.random() * contacts.length), 1)
    setShowing([...randomContact, ...showing])
    setAllShowing([...randomContact, ...showing])

    //setShowing([{name: "Jessica Beal"}, {name:'Idris Elba'}, {name:'Emily Clarke'}, {name:"Jennifer Lawrence"} ])
  }

  const sortByName = () => {
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

  const sortByPopularity = () => {
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
  const removeRow = (index) => {
  // const removeRow = (index) => (e) => {
    let removeArr = [...showing];
    removeArr.splice(index, 1)
    setShowing(removeArr)
    setAllShowing(removeArr)
  }


  const searchBar = (event) => {

    let newArr = [...allShowing].filter(celeb => {
      return celeb.name.toUpperCase().includes(event.target.value.toUpperCase());
    });
    console.log(newArr)
    setShowing(newArr);

  }





  return (
    <div className="App">
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <h1>Iron Contacts</h1>
      <form>
        <input type='text' placeholder="search here" onChange={searchBar}></input>
      </form>
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
