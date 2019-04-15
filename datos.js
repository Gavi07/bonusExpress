let cursos = [
    {
        id: 10001,
        nombre: 'Curso en  desarrollo Frontend',
        duracion: '80 horas',
        valor: '200.000'
    },
    {
        id: 10002,
        nombre: 'Curso en desarrollo Backend',
        duracion: '80 horas',
        valor: '200.000'
    },
    {
        id: 10003,
        nombre: 'Curso como Fullstack',
        duracion: '160 horas',
        valor: '500.000'
    }
];

const opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula:{
        demand: true,
        alias: 'c'
    }
}

const argv = require('yargs')
            .command('inscribir', 'Inscribirme en un curso', opciones)
            .argv

module.exports = {
    cursos,
    argv
};