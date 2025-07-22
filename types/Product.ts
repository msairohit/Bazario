export interface RentPlan {
    monthly: number;
    yearly: number;
}

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number; // 0 if only for rent
    image: string;
    category: string;
    isRentable: boolean;
    rent?: RentPlan;
    ownerId: string;
}
