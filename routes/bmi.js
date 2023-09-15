var express = require('express');
var router = express.Router();
var BmiModel=require('../Model/bmi.model')
router.post('/',(req,res)=>{
  let newBmi=new BmiModel({
    Name:req.body.Name,
    Gender:req.body.Gender,
    Age:req.body.Age,
    Height:req.body.Height,
    Weight:req.body.Weight,
    BMI:req.body.BMI,
    email:req.body.email
})
  newBmi.save()
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
})
  router.get('/',(req,res)=>{
    BmiModel.find()
    .then(response=>{
      res.send(response)
    })
    .catch(err=>{
      res.send(err)
    })
  })
  router.put('/:id',(req,res)=>{
    
    BmiModel.findByIdAndUpdate(req.params.id,{
        Name:req.body.Name,
        Gender:req.body.Gender,
        Age:req.body.Age,
        Height:req.body.Height,
        Weight:req.body.Weight,
        BMI:req.body.BMI
    })
    
    .then(response=>{
      res.send(response)
    })
    .catch(err=>{
      res.send(err)
    })
  })
  router.delete('/:id',(req,res)=>{
    const idQuery=req.params.id
    BmiModel.findByIdAndDelete(idQuery)
    .then(response=>{
      res.send(response)
    })
    .catch(err=>{
      res.send(err)
    })
  })

module.exports = router