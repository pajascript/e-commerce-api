const { createOrder, updateOrder, deleteOrder, getUserOrder, getAllOrders, getMonthlyIncome } = require('../controllers/orderController');
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } = require('./verifyToken');
const router = require('express').Router();


//Create Order
router.post('/', verifyToken, createOrder);

//Update Order
router.put('/:id', verifyTokenAndAdmin, updateOrder);

//Delete Order
router.delete('/:id', verifyTokenAndAdmin, deleteOrder);

//Get User Order
router.get('/find/:userId', verifyTokenAndAuthorization, getUserOrder);

//Get All Orders
router.get('/', verifyTokenAndAdmin, getAllOrders);

// Get Monthly Income
router.get('/income', verifyTokenAndAdmin, getMonthlyIncome);



module.exports = router;