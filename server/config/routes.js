let path   = require("path");
var UserController=require('../controllers/users');

module.exports= function(app){
app.post('/register', UserController.register);
app.post('/login', UserController.login);
app.get("/all", UserController.findAll);
app.get('/session', UserController.session);
app.get('/logout', UserController.logout);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}