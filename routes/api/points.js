const express = require('express');
const router = express.Router();
const fakeDb = require('../../fake_db/Db')

router.get("/", (req, res) => {
    fakeDb.print_test();
    return res.status(200).send({
        message: 'Printed test route'
    })
})

//Add transaction route
router.post("/add", (req, res) => {
    return res.status(200).send({
        message: 'Added points'
    })
})

//Spend points route
router.post("/spend", (req, res) => {
    return res.status(200).send({
        message: 'Spent points'
    })
})

//Route for getting all users
router.get("/all", (req, res) => {
    return res.status(200).send({
        message: 'Returning points'
    })
})

module.exports = router;
