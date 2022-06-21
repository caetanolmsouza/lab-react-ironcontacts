import contactsList from "./contacts.json";
import "./App.css";
import { useState } from "react";
function App() {
  let lastContacts = contactsList.slice(5);

  const addRandomContact = function (contact) {
    const randomIndex = Math.floor(lastContacts.length * Math.random());
    const randomContact = lastContacts[randomIndex];
    setContacts([...contacts, randomContact]);
  };

  let contactData = contactsList.slice(0, 5);
  const [contacts, setContacts] = useState(contactData);
  console.log(contactData);
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Grammy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contacts) => {
            return (
              <tr>
                <td>
                  <img src={contacts.pictureUrl} />
                </td>
                <td> {contacts.name}</td>
                <td> {contacts.popularity.toFixed(2)} </td>
                <td> {contacts.wonOscar && "🏆"} </td>
                <td> {contacts.wonEmmy && "🏆"} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
