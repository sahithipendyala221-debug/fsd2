var Library = {

    issueBook: function(bookName: string): void {
        console.log(bookName + " has been issued.");
    },

    returnBook: function(bookName: string): void {
        console.log(bookName + " has been returned.");
    },

    Fine: {

        calculateFine: function(daysLate: number): number {
            return daysLate * 20;
        }

    }

};

Library.issueBook("Java Programming");
Library.returnBook("Java Programming");

let fine: number = Library.Fine.calculateFine(5);
console.log("Fine = ₹" + fine);