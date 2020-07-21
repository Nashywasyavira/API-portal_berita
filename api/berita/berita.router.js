const{
    controllerAddBerita,
    controllerGetBerita,
    controllerGetBeritaById,
    controllerUpdateBerita,
    controllerDeleteBerita } = require('./berita.controller');

const router = require('express').Router();
const {checkToken} = require("../../auth/token.validation")

router.post('/', checkToken , controllerAddBerita);
router.get('/', controllerGetBerita);
router.get('/id', controllerGetBeritaById);
router.patch('/',checkToken, controllerUpdateBerita);
router.delete('/',checkToken, controllerDeleteBerita);

module.exports = router;