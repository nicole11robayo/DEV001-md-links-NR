const {mdLinks} = require('./index.js');

mdLinks('archivosPrueba', {validate:true})
    .then(res=>console.log(res))
    .catch(err=>console.log(err));