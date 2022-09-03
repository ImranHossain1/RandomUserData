const express = require('express');
const userController = require('../controllers/user.controller');
const router =   express.Router();

router.route('/all').get(userController.getAllUsers)
router.route('/random').get(userController.getUser)
router.route('/save').post(userController.saveAUser)
router.route('/update/:_id').patch(userController.updateUser)
router.route('/bulk_update').patch(userController.bulkUpdateUser)
router.route('/delete/:_id').delete(userController.deleteUser)

module.exports = router;