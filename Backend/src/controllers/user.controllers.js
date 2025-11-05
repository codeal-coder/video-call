import status from "http-status";
import {User} from "../models/user.model.js"
import bcrypt,{hash} from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";




const register = async(req,res)=>{
    try {
        const{name,username,password} = req.body;

        const existingUser = await User.findOne({username});
        
        if (existingUser) {
           return res.status(status.FOUND).json({message:"User Already Exist"});
        }

        const hashPassword = await bcrypt.hash(password,10)

        //const newUser = await User.create({name:name,username:username,password:hashPassword});
        const newUser = new User({
            name:name,
            username:username,
            password:hashPassword,
        })

        await newUser.save();
        //console.log("newUser",newUser);
        
        return res.status(status.CREATED).json({message:"User Register Successfully",data:newUser})

    } catch (error) {
        console.log("new user error:",error);
        return res.status(500).json({message:"Failed to Register"});
        
        
    }
}

const login = async(req,res)=>{
    try {
        const{username,password} = req.body;
    
        if (!username || !password) {
            return res.status(status.NOT_FOUND).json({message:"please provide required Resources"});
        }

        //check if user exist or not
        const user =await User.findOne({username});
        if(!user){
            return res.status(status.NOT_FOUND).json({message:"user not exist"});
        }
        const correctPassword = await bcrypt.compare(password,user.password);
        //compare passeword and generate token
        if(correctPassword){
            // jsonwebtoken Approach
            // const payload = {
            //     username:user.username,
            //     id:user._id,
            // }
            // const token = jwt.sign(payload,process.env.JWT_SECERT,{
            //     expiresIn:"24h"
            // })

            let token = crypto.randomBytes(20).toString("hex");

            user.token = token;
            await user.save();
            return res.status(status.OK).json({token:token});

        }else {
            return res.status(status.UNAUTHORIZED).json({ message: "Invalid Username or password" })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Somthing went wrong"})
        
    }
}

export {login,register};