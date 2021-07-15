const express = require('express');
const router = express.Router();
const fake_db = require('../../fake_db/Db')

router.get("/", (req, res) => {
    fake_db.print_test();
    return res.status(200).send({
        message: 'Printed test route'
    })
})

module.exports = router;
