const express = require('express');
const router = express.Router();
const fakeDb = require('../../fake_db/Db')

router.get("/", (req, res) => {
    fakeDb.print_test();
    return res.status(200).send({
        message: 'Printed test route'
    })
})

module.exports = router;
