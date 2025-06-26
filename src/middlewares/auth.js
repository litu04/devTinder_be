const adminAuth = (req,res,next) => {
    const adminToken = "xyz";
    const isAdminToken = adminToken === "xyzsd"
    console.log("admin auth checked");
    if (!isAdminToken) {
        res.status(401).send("Unauthorized admin");
    } else {
        next();
    }
}

const userAuth = (req,res,next) => {
    const userToken = "xyz";
    const isUser = userToken === "xyz";
    console.log("user auth checked");
    if (!isUser){
        res.status(401).send("Unauthorized user");
    } else {
        next();
    }
}

module.exports = { adminAuth, userAuth };