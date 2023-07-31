  const express=require('express')
  const usercontroller=require ('../controllers/userControllers')
  const router=express.Router()
  const protect=require('../middlewares/authmiddleware')
   





  //Routers
  router.post('/',usercontroller. registerUser )
  router.post('/auth',usercontroller.authUser )
  router.post('/logout',usercontroller.logoutUser )
  router.get('/profile',protect,usercontroller. getUserProfile)
  router.put('/profile',protect,usercontroller.updateUserProfile)




 
 
  module.exports = router
     