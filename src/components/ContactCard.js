import React from 'react';
import user from '../images/user.png';
import 'bootstrap/dist/css/bootstrap.css';

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  const deleteHandler = () => {
    props.clickHandler(id);
  };

  const updateHandler = () => {
    const updatedName = window.prompt('Enter updated name:', name);
    const updatedEmail = window.prompt('Enter updated email:', email);
    const updatedContact = {
      name: updatedName || name,
      email: updatedEmail || email,
    };
    props.updateContactHandler(id, updatedContact);
  };

  return (
    <div className='card mb-3'>
      <div className='row g-0'>
        <div className='col-md-2'>
          <img className='card-img' src={user} alt='user' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>{email}</p>
          </div>
        </div>
        <div className='col-md-2'>
          <button className='btn btn-danger' onClick={deleteHandler}>
            <i className='bi bi-trash'></i>
          </button>
          <button className='btn btn-primary mt-2' onClick={updateHandler}>
            <i className='bi bi-pencil'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
