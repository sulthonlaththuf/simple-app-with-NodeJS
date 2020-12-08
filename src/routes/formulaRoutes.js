const router = require('express').Router()

router.post('/bujur_sangkar', (req, res) => {

    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
   
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)
    res.json({panjang, lebar, luas, keliling})

    

})

module.exports = router