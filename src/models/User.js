
const path=require('path')
const fs = require('fs')

const User = {
    fileName : path.join(__dirname,'../database/users.json'),
    getData : function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },
    findAll : function(){
        return this.getData()
    },
    findByPk : function(id){
        let allUsers = this.findAll()
        let userFound = allUsers.find(oneUser => oneUser.id === id)
        return userFound
    },
    findByField : function(field, text){
        let allUsers = this.findAll()
        let userFound = allUsers.find(oneUser => oneUser[field] === text)
        return userFound
    },
    create : function(userData){
        let allUsers = this.findAll();
        allUsers.push(userData)
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, '   '))
        return true
    }
}

module.exports = User;