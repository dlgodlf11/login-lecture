"use strict";

const users = {
    id : ["dlgodlf11", "govkfl7788", "ghksl36"],
    psword : ["govkfl11", "govkfl1!", "tngkr2dlrglacor!"]
};

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


