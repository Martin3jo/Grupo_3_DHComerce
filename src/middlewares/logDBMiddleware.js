const fs = require('fs');

function logDBMiddleware(req,res,next){
    fs.appendFileSync('logDB.txt','se guardó desde la pagina ' + req.url + '\n')
    next()
};

module.exports = logDBMiddleware;