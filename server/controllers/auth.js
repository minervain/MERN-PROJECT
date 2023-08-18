const AuthSchema=require('../models/auth.js')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')



const register=async(req,res)=>{
    try {

    const {username,password,email}=req.body;
    const user=await AuthSchema.findOne(email)


    if(user){
        return res.status(500).json({msg:'5böyle kullancı yok'})
    }

    if(password.length<6){
        return res.status(500).json({msg:'Şifreniz 6 karakterden küçük olmalı'})
    }
    const passwordHash=await bcrypt.hash(password,12);
    
    if(ValidateEmail(email)){
        return res.status(500).json({msg:'email formatında kullancı yok'})

    }
    const newUser=await AuthSchema.create({username,email,password:passwordHash})
    
    const token= jwt.sign({id:newUser._id}, "SECRET_KEY",{expiresIn:'1h'})

    res.status(201).json({
        status:"OK",
        newUser,
        token
    })
    

        
    } catch (error) {
        return res.status(500).json({msg: error.message})

        
    }
}

const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await AuthSchema.findOne(email)

        if(!user){
            return res.status(500).json({msg: 'Kullancıı bulunmadı'})

        }
        const passwordCompare=await bcrypt.compare(password,user.password)

        if(!passwordCompare){
            return res.status(500).json({msg: 'şifre yanlusss bulunmadı'})

        }
        const token= jwt.sign({id:newUser._id}, "SECRET_KEY",{expiresIn:'1h'})

        res.status(200).json({
            status:"OK",
            user,
            token
        })
        
    
        
    } catch (error) {
        return res.status(500).json({msg: error.message})

    }
}


function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      alert("Valid email address!");
  
      document.form1.text1.focus();
  
      return true;
  
    } else {
  
      alert("Invalid email address!");
  
      document.form1.text1.focus();
  
      return false;
  
    }
  
  }

module.exports={register,login}