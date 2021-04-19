const express = require ("express");
const router = express.Router();
const radarCtrl = require ('../controllers/shootingPoint')


// Create POST Route
router.post('/', radarCtrl.returnShootingPoint);





module.exports = router
