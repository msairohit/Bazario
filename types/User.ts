export interface User {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
    phone?: string;
    location?: string;
    listings: string[]; // Product IDs
}
