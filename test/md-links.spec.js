const {mdLinks} = require('../index.js');


describe('mdLinks', () => {

  it('Debería rechazar la promesa cuando la ruta que se le pasa no exite', () => {
    let routeFalse= 'fake.md';
    return mdLinks(routeFalse).catch(err => {
      expect(err).toBe('La ruta no existe')
    })
  });

});
