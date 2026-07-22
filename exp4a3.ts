// Ticket Logic

import { GST_RATE, SERVICE_CHARGE } from "./exp4a1.js";
import { Passenger } from "./exp4a2.js";

export class Ticket {

    constructor(
        public passenger: Passenger,
        private baseFare: number,
        public busNumber: number
    ) { }

    public calculateFare(): number {
        const gst = this.baseFare * GST_RATE;
        return this.baseFare + gst + SERVICE_CHARGE;
    }

    public printTicket(): void {
        console.log("------ Bus Ticket ------");
        console.log("Passenger : " + this.passenger.name);
        console.log("Age       : " + this.passenger.age);

        if (this.passenger.seatType) {
            console.log("Seat Type : " + this.passenger.seatType);
        }

        console.log("Bus No    : " + this.busNumber);
        console.log("Base Fare : ₹" + this.baseFare);
        console.log("Total Fare: ₹" + this.calculateFare());
        console.log("------------------------");
    }
}