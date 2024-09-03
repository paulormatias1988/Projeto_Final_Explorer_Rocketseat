const knex = require("../database/knex");

class FoodsController {
    async create(request, response) {
        const { name, category, price, description, ingredients } = request.body;
        const user_id = request.user.id;

        const [food_id] = await knex("foods").insert({
            name,
            category,
            price,
            description,
            user_id
        });

        const ingredientsInsert = ingredients.map(ingredient => {
            return {
                food_id,
                ingredient: ingredient,
                user_id
            }
        });

        await knex("ingredients").insert(ingredientsInsert);

        response.json(food_id);
    }

    async show(request, response) {
        const { id } = request.params;
        const food = await knex("foods").where({ id }).first();
        const ingredients = await knex("ingredients").where({ food_id: id }).orderBy("ingredient");

        return response.json({
            ...food,
            ingredients
        });
    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("foods").where({ id }).delete();

        return response.json();
    }

    async index(request, response) {
        const { name, ingredients } = request.query;
        //const user_id = request.user.id;

        let foods;

        if (ingredients) {
            const filterIngredients = ingredients.split(",").map(ingredient => ingredient.trim());

            foods = await knex("ingredients")
                .select([
                    "foods.id",
                    "foods.name",
                    //"foods.user_id",
                ])
                //.where("foods.user_id", user_id)
                .whereLike("foods.name", `%${name}%`)
                .whereIn("ingredient", filterIngredients)
                .innerJoin("foods", "foods.id", "ingredients.food_id")
                .orderBy("foods.name");
        } else {
            foods = await knex("foods")
                //.where({ user_id })
                .whereLike("name", `%${name}%`)
                .orderBy("name");
        }

        /*const foodsWithIngredients = foods.map(food => {
            const foodIngredients = userIngredients.filter(ingredient => ingredient.food_id === food.id);

            return {
                ...food,
                ingredients: foodIngredients
            }
        })*/

        return response.json(foods);
    }

    async update(request, response) {
        const { id } = request.params;
        const { name, category, price, description, ingredients } = request.body;
        const user_id = request.user.id;

        const food = await knex("foods")
            .where({ id }).first();

        food.user_id = user_id;
        food.name = name;
        food.category = category;
        food.price = price;
        food.description = description;
        food.updated_at = Date.now();

        const ingredientsDB = await knex("ingredients").where({ food_id: id })

        ingredientsDB.forEach(async function (item) {
            if (!ingredients.includes(item.ingredient)) {
                await knex("ingredients").delete(ingredientsDB).where({ id: item.id });
            }
        });

        const ingredientsInsert = ingredients
            .filter(ingredient => !ingredientsDB.some(item => item.ingredient === ingredient))
            .map(ingredient => ({
                food_id: id,
                ingredient: ingredient,
                user_id
            }));

        if (ingredientsInsert.length > 0) {
            await knex("ingredients").insert(ingredientsInsert);
        }

        await knex("foods").update(food).where({ id });

        return response.json();
    }
}

module.exports = FoodsController;