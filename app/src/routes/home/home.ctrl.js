"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
     hello  :  (req, res)=>{
        res.render("home/index");
    },
    
     login : (req, res)=>{
        res.render("home/login");
    }
    
};

const process = {
    login:(req, res)=>{
        const id = req.body.id,
        psword = req.body.psword;
        const users = UserStorage.getUsers("id", "psword");
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success:true
                });
            }
        }
        return res.json({success:false});
    }
};



module.exports = {
   output,
   process
};


