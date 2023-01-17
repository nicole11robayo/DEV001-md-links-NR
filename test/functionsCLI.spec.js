const {stats, statsPlusBroken} = require('../functionsCLI.js');

const arrayObjects=[
    {
        href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
        text: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
        file: 'C:\\Users\\NICOLE ROBAYO\\Desktop\\DEV001-md-links-NR\\archivosPrueba\\pruba33.md',
        status: 200,
        ok: 'OK'
    },
    {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'https://es.wikipedia.org/wiki/Markdown',
        file: 'C:\\Users\\NICOLE ROBAYO\\Desktop\\DEV001-md-links-NR\\archivosPrueba\\pruba33.md',
        status: 200,
        ok: 'OK'
    },
    {
        href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        text: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        file: 'C:\\Users\\NICOLE ROBAYO\\Desktop\\DEV001-md-links-NR\\archivosPrueba\\prueba22.md',
        status: 200,
        ok: 'OK'
    },
    {
        href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        text: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        file: 'C:\\Users\\NICOLE ROBAYO\\Desktop\\DEV001-md-links-NR\\archivosPrueba\\prueba22.md',
        status: 200,
        ok: 'OK'
    },
    {
        href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions',
        text: 'Funciones — bloques de código reutilizables - MDN',
        file: 'C:\\Users\\NICOLE ROBAYO\\Desktop\\DEV001-md-links-NR\\README.md',
        status: 404,
        ok: 'FAIL'
    }
];

const statsObjectResult= { Total: 5, Unique: 4 };
const statsBrokenObjectResult= { Total: 5, Unique: 4, Broken: 1 };

describe('probando función que da estadisticas de los links (total,unique)', ()=>{
    it('Debería retornar un objeto con las propiedades Total y Unique (estadisticas de los links)', ()=>{
        expect(stats(arrayObjects)).toStrictEqual(statsObjectResult)
    })
})

describe('probando función que da estadisticas más precisas de los links (total,unique,broken)', ()=>{
    it('Debería retornar un objeto con las propiedades Total, Unique y Broken (estadisticas de los links)', ()=>{
        expect(statsPlusBroken(arrayObjects)).toStrictEqual(statsBrokenObjectResult)
    })
})
