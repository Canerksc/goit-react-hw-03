import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchBox from './components/SearchBox';
import styles from './App.module.css';
import { FaAddressBook } from "react-icons/fa";

const LOCAL_STORAGE_KEY = 'contacts';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    setContacts(prev => [...prev, newContact]);
  };

  const handleDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleFilterChange = value => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.phoneContainer}>
      <div className={styles.cameraNotch}></div>
      <h1 className={styles.title}>PhoneBook <FaAddressBook /></h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
      
    </div>
  );
}

export default App;
