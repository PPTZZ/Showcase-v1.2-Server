import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';
import validator from 'validator'

const userProfileSchema = new Schema ({
    email: {
        type:String,
        required:true,
        unique:true
    },
    password: {
        type:String,
        required:true
    },
    joined:{
        type: Date,
        default: Date.now
    }
});


// static signup method

userProfileSchema.statics.signup = async function(email, password){

    if (!email || !password){
        throw Error('All fields must be completed');
    }
    if(!validator.isEmail(email)){
        throw Error('Email is invalid');
    }
    
    const exists = await this.findOne({ email });
    if(exists){
        throw Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({email, password:hash});

    return user

}

// static login method

userProfileSchema.statics.login = async function(email,password){

    if (!email || !password){
        throw Error('All fields must be completed');
    }

    const user = await this.findOne({email});

    if(!user){
        throw Error('Invalid credentials');
    }

    const match  = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error ('Invalid credentials')
    }

    return user
}


export const userProfile = model('userProfile', userProfileSchema);