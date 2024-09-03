const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class ImgFoodController {
    async update(request, response) {
        const { id } = request.params;
        const imgFilename = request.file.filename;

        const diskStorage = new DiskStorage();
        
        const food = await knex("foods")
            .where({ id }).first();

        if (food.image) {
            await diskStorage.deleteFile(food.image);
        }

        const filename = await diskStorage.saveFile(imgFilename);
        food.image = filename;

        await knex("foods").update(food).where({ id });

        return response.json();
    }
}

module.exports = ImgFoodController;