
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: crypto.randomUUID, ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  /*useEffect(() => {
    const handleError = (error) => {
      setError('Error connecting to the server. Please try again later.');
      console.error('Error connecting to the server:', error);
    };
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/contacts');
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setContacts(data);
          setError('');
        } else {
          throw new Error('Invalid response format. Expected JSON.');
        }
      } catch (error) {
        handleError(error);
      }
    };
  
    fetchData();
  }, []);*/

  return (
    <div className='container'>
      <Header />
      {error ? (
        <div className='alert alert-danger'>{error}</div>
      ) : (
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <AddContact addContactHandler={addContactHandler} />
            <ContactList contacts={contacts} getContactId={removeContactHandler} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
