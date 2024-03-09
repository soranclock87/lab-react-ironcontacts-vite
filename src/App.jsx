import "./App.css";
import List from "./components/List";
import contacts from "./contacts.json";
import { useState } from "react";


function App() {

  const [allcontacts,setContacts] = useState(contacts.slice(0,5));

  const handleOrderAlphabetic = () => {
    const newArray = [...allcontacts].sort( (a,b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })
   
    console.log(newArray)
     setContacts(newArray)
}

const handleOrderPopularity = () => {
  const newArray = [...allcontacts].sort( (a,b) => {
    if (a.popularity < b.popularity) return 1;
    if (a.popularity > b.popularity) return -1;
    return 0;
  })
 
  console.log(newArray)
   setContacts(newArray)
}

const handleAddNewContact = () => {
  const remaining = contacts.slice(5);
  const randomIndex = Math.floor(Math.random() * remaining.length+5)  
  console.log(randomIndex);
  const newContact = [ ...allcontacts,contacts[randomIndex]]

 
   setContacts(newContact)
}
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={handleOrderAlphabetic}>Order Alphabetic</button>
        
      <button onClick={handleOrderPopularity}>Order popularity</button>

      <button onClick={handleAddNewContact}>Add random contact</button>
       

     
      <List listContacts={allcontacts} setContacts={setContacts}/>
      
        
      
    </div>
  );
}

export default App;
