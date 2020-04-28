const express = require('express');
const router = express.Router();

const controladores = require('../controllers/index');

router.get('/', controladores.index);


module.exports = router;