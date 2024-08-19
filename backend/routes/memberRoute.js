const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');

router.post('/members', memberController.createMember);
router.get('/members', memberController.getMembers);
router.get('/members/:id', memberController.getMemberById);
router.patch('/members/:id', memberController.updateMember);
router.delete('/members/:id', memberController.deleteMember);

module.exports = router;
