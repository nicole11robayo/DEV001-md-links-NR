const fs = require('fs');
const path = require("path");
const marked = require('marked');
const axios = require('axios');

function exitsRoute(route){
  if(fs.existsSync(route)){
    return true;
  }else{
    return false;
  }
}

//route evaluation
function absoluteRoute(route){
  if(!path.isAbsolute(route)){
    return path.resolve(route);
  }
  return route;
}

//search files and files of directories with 'md' extension
function searchFilesMd(route){
  let files=[];
  if(fs.statSync(route).isFile()){
    files.push(route);
  }else{
    const directoryFiles = fs.readdirSync(route);
    directoryFiles.forEach(file =>{
      let routeDirectoryFile = path.join(route, file);
      if(fs.statSync(routeDirectoryFile).isDirectory()){
        files= files.concat(searchFilesMd(routeDirectoryFile));
      }else{
        files.push(routeDirectoryFile);
      }
    })
  }
  let filesMd = files.filter(file => path.extname(file) === '.md');
  return filesMd;

}


//Read md files and extract links 
function readFile(mdFile){
  let arrayLinks = [];
  
  return new Promise((resolve, reject) => {
      fs.readFile(mdFile, 'utf-8', (err, content) => {
        if(err){
          reject('Ha ocurrido un error al intentar leer tu archivo, verifica que sea valido');
        }else{

          let renderer = new marked.Renderer();
          renderer.link = (href, title, text) => {
            linkProperties = {
              'href': href,
              'text': text,
              'file': mdFile
            };

            if(linkProperties.href.includes('http')){
              arrayLinks.push(linkProperties);
            }
          };
          
          marked.marked(content, { renderer });
          //console.log(arrayLinks);
          resolve(arrayLinks);
        }
      })
  })
}


function readAllFiles(arrayMds) {
  const arrayPromises = arrayMds.map((fileMD) => {
    return readFile(fileMD).then(res=>res)
  })
  //console.log('arrayPromises',arrayPromises);
  return Promise.all(arrayPromises).then(res => res.flat()).catch(err=> err)
}

function validateLinks(arrayObjectsLinks){
  const arraypromisesValidate = arrayObjectsLinks.map(objectLink=>{
    return axios
      .get(objectLink.href)
      .then((res) => {
        objectLink.status = res.status;
        objectLink.ok = "OK";
        return objectLink
      })
      .catch((err)=>{
        objectLink.status = 404;
        objectLink.ok = "FAIL";
        return objectLink
      })
  })
  return Promise.all(arraypromisesValidate);

}


module.exports = {
  exitsRoute,
  readFile,
  absoluteRoute,
  searchFilesMd,
  readAllFiles,
  validateLinks,
};
