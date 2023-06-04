const express = require('express');
const router = express.Router();
const Contact = require('./contactModel');

// Create a new contact
router.post('/contacts', (req, res) => {
  const { name, email } = req.body;
  const newContact = new Contact({ name, email });

  newContact.save()
    .then((contact) => {
      res.status(201).json(contact);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error creating contact' });
    });
});

// Get all contacts
router.get('/contacts', (req, res) => {
  Contact.find()
    .then((contacts) => {
      res.status(200).json(contacts);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error retrieving contacts' });
    });
});

// Update a contact
router.put('/contacts/:id', (req, res) => {
  const { name, email } = req.body;
  const contactId = req.params.id;

  Contact.findByIdAndUpdate(contactId, { name, email }, { new: true })
    .then((contact) => {
      res.status(200).json(contact);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error updating contact' });
    });
});

// Delete a contact
router.delete('/contacts/:id', (req, res) => {
  const contactId = req.params.id;

  Contact.findByIdAndRemove(contactId)
    .then(() => {
      res.status(200).json({ message: 'Contact deleted' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error deleting contact' });
    });
});

module.exports = router;
