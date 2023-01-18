const {validateLinks} = require('./functionsMD.js')
//const {statsPlusBroken} = require('./functionsCLI.js')

let arrayPrueba= [
    {
      href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
      text: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
      file: 'C:\\Users\\NICOLE ROBAYO\\Desktop\\DEV001-md-links-NR\\archivosPrueba\\pruba33.md',
      //ok: 'FAIL'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'https://es.wikipedia.org/wiki/Markdown',
      file: 'C:\\Users\\NICOLE ROBAYO\\Desktop\\DEV001-md-links-NR\\archivosPrueba\\pruba33.md'       
    }
  ]


validateLinks(arrayPrueba)
  .then(res=>console.log(res))
  .catch(err=>console.log(err));


//statsPlusBroken(arrayPrueba)