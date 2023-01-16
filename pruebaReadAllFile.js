const {readAllFiles} = require('./functionsMD.js');

readAllFiles(['archivosPrueba/pruba33.md'])
    .then(res=>console.log('final',res))
    .catch(err=>console.log(err));