const { Router, response } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const FoodsController = require("../controllers/FoodsController");
const ImgFoodController = require("../controllers/ImgFoodController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const foodsRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const foodsController = new FoodsController();
const imgFoodController = new ImgFoodController();

foodsRoutes.use(ensureAuthenticated);

foodsRoutes.get("/", foodsController.index);
foodsRoutes.post("/", foodsController.create);
foodsRoutes.get("/:id", foodsController.show);
foodsRoutes.delete("/:id", foodsController.delete);
foodsRoutes.patch("/:id", foodsController.update);
foodsRoutes.patch("/img_food/:id", ensureAuthenticated, upload.single("img_food"), imgFoodController.update);

module.exports = foodsRoutes;