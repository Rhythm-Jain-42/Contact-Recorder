import React from 'react'
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contact =[
    {
      id:"1",
      name:"Rhythm",
      email:"rhythm@gmail.com"
    },
    {
      id:"2",
      name:"Aashvi",
      email:"aashvi@gmail.com"
    }
  ]
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contact}/>
    </div>
  );
}

export default App