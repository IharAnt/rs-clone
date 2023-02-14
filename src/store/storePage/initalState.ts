import { typeStorePage } from "../types/types";

const initalState: typeStorePage = {
    basketProducts: [{
        product: {
            id: '1',
            title: 'iPhone 9',
            description: 'An apple mobile which is nothing like apple',
            price: 549,
            brand: 'Apple',
            category: 'smartphones',
            thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        },
        count: 1
    }]
}

export default initalState;
