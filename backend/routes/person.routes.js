const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken')
const Person = require('../models/person.js');
 

//------------------add--------------------//
router.post('/add',passport.authenticate('jwt', { session: false }), (req,res)=>{
  let person = new Person ({
     first_name: req.body.first_name,
     last_name: req.body.last_name,
     address: req.body.address,
     isActive: req.body.isActive
  });
 
  person.save((err,person)=>{
    
    if(err){
       // throw err;
        return  res.send({
            success : false,
            message : 'Error , try again '
        });
    }
    if(!person) {
        return  res.send({
              success : false,
              message : 'failed to save this user '
          });
      }
      console.log(person);
      return res.send({
           success : true,
           person,
           message : 'this user is saved'
       });
  });
  })


//------------------list--------------------//
router.post('/list', passport.authenticate('jwt', { session: false }),(req,res)=>{
       const owner= req.body.last_name;
        Person.find({owner}, (err,person)=>{
        
         if(err){
           return res.json({
            success:false,
            message:'Error'
           })
          }
          return res.json({
          success:true,
          person
         })
        })
})


//-----------------delete-------------------//
router.delete('/remove/:id', passport.authenticate('jwt', { session: false }),(req,res) => {
    const Id = req.params.id;
    Person.remove({ _id: Id }, (err) => {
        if(err) {
          return res.json({
            success: false,
            message: 'Failed to delete the person'
          });
        }
  
        return res.json({
          success: true,
          message: 'person deleted'
        });
    });
  })

//------------------update-----------------//
router.put('/update/:id', (req,res) => {
    Person.findOneAndUpdate({_id: req.params.id} , req.body).then(res => {
      if (res) {
        
        res.status(200).json({ message :"update success"});
        
      } else {
        res.status(500).json({ message :"error"})
     } 
    });
    });

module.exports=router;