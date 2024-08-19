const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

router.post('/feedbacks', feedbackController.createFeedback);
router.get('/feedbacks', feedbackController.getFeedbacks);
router.get('/feedbacks/:id', feedbackController.getFeedbackById);
router.patch('/feedbacks/:id', feedbackController.updateFeedback);
router.delete('/feedbacks/:id', feedbackController.deleteFeedback);

module.exports = router;
