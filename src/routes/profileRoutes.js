const router = require('express').Router()

router.get('/:name/:age', (req, res) => {
    const {name, age} = req.params
    const data = {
        name, age
    }
    res.json(data)
})

module.exports = router