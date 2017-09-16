export class Product {
    quantity: number;
    name: string;
    description: string;
    imagePath: string;
    price: string;

    constructor(quantity: number, name: string,
        description: string, imagePath: string, price: string) {
        this.quantity = quantity;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.price = price;
    }
}
