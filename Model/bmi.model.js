const mongoose=require('mongoose')
const bmiSchema=mongoose.Schema({
    Name:String,
    Gender:String,
    Age:Number,
    Height:Number,
    Weight:Number,
    BMI:String,
    email:String
})
const bmiModel=mongoose.model('bmi',bmiSchema)
module.exports=bmiModel
