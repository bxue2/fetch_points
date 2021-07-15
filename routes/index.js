const express = require('express')
const pointsRouter = require('./api/points')
const router = express.Router();

router.use('/api/points', pointsRouter);

//Add error catcher for bad requests
router.use((req, res) => {
    console.log("Test")
    res.sendStatus(404);
})

module.exports = router;
