const express = require("express");
const app = express();
const PORT = 3000;
app.get("/student/:id", (req, res) => {

    // Get the student ID from the URL
    const studentId = req.params.id;

    console.log("Student ID received:", studentId);

    res.send(`
        <h1>Student Profile</h1>
        <p>You are viewing the profile of Student ID:
        <strong>${studentId}</strong></p>
    `);
});
app.get("/course/:from/:to", (req, res) => {


    const { from, to } = req.params;

    console.log("Course request:", from, "to", to);

    res.send(`
        <h1>Course Information</h1>
        <p>Learning from
        <strong>${from}</strong>
        to
        <strong>${to}</strong>.
        </p>
    `);
});



app.get("/search", (req, res) => {

    // Get query parameters
    const category = req.query.category;
    const level = req.query.level;

    console.log("Search category:", category);
    console.log("Search level:", level);

    res.json({
        message: "Course Search Results",
        category: category || "All",
        level: level || "All"
    });
});

app.listen(PORT, () => {

    console.log(
        `Dynamic server is running at http://localhost:${PORT}`
    );

});
