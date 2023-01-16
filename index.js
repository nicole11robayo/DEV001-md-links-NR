const { absoluteRoute, searchFilesMd, readAllFiles, exitsRoute, validateLinks } = require('./functionsMD.js')



function mdLinks(path, options = { validate: false }) {
    return new Promise((resolve, reject) => {
        if(exitsRoute(path)){
            const absolutePath = absoluteRoute(path);
            const arrayMds = searchFilesMd(absolutePath);
            //console.log('arrayMds', arrayMds)
            if(options.validate===false){
                readAllFiles(arrayMds)
                .then((res) => {
                resolve(res)
                })
                .catch(error => reject(error));
            }else if(options.validate===true){
                readAllFiles(arrayMds)
                .then(res=>validateLinks(res))
                .then(res=>resolve(res))
                .catch(err=> reject(err))
            }
            
        }else{
            reject('La ruta no existe')
        }

    })

}

module.exports = {
    mdLinks,
}