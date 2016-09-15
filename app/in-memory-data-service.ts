import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let storeItems = [
            {
                id: 1,
                name: "apple",
                category: "fruit",
                pic: "img/apple.svg",
                price: 0.5,
                inStock: 30,
                quantity: 1,
                total: 0
            },
            {
                id: 2,
                name: "pineapple",
                category: "fruit",
                pic: "img/pineapple.svg",
                price: 2.5,
                inStock: 15,
                quantity: 2,
                total: 0
            },
            {
                id: 3,
                name: "corn",
                category: "vegetable",
                pic: "img/corn.svg",
                price: 4,
                inStock: 20,
                quantity: 0,
                total: 0
            },
            {
                id: 4,
                name: "swiss cheese",
                category: "dairy",
                pic: "img/cheese.svg",
                price: 1,
                inStock: 40,
                quantity: 0,
                total: 0
            }
        ];
        return {storeItems};
    }

}