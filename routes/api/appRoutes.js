const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/appController');

// /api/Thought
router.route('/').get(getThought).post(createThought);

// /api/Thought/:ThoughtId
router
  .route('/:ThoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thought/:ThoughtId/Reactions
router.route('/:ThoughtId/reaction').post(addReaction);

// /api/Thought/:ThoughtId/Reactions/:ReactionId
router.route('/:ThoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;
