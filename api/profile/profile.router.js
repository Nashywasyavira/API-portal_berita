const {
    controllerAddProfile,
    controllerGetProfile,
    controllerGetProfileById,
    controllerUpdateProfile,
    controllerDeleteProfile,
    controllerLogin } = require("./profile.controller");

const router = require("express").Router();
const {checkToken} = require("../../auth/token.validation")

router.post("/", controllerAddProfile);
router.get("/", checkToken, controllerGetProfile);
router.get("/id", checkToken, controllerGetProfileById);
router.patch("/", checkToken, controllerUpdateProfile);
router.delete("/", checkToken, controllerDeleteProfile);
router.post("/login", controllerLogin);

module.exports = router;