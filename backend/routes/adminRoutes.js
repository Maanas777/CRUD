
const adminController = require('../controllers/adminController')
const express = require('express')
const router = express.Router()

router.get('/admin', adminController.adminpage)
router.post('/adminlogin', adminController.authAdmin)
router.get('/findUsers',adminController.findAllusers)
router.post('/searchUser',adminController.searchUser)
router.delete('/deleteUser/:id',adminController.deleteUser)
router.put('/editUser/:id',adminController.editUser)
router.post('/createUser',adminController.createUser)



module.exports = router
