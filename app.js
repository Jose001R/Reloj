// let dias = document.getElementById('days');
// let hours = document.getElementById('hours');
// let minutes = document.getElementById('minutes');
// let seconds = document.getElementById('seconds');



setInterval(() => {

    let time = new Date();

    let dias = time.getDay();
    let horas = time.getHours();
    let minutos = time.getMinutes();
    let segundos = time.getSeconds();


    if (dias<10){
        dias = "0"+dias;
    }
    if (horas<10){
        horas = "0"+horas;
    }
    if (minutes<10){
        minutes = "0"+minutes;
    }
    if (segundos<10){
        segundos = "0"+segundos;
    }

    
    document.getElementById('days').innerHTML = dias;
    document.getElementById('hours').innerHTML = horas;
    document.getElementById('minutes').innerHTML = minutos;
    document.getElementById('seconds').innerHTML = segundos; 
}, 1000);