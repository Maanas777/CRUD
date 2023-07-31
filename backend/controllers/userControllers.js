const asyncHandler= require('express-async-handler')
const userModel=require('../models/userModel')
const generateToken=require('../utils/generateToken')


exports.authUser = asyncHandler(async (req,res)=>{
   
    const {email, password} = req.body

    const user = await userModel.findOne({email})

    if (user && (await user.matchPassword(password))) {
        generateToken(res,user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email : user.email
        })
    } else {
        res.status(400)
        console.log("090909");
        throw new Error("Invaild Email or password")
    }


})

//register user//post request//
exports. registerUser=asyncHandler(async(req,res)=>{

  const{name,email,password}=req.body  
const userExists= await userModel.findOne({email})
if(userExists){
    res.status(400)
    throw new Error('User already exists')
}
const user=await userModel.create({
    name,
    email, 
    password

});
if(user){ 
    generateToken(res,user._id); 
    res.status(201).json({
        _id:user._id,
        name:user.name, 
        email:user.email
    }) 
   
    } else{
        res.status(400)
        throw new Error('invalide user data')

}

})


exports.logoutUser=asyncHandler(async(req,res)=>{
 
   
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0)

    })

    res.status(200).json({message:'User Logged out '})
})


 





exports.getUserProfile=asyncHandler(async(req,res)=>{

    res.status(200).json({message:'User Profile'})
})



exports.updateUserProfile=asyncHandler(async(req,res)=>{

const user=await userModel.findById(req.user._id)
if(user){
    user.name=req.body.name||user.name
    user.email=req.body.email||user.email
    if(req.body.password){
        user.password=req.body.password
    }
    const updatedUser=await user.save();

    res.status(200).json({
        _id:updatedUser._id,
        name:updatedUser.name,
        email:updatedUser.email 
    })

}
 

    
})