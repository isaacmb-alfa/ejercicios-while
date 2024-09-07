let diaSemana = '';
let count = 0;
while (count === 0) {
    diaSemana = prompt('Escribe un día de la semana').trim().toLowerCase();

    if (diaSemana === 'domingo') {
        count++; 
        break;
    }
    if (diaSemana === 'lunes') {
        alert('¡Odio los lunes!');
    } else if (diaSemana === 'martes') {
        alert('¡No te cases ni te enbarques!');
    } else if (diaSemana === 'miercoles' || diaSemana === 'miércoles') {
        alert('Ombligo de semana');
    } else if (diaSemana === 'jueves') {
        alert('Casi llegas a la meta');
    } else if (diaSemana === 'jueves') {
        alert('¡Por fin es viernes!');
    } else if (diaSemana === 'sabado' || diaSemana === 'sábado') {
        alert('No voy a trabajar');
    }
    else {
        alert('Error, escribe nuevamente el día de la semana');
    }


}
if (diaSemana === 'domingo') {
    alert('Ve a descansar');ñ
}