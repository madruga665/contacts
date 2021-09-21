import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  const fetchContacts = async () => {
    const response = await fetch("http://localhost:3001/contacts");
    const data = await response.json();
    setContacts(data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <h1>lista de contatos</h1>
      <ul>
        {contacts.map(({first_name, last_name}, index) => (
          <li key={first_name + index}>{`${first_name} ${last_name}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
