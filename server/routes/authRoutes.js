const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const requireAuth = require("../middleware/authMiddleware");
const Upload = require("../middleware/uploadMiddleWare")
router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/logout", authController.logout);
router.get("/", requireAuth, authController.getUser);
router.post("/userimg",requireAuth,Upload.single('profileImg'),authController.UploadImage)
router.get("/postLike/:ProductID", requireAuth, authController.postLike);
router.get("/product/:ProductID", authController.ProductLikes);
router.get("/saveart/:ProductID", requireAuth, authController.saveArt);
router.get("/:node",authController.artifactInfo);
module.exports = router;
