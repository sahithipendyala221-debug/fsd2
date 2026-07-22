// Passenger Interface

export interface Passenger {
    name: string;
    age: number;
    seatType?: "Window" | "Middle" | "Aisle";
}