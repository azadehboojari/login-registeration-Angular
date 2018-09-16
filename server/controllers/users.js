var User = require('../models/user');
// let user =require('mongoose').model("User")

class UserController{
    findAll(req, res){
        var data=User.find({}, function(err, data){
            if (err){
                console("errors")
                return res.json(err);
            } else{
                return res.json(data);
            }
        })
    }

    register(req, res){
        User.findOne({email: req.body.email}, (err, user)=>{
            if (user){
                return res.json({errors:"Email already been used"})
            } else{
                var user= new User(req.body);
                console.log(user)
                user.save((err)=>{
                    if (err){
                        return res.json({errors:user.errors});
                    } else{
                        return res.json(user);
                    }
                });
                
            }
        })  
    }

    login(req, res){
        User.findOne({email:req.body.email}, function(err, user){
            if (!user){
                return res.json({errors:"No user exist"});
            }else{
                if (user.password == req.body.password){
                    req.session.user_id=user.id;
                    return res.json(user); 
                }else{
                    return res.json({errors:"Password does not match"})
                }  
                
            }
        })
    }


    logout (req, res){
        req.session.user_id = null;
        return res.json(false)
    }
    session(req, res){
        if (req.session.user_id){
            User.findById({_id:req.session.user_id}, (err, user)=>{
                if (user){
                    return res.json(user)
                    
                } else {
                    return res.json ({errors:"Fail to validate"})
                }
            })
            } else {
                return res.json({errors:"Invalid"})
        
    }
}
    
    

}

module.exports=new UserController()