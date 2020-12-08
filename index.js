const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const router = (args) => {
    return require("./src/routes/" + args)
}

app.use('/profile', router('profileRoutes'))
app.use('/formula', router('formulaRoutes'))

app.listen(3000, () => {
    console.log('server is running on port 3000')
})