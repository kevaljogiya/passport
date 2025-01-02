const express =require("express");
const route = express.Router();
const ctl = require("../controller/ctl");
const multer = require('../multer/multer');
const passportSt = require("../middlware/passport");
const passport =require("passport");

route.get("/",ctl.login);
route.post(
    "/userLogin",
    passport.authenticate("local",{failureRedirect: "/"}),
    ctl.userLogin
);
route.get("/logout",ctl.logout)
route.get("/Dashbord",passport.checkAuth,ctl.Dashbord);
route.get("/Addadmin",passport.checkAuth,ctl.Addadmin);
route.post("/AddData", multer,ctl.AddData);
route.get("/Viewadmin",passport.checkAuth,ctl.Viewadmin);
route.get("/delete",ctl.DeleteData);
route.get("/edit",ctl.EditData);
route.post("/update", multer,ctl.UpdateData);


module.exports = route;





