const curso = require('./curso');
const opciones = {
    nombreEstudiante:{
        demand: true,
        alias: 'n'
    },
    cedulaEstudiante:{
        demand: true,
        alias: 'c'
    },
    idCurso:{
        demand: true,
        alias: 'i'
    }
}
const argv = require('yargs')
                .command('inscribir','Inscribirse a un curso', opciones)
                .argv

if(argv._=='inscribir'){
    console.log(curso.inscribirseACurso(argv.i, argv.n, argv.c));
}else{
    console.log(curso.mostrarCursos());
}

