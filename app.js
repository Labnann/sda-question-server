const express = require("express");
const mongoose = require("mongoose");  
const restrictOrigins = require("./restrictOrigins");
const functions = require("./functions")

require("dotenv").config();   // Require the dotenv
const app = express();
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database connection Success!");
    })
    .catch((err) => {
        console.error("Mongo Connection Error", err);
    });

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded());
app.use(restrictOrigins);

//Define the endpoint
app.post("/write", (req, res) => {
    const written = functions.write(req);
    return res.send("Write Performed to Questions");
});

app.get("/read/:id", async (req, res) => {
    return res.json({
      server: "QuestionServer",
      data: await functions.read(req.params.id)
    });
});


app.listen(PORT, () => {
    console.log("Server started listening on port : ", PORT);
});