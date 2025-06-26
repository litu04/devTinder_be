const express = require('express');
const { adminAuth, userAuth } = require('./middlewares/auth');

const app = express();

app.use("/admin", adminAuth);

app.get("/user/getUserData", userAuth, (req,res) => {
    res.send("get user data");
});

app.post("/user/login", (req,res) => {
    res.send("login done");
});

app.get("/admin/getAdminData", (req,res) => {
    res.send("All admin data");
});

app.get("/admin/deleteAdmin", (req,res) => {
    res.send("delete admin");
});

app.listen(8000, () => {
    console.log("server is up and running on PORT: 8000");
});