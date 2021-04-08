import ProductsI from "./products";

const server = 'localhost:3001/public/images/'

const data: Array<ProductsI> = [
    {
        id: 1,
        name: "Cazuela de mariscos",
        category: "Comida de Mar",
        images: [
            "https://res.cloudinary.com/kentruri/image/upload/v1615487760/primera_lfo4ae.png",
        ],
        price: 25000,
        discount: 0,
    },
    {
        id: 2,
        name: "Hamburguesa Angus 200gr",
        category: "Comida Rapida",
        images: [
            "https://res.cloudinary.com/kentruri/image/upload/v1615487760/primera_lfo4ae.png",
        ],
        price: 15000,
        discount: 0,
    },
    {
        id: 3,
        name: "Perro Caliente",
        category: "Comida Rapida",
        images: [
            "https://res.cloudinary.com/kentruri/image/upload/v1615487760/primera_lfo4ae.png",
        ],
        price: 10000,
        discount: 0,
    },
    {
        id: 4,
        name: "Malteada de fresa 300 Oz",
        category: "Comida Rapida",
        images: [
            "https://res.cloudinary.com/kentruri/image/upload/v1615487760/primera_lfo4ae.png",
        ],
        price: 7000,
        discount: 5,
    },
];
export default data
