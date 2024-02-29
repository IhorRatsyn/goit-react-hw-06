import React, {useEffect, useState} from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import SearchBox from "./SearchBox";
import "./App.css";

const localStorageKey = 'contacts'
const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || initialState
  });
  const [filterText, setFilterText] = useState("");

  useEffect(()=>{
      window.localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  }, [contacts])

  const onSubmit = (newContact) => {
    setContacts([...contacts, newContact]);
  };


  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value.toLowerCase());
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />
      <div className="search-container">
        <SearchBox onChange={handleFilterChange} />
      </div>
      <div className="contact-list">
        <ContactList
          contacts={getFilteredContacts()}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
};

export default App;
