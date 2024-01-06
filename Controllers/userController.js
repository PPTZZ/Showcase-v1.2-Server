import { userProfile } from "../Models/userForm.js";
import jsonwebtoken from 'jsonwebtoken';




const createToken = (_id)=>{
    return jsonwebtoken.sign({_id}, process.env.SECRET, { expiresIn:'3d'});
}

// login
export const loginUser = async (req,res)=> {

    const { email, password}= req.body;
    

    try {
        const user = await userProfile.login(email,password);

        const token = createToken(user._id);

        res.status(200).json({email, token});

    } catch (error) {

        res.status(400).json({error: error.message});
    }

   
}

// signup

export const register = async (req,res)=> {

    const {email, password } = req.body;

    try{
        const user = await userProfile.signup(email, password);

        const token = createToken(user._id);

        res.status(200).json({email, token});

    } catch(err) {

        res.status(400).json({error: err.message});
    }
}