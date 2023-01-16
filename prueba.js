const {readFile} = require('./functionsMD.js');

readFile('archivosPrueba/pruba33.md')
    .then(res=>console.log(res))
    .catch(err=>console.log(err));