const router = require("express").Router();
const Users = require('./auth-model');

 router.post('/register', (req, res) => {
    const email = req.body.email;
    if(!email) {
        res.status(400).json({ errorMessage: 'Requires email.' })
    } else {
        Users.addUser({email})
            .then(saved => {
                res.status(200).json(saved)
            })
            .catch(({message}) => {
                console.log(message)
                res.status(500).json({ error: message, message: 'Error adding user.' })
            })
    }
})

module.exports = router;