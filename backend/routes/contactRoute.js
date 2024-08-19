const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/contacts', contactController.createContact);
router.get('/contacts', contactController.getContacts);
router.patch('/contacts/:id/read', contactController.toggleReadStatus);
// router.get('/query/contacts', contactController.getContactsQuery);
// router.patch('/contacts/status/:id', contactController.updateContactStatus);
// router.get('/contacts/:id', contactController.getContactById);
// router.patch('/contacts/:id', contactController.updateContact);
router.delete('/contacts/:id', contactController.deleteContact);

module.exports = router;
