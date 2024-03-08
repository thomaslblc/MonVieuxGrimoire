const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');

router.get('/', stuffCtrl.getAllThings);
router.get('/bestrating', stuffCtrl.bestRatings);
router.post('/', auth, multer, stuffCtrl.createThing);
router.get('/:id', stuffCtrl.getOneThing);
router.post('/:id/rating', auth, stuffCtrl.rateThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;