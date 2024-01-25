
const path=require('path')
const fs = require('fs')

const Productos = {
    fileName : path.join(__dirname,'../database/productosCarritoDB.json'),
    getData : function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },
    findAll : function(){
        return this.getData()
    },
    findByPk : function(id){
        let allProducts = this.findAll()
        let productFound = allProducts.find(oneProduct => oneProduct.id === id)
        return productFound
    },
    findByField : function(field, text){
        let allProducts = this.findAll()
        let productFound = allProducts.find(oneProduct => oneProduct[field] === text)
        return productFound
    },
    create : function(productData){
        let allProducts = this.findAll();
        allProducts.push(productData)
        fs.writeFileSync(this.fileName, JSON.stringify(allProducts, null, '   '))
        return true
    }
}

module.exports = Productos;