class LibraryBook {

    
    public title: string;
    public author: string;
    public price: number;
    public copies: number;

    
    constructor(title: string, author: string, price: number = 500, copies: number = 1) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.copies = copies;
    }

    
    public calculateValue(): number {
        return this.price * this.copies;
    }


    public displayDetails(): void {
        console.log("----- Library Book Details -----");
        console.log("Title       : " + this.title);
        console.log("Author      : " + this.author);
        console.log("Price       : ₹" + this.price);
        console.log("Copies      : " + this.copies);
        console.log("Total Value : ₹" + this.calculateValue());
        console.log("--------------------------------\n");
    }
}


const book1 = new LibraryBook("JavaScript Basics", "John Smith");


const book2 = new LibraryBook("Python Programming", "Alice Brown", 750, 4);


book1.displayDetails();
book2.displayDetails();


book2.copies = 5;

console.log("Updated Total Value: ₹" + book2.calculateValue());