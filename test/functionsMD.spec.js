const {absoluteRoute, searchFilesMd, exitsRoute, readFile, readAllFiles} = require('../functionsMD.js');

describe('probando función que verifica si una ruta existe o no', ()=>{
    it('Debería ser una función', ()=>{
        expect(typeof exitsRoute).toBe('function');
    })

    let routeTrue= 'README.md';
    let routeFalse= 'fake.md';

    it('Debería devolver true cuando existe la ruta', ()=>{
        expect(exitsRoute(routeTrue)).toBe(true)
    })
    it('Debería devolver false cuando NO existe la ruta', ()=>{
        expect(exitsRoute(routeFalse)).toBe(false)
    })
})

describe ('probando función que convierte rutas relativas a absolutas', ()=>{
    let relRoute= 'README.md';
    let absRoute= 'C:\\Users\\NICOLE ROBAYO\\Desktop\\DEV001-md-links-NR\\README.md';
    it('Debería ser una función', ()=>{
        expect(typeof absoluteRoute).toBe('function');
    })
    it('Debería convertir una ruta relativa a absoluta', ()=>{
        expect(absoluteRoute(relRoute)).toBe(absRoute);
    })
    it('Debería dejar la ruta absoluta',()=>{
        expect(absoluteRoute(absRoute)).toBe(absRoute);
    })
})

describe('probando función que devuelve array con los archivos md de un archivo o directorio', ()=>{
    it('Debería ser una función', ()=>{
        expect(typeof searchFilesMd).toBe('function');
    })
    it('Debería devolver un array con los archivos md de un directorio', ()=>{
        let directoryRoute= "C:\\Users\\NICOLE ROBAYO\\Desktop\\DEV001-md-links-NR\\archivosPrueba";
        let resultadoArray= [
            'C:\\Users\\NICOLE ROBAYO\\Desktop\\DEV001-md-links-NR\\archivosPrueba\\pruba33.md',
            'C:\\Users\\NICOLE ROBAYO\\Desktop\\DEV001-md-links-NR\\archivosPrueba\\prueba22.md'
          ]
        expect(searchFilesMd(directoryRoute)).toStrictEqual(resultadoArray)
    })
    it('si es un archivo md, debería devolver un array con ese archivo', ()=>{
        let fileRoute= "C:\\Users\\NICOLE ROBAYO\\Desktop\\DEV001-md-links-NR\\archivosPrueba\\prueba22.md";
        let resultadoArray= [
            'C:\\Users\\NICOLE ROBAYO\\Desktop\\DEV001-md-links-NR\\archivosPrueba\\prueba22.md'
          ]
        expect(searchFilesMd(fileRoute)).toStrictEqual(resultadoArray)
    })
})

describe('probando función que lee un archivo md y devuelve una promesa que resuelve un array de objetos con info de los links', ()=>{
    it('Debería devolver una promesa resuelta con un array de objetos de la info de los links del arhivo md', ()=>{
        let routeMdFile= 'archivosPrueba/pruba33.md'
        let resultArray= [
            {
            href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
            text: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
            file: 'archivosPrueba/pruba33.md'
            },
            {
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'https://es.wikipedia.org/wiki/Markdown',
            file: 'archivosPrueba/pruba33.md'
            }
        ]
        return readFile(routeMdFile).then((res)=>{
            expect(res).toStrictEqual(resultArray);
        })
    })
    it('Debería rechazar la promesa cuando se le pasa un archivo md invalido', ()=>{
        let routeFalse= 'fake.md';
        return readFile(routeFalse).catch(err => {
            expect(err).toBe('Ha ocurrido un error al intentar leer tu archivo, verifica que sea valido')
        })
    })    
})

describe('probando función que lee todos los archivos md y devuelve una promesa que resuelve un array de objetos con info de los links', ()=>{
    it('Debería devolver una promesa resuelta con un array de objetos de la info de los links de los arhivos md', ()=>{
        let arrayRoutesMdFiles= [ 'archivosPrueba/pruba33.md', 'archivosPrueba/prueba22.md' ]
        let resultArray= [
            {
            href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
            text: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
            file: 'archivosPrueba/pruba33.md'
            },
            {
            href: 'https://es.wikipedia.org/wiki/Markdown',
            text: 'https://es.wikipedia.org/wiki/Markdown',
            file: 'archivosPrueba/pruba33.md'
            },
            {
            href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
            text: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
            file: 'archivosPrueba/prueba22.md'      
            }
        ]
        return readAllFiles(arrayRoutesMdFiles).then((res)=>{
            expect(res).toStrictEqual(resultArray);
        })
    })
})