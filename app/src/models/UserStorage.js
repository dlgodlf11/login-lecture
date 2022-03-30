"use strict";

class UserStorage{
    static #users = {
        id : ["dlgodlf11", "govkfl7788", "ghksl36"],
        psword : ["govkfl11", "govkfl1!", "tngkr2dlrglacor!"],
        name:["haeil", "lee", "hese"]
    };
    

     static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        return newUsers;
    }
}
module.exports = UserStorage;