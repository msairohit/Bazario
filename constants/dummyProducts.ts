// Dummy product list (buy/sell + rental)

const products = [
    {
        id: "1",
        title: "Used Microwave Oven",
        description: "Perfect working condition, 800W",
        price: 2500,
        image: "https://via.placeholder.com/300x200.png?text=Microwave",
        category: "Kitchen",
        isRentable: false,
        ownerId: "u1",
    },
    {
        id: "2",
        title: "Sofa Set - 3 Seater",
        description: "Gently used, very comfortable.",
        price: 5000,
        image: "https://via.placeholder.com/300x200.png?text=Sofa",
        category: "Furniture",
        isRentable: true,
        rent: {
            monthly: 500,
            yearly: 5000,
        },
        ownerId: "u2",
    },
    {
        id: "3",
        title: "Honda Activa 5G",
        description: "Well maintained scooter, low mileage.",
        price: 28000,
        image: "https://via.placeholder.com/300x200.png?text=Honda+Activa",
        category: "Vehicles",
        isRentable: true,
        rent: {
            monthly: 1500,
            yearly: 15000,
        },
        ownerId: "u3",
    },
    {
        id: "4",
        title: "1BHK Apartment for Rent",
        description: "Spacious flat near metro station.",
        price: 0,
        image: "https://via.placeholder.com/300x200.png?text=Apartment",
        category: "Real Estate",
        isRentable: true,
        rent: {
            monthly: 9000,
            yearly: 100000,
        },
        ownerId: "u4",
    },
];

export default products;
