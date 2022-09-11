import { IIngredientDB } from "../../model/Ingredient";
import { IPizzaDB } from "../../model/Pizza";
import { IdGenerator } from "../../services/IdGenerator";

const idGenerator: IdGenerator = new IdGenerator();

export const pizzas: IPizzaDB[] = [
    {
        id: idGenerator.generateId(),
        name: "Margherita",
        price: 5
    },
    {
        id: idGenerator.generateId(),
        name: "Bufala",
        price: 6
    },
    {
        id: idGenerator.generateId(),
        name: "Romana",
        price: 5
    },
    {
        id: idGenerator.generateId(),
        name: "Diavola",
        price: 7.5
    },
    {
        id: idGenerator.generateId(),
        name: "Pizza Bianca",
        price: 5
    }
];

export const ingredients: IIngredientDB[] = [
    {
        id: idGenerator.generateId(),
        name: "tomato",
        qty: 0
    },
    {    
        id: idGenerator.generateId(),
        name: "mozarella di bufala",
        qty: 0
    }, 
    {
        id: idGenerator.generateId(),
        name: "mozzarella",
        qty: 0
    },
    {
        id: idGenerator.generateId(),    
        name: "anchovies",
        qty: 0
    },
    {   
        id: idGenerator.generateId(), 
        name: "oregano",
        qty: 0
    }, 
    {
        id: idGenerator.generateId(),
        name: "oil",
        qty: 0
    },
    {
        id: idGenerator.generateId(),
        name: "spicy salami",
        qty: 0
    }    
];