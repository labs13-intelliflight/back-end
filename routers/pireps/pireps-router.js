const router = require('express').Router();

const Pireps = require('./pireps-model');

router.get('/', (req, res) => {
    Pireps.getPireps()
        .then(pireps => {
            res.status(200).json(pireps)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Cannot retrieve pireps from database.' })
        })
})

module.exports = router;