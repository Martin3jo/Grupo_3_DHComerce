const express = require("express")
const app = express()
const path = require("path")
let port = 4000;

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'./views/index.html'));
});

app.get('/registro',(req,res)=>{
	res.sendFile(path.join(__dirname,'./views/registro.html'));
});

app.listen(port, ()=>{
    console.log(`
    Nuestra app funciona en
    http://localhost:${port}`);
})

const carpetaPublic = path.resolve(__dirname,'./public')
app.use(express.static(carpetaPublic));