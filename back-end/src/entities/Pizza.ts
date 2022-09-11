export class Pizza {
    constructor (
        private id: string,
        private name: string,
        private price: number,
        private ingredients: string[]
    ) {};

    public getInfo () {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            ingredients: this.ingredients
        }
    };
};