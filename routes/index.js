const express = require('express')
const pointsRouter = require('./api/points')
const router = express.Router();

router.use('/api/points', pointsRouter);

module.exports = router;
