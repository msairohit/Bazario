export interface RentalItem {
    rentalId: string;
    productId: string;
    renterId: string;
    startDate: string; // ISO format
    endDate: string;
    price: number;
    status: "active" | "pending" | "completed" | "cancelled";
}
