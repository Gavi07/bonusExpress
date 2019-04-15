const {cursos, argv} = require('./datos');
const express = require('express')
const app = express()

let crearArchivo = () => {
  let cursoSeleccionado = cursos.find( c => c.id == argv.i)
  texto = 'El estudiante ' + argv.n + '\n' +
          'Con cedula ' + argv.c + '\n' +
          'Se ha matriculado en el ' + cursoSeleccionado.nombre +
          ' con una duración de ' + cursoSeleccionado.duracion + 
          ' y un costo de ' + cursoSeleccionado.valor;

  app.get('/', function (req, res) {
    res.send(texto)
  })
    
  app.listen(3000)
}

let cursoSeleccionado = cursos.find( c => c.id == argv.i)

if(cursoSeleccionado !== undefined)
{
  crearArchivo();
} else {
  console.log('Curso no encontrado dentro de la oferta');
}


let imprimir = (id, nombre, duracion, valor) => {
  console.log('ID: ' + id + ' - ' + nombre + ' con una duración de ' +
              duracion + ' y a un módico precio de ' + valor);
}

if (argv.i === undefined) {
  console.log('A continuación se presentan los cursos ofertados por educación continua: ');

  cursos.map( (c, i) => {
      let j = 2000 + 2000 * i;
      setTimeout( function() {
       imprimir(c.id, c.nombre, c.duracion, c.valor);
      }, j)
  })
}
