// Main Program

import { Ticket } from "./exp4a3.js";
import { Passenger } from "./exp4a2.js";

const traveller: Passenger = {
    name: "Rahul",
    age: 21,
    seatType: "Window"
};

const ticket = new Ticket(traveller, 800, 5050);

ticket.printTicket();