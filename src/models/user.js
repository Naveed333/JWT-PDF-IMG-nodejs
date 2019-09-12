const mongoose = require('mongoose')
const validate = require('validator')
const bcrypt = require ('bcryptjs')
const jwt  = require('jsonwebtoken')
const Task = require('./task')

const userShema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    age:{
        type: Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error ('Age must be positive')
            }
        }
    },
    email:{
        unique:true,
        type: String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validate.isEmail(value)){
                throw new Error ('Email not in formate')
            }
        }
    },
    Discription:{
        type: String
    },
    task:{
        type: Boolean
    },
    password:{
        type:String,
        required:true,
        minlength:7,
        trim:true,
        validate(vale){
            if(vale.toLowerCase().includes('passwrd')){
                throw new Error ('passord not use')
            }
        }
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }],
    avatar:{
        type:Buffer
    }
},{
    timestamps:true
})

userShema.methods.toJSON =  function(){
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

userShema.methods.generateAuthTok = async function(){
    const user = this
    // console.log(user)
    const token = jwt.sign({ _id: user._id.toString() },'thisismynewcourse')
    
    user.tokens = user.tokens.concat({token})

    await user.save()

    return token
}


userShema.statics.findByCredentials = async (email,password)=>{
    const user = await User.findOne({email})

    if(!user){
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error('Unable to login')
    }
    return user
}
// Middleware
// hash the password befor saving

userShema.pre('save', async function(next){
      const user = this

    console.log('Just before save')

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
        console.log(user.password)
    }
    next()
})

const User = mongoose.model('User',userShema)
module.exports = User