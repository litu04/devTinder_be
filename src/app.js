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

app.get("/feedcd", (req, res) => {
    console.log("params--->", req.params);
    res.send("get all feeds");
});

app.use('/seed', (req,res, next) => {
    console.log("route 1 from server");
    // res.send("router 1");
    next();
}, (req,res, next) => {
    console.log("route 2 from server");
    // res.send("router 2");
    next();
}, [(req,res,next) => {
    console.log("route 3 from server");
    // res.send("router 3");
    next();
}, (req,res,next) => {
    console.log("route 4 from server");
    // res.send("router 4");
    next();
}, (req,res,next) => {
    console.log("route 5 from server");
    // res.send("router 5");
    next();
}], (req,res,next) => {
    console.log("route 6 from server");
    res.send("router 6");
})

app.listen(8000, () => {
    console.log("server is up and running on PORT: 8000");
});