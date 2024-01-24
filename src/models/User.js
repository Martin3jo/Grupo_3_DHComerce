
const { log } = require('console')
const fs = require('fs')
const User = {
    fileName : './database/users.json',
    getData : function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },
    findAll : function(){
        return this.getData
    },
    findByPk : function(id){
        let allUsers = this.findAll()
        let userFound = allUsers.find(oneUser => oneUser.id === id)
        return userFound
    },
    create : function(userData){

    }
}
console.log(User.findByPk("ff9b18e7-412b-46db-ad8b-7b147f57446b"));