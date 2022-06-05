const router = require('express').Router();
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');
const { updateUser, deleteUser, getUser, getAllUsers, getUserStats } = require('../controllers/userController');

//Update User
router.put('/:id', updateUser );

//Delete User
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

//Get User
router.get("/find/:id", verifyTokenAndAdmin, getUser);

//Get All Users
router.get('/', verifyTokenAndAdmin, getAllUsers);

//Get User Stats
router.get('/stats', verifyTokenAndAdmin, getUserStats);


module.exports = router;