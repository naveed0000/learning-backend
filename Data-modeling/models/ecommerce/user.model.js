import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username : { 
        type: String, 
        required: true, 
        unique: true,
        lowercase: true,
    }, 
    email: { 
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    }, 
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
/* 
    how you think is imp
    
    first created schema which is independant 
    second created schema which is depandant one, 
    thrid created schema which is depandant two, 
    and so on 
*/