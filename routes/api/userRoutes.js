const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  deleteUser,
  createUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

module.exports = router;
