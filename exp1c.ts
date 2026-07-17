let bookTitle: string = "Echoes of Time";
let pageCount: number = 320;
let isBestSeller: boolean = true;
let genres: string[] = ["Sci-Fi", "Mystery", "Thriller"];

let authorDetails: { id: number; writerName: string } = {
    id: 88,
    writerName: "Evelyn Reed"
};

function formatBookDescription(title: string, author: string): string {
    return `${title} written by ${author}`;
}

const printMarketStatus = (tags: string[], topRated: boolean): void => {
    console.log("Categories: " + tags.join(" | "));
    console.log("Award Winning: " + (topRated ? "Yes, Premium Choice" : "No"));
};

console.log(formatBookDescription(bookTitle, authorDetails.writerName));
printMarketStatus(genres, isBestSeller);