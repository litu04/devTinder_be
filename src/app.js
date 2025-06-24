const express = require('express');

const app = express();

app.use("/test", (req, res) => {
    res.send("Hello user");
});

app.use("/home", (req, res) => {
    res.send("Hello pokemon!");
});

app.use("/hello", (req, res) => {
    res.send("hello from the server!");
})

app.get("/user", (req, res) => {
    res.send("get all users");
});

app.post("/user", (req, res) => {
    console.log("req body----> ", req.body);
    res.send("Post all users");
});

app.delete("/user", (req, res) => {
    res.send("delete all users");
});

app.listen(8000, () => {
    console.log("server is up and running on PORT: 8000");
});