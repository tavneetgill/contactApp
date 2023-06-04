import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class AddContact extends React.Component {
  state = {
    name: '',
    email: '',
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === '' || this.state.email === '') {
      alert('All fields are mandatory!');
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: '', email: '' });
    console.log(this.state);
  };

  render() {
    return (
      <div className='card mb-3'>
        <div className='card-body'>
          <h5 className='card-title'>Add Contact</h5>
          <form onSubmit={this.add}>
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>Name</label>
              <input
                type='text'
                className='form-control'
                id='name'
                placeholder='Name'
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input
                type='text'
                className='form-control'
                id='email'
                placeholder='Email'
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <button className='btn btn-primary'>Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
