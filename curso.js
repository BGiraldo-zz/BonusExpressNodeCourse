
const fs = require('fs');
var express = require('express')
var app = express()
  
app.listen(3000)

const cursos = [
                {
                    id: 1,
                    nombre: 'Curso de automatización',
                    duracion: '2 meses',
                    valor: '400.000 COP'
                },
                {
                    id: 2,
                    nombre: 'Curso de algoritmia',
                    duracion: '42 Horas',
                    valor: '50 USD'
                },
                {
                    id: 3,
                    nombre: 'Curso de SEO',
                    duracion: '1 semana',
                    valor: '340.000 COP'
                }
            ]

let mostrarCursos = () => {
    var tiempoExtra = 0;
    cursos.forEach(curso => {
        setTimeout(() =>
        { 
            informacion = '\n' + 
            'El Curso con ID ' + curso.id + ' se llama ' + curso.nombre + ' y tiene' + '\n' +
            'una duración de ' + curso.duracion + ' y un valor de ' + curso.valor + '\n'

          console.log(informacion);

        }, 2000 + tiempoExtra);
        tiempoExtra += 2000;
    });
}

let elegirCurso = (id) => cursos.find(curso => curso.id == id);

let inscribirseACurso = (cursoId, nombreEstudiante, cedulaEstudiante) => {

    curso = elegirCurso(cursoId);

    if(curso == null) return 'No se ha encontrado curso con el id ' + cursoId + ', revise nuevamente por favor';

    texto = 'El estudiante ' + nombreEstudiante + '\n' +
            'con Cedula ' + cedulaEstudiante + '\n' +
            'se ha matriculado correctamente al '+ curso.nombre + '\n' +
            'que tiene una duración de '+ curso.duracion + '\n' +
            'y un valor de ' + curso.valor + '\n';

    app.get('/', function (req, res) {
        res.send(texto);
      })
}

module.exports = {
    inscribirseACurso,
    mostrarCursos
}