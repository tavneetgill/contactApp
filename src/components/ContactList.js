import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const updateContactHandler = (id, updatedContact) => {
    props.updateContactHandler(id, updatedContact);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
        updateContactHandler={updateContactHandler}
      ></ContactCard>
    );
  });

  return <div className='ui celled list'>{renderContactList}</div>;
};

export default ContactList;