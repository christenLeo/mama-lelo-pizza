import { BaseDataBase } from "../BaseDataBase";
import { IngredientsData } from "../IngredientsData";
import { PizzasData } from "../PizzasData";

export class Migrations extends BaseDataBase {
    
    public async execute () {
        try {
            console.log("Creating tables...");
            await this.createTables();
            console.log("Tables created!");

            console.log("Populating tables...");
            await this.insertData();
            console.log("Tables populated!");

            console.log("Migrations completed!");
        } 
        catch (error: any) {
            console.log("FAIL ON MIGRATIONS");    
            console.log(error.message);
        }
    };

    public async createTables () {
        await BaseDataBase.connection.raw(`

            DROP TABLE IF EXISTS "mama_lelo_ingredients_pizza"
            DROP TABLE IF EXISTS ${PizzasData.TABLE_PIZZAS};
            DROP TABLE IF EXISTS ${IngredientsData.TABLE_INGREDIENTS};

            CREATE TABLE IF NOT EXISTS ${PizzasData.TABLE_PIZZAS}(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE,
                price FLOAT NOT NULL
            );

            CREATE TABLE IF EXISTS ${IngredientsData.TABLE_INGREDIENTS}(
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE,
                qty INT NOT NULL
            );

        `);
    };

    public async insertData () {
        
    };

};