const express =require('express')
const router = express.Router()
const UserController =require('../Controllers/UserController')
router.post('/update',UserController.update) //bind the root /update to the function update
module.exports = router //allow the use of our router in the other modules 