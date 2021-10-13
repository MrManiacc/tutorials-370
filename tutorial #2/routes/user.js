require("dotenv/config");
const joi = require("joi");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {User} = require("../util/model");
const key = process.env.SECRET_KEY
const auth = require("../util/auth")

/**
 * This is used to register the user. This will send the request to the database using the schema
 */
router.post('/signup', async (req, res) => {
    const schema = joi.object({
        name: joi.string().min(3).max(30).required(),
        email: joi.string().min(3).max(200).email().required(),
        password: joi.string().min(6).max(200).required()
    })
    const {error} = schema.validate(req.body);
    if (error) res.status(400).json({message: error.details[0].message});
    else {
        try {
            let user = await User.findOne({email: req.body.email})
            if (user) return res.status(400).json({message: "User with that email already exists."})
            const {name, email, password} = req.body;
            user = new User({name, email, password})
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
            await user.save()
            const token = jwt.sign({_id: user._id, name: user.name, email: user.email}, key);
            res.status(200).json({message: "Registered and logged in user", token: token})
        } catch (error) {
            res.status(200).json({message: error.message})
            console.log(error.message)
        }
    }
});

/**
 * This is used for signing in the user by connecting to the database. it also does validation on the password
 * and email using joi and will send back the appropriate response and status if there is an error.
 */
router.post('/signin', async (req, res) => {
    const schema = joi.object({
        email: joi.string().min(3).max(200).email().required(),
        password: joi.string().min(6).max(200).required()
    })
    const {error} = schema.validate(req.body);
    if (error) res.status(400).json({message: error.details[0].message});
    try {
        let user = await User.findOne({email: req.body.email});
        if (!user) res.status(400).json({message: "Invalid email or password..."})
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).json({message: "Invalid email or password..."})
        const token = jwt.sign({_id: user._id, name: user.name, email: user.email}, key);
        res.status(200).json({message: "Logged in user", token: token})
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log(error.message);
    }
})


module.exports = router;

