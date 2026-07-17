"use strict";
let bookTitle = "Echoes of Time";
let pageCount = 320;
let isBestSeller = true;
let genres = ["Sci-Fi", "Mystery", "Thriller"];
let authorDetails = {
    id: 88,
    writerName: "Evelyn Reed"
};
function formatBookDescription(title, author) {
    return `${title} written by ${author}`;
}
const printMarketStatus = (tags, topRated) => {
    console.log("Categories: " + tags.join(" | "));
    console.log("Award Winning: " + (topRated ? "Yes, Premium Choice" : "No"));
};
console.log(formatBookDescription(bookTitle, authorDetails.writerName));
printMarketStatus(genres, isBestSeller);
