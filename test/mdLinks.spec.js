const {mdLinks} = require('../index.js');


describe('mdLinks', () => {

  it('Debería rechazar la promesa cuando la ruta que se le pasa no exite', () => {
    let routeFalse= 'fake.md';
    return mdLinks(routeFalse).catch(err => {
      expect(err).toBe('La ruta no existe')
    })
  });

  let relativeRouteDirectory= 'archivosPrueba';

  it('Debería devolver una promesa resuelta con un array de objetos de la info básica de los links de los arhivos md (validate:false)',()=>{
    let arrayResultBasic= [
      {
        href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
        text: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
        file: 'C:\\Users\\NICOLE ROBAYO\\Desktop\\DEV001-md-links-NR\\archivosPrueba\\pruba33.md'
      },
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'https://es.wikipedia.org/wiki/Markdown',
        file: 'C:\\Users\\NICOLE ROBAYO\\Desktop\\DEV001-md-links-NR\\archivosPrueba\\pruba33.md'
      },
      {
        href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        text: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
        file: 'C:\\Users\\NICOLE ROBAYO\\Desktop\\DEV001-md-links-NR\\archivosPrueba\\prueba22.md'
      }
    ];

    return mdLinks(relativeRouteDirectory).then((res)=>{
      expect(res).toStrictEqual(arrayResultBasic);
    });
  })
  it('Debería devolver una promesa resuelta con un array de objetos de la info de los links de los arhivos md (validate:true)', ()=>{
    let arrayResultComplete= [
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
      }
    ];

    return mdLinks(relativeRouteDirectory, {validate:true}).then((res)=>{
      expect(res).toStrictEqual(arrayResultComplete);
  })
  })

});
