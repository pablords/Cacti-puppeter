const express = require('express');
const router = express.Router();
const CactiController = require('./src/Controllers/cactiController');




router.post('/alarmes', CactiController.alarmes);
router.post('/hosts-status', CactiController.hosts);
router.post('/logs', CactiController.logs);




module.exports = router;