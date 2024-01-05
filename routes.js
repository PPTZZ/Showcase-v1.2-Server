import express from 'express'

const routes = express.Router()

routes.get('/',(req,res)=>{})

routes.post('/register', async (req, res) => {
    const { name, email, password} = req.body;

    try {
        const user = await userProfile.create({ name, email, password});
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

})

module.exports = routes