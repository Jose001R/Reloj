setInterval(() => {

    let time = new Date();

    let dias = time.getDate();
    let horas = time.getHours();
    let minutos = time.getMinutes();
    let segundos = time.getSeconds();


    if (dias<10){
        dias = "0"+dias;
    }
    if (horas<10){
        horas = "0"+horas;
    }
    if (minutos<10){
        minutos = "0"+minutos;
    }
    if (segundos<10){
        segundos = "0"+segundos;
    }

    
    document.getElementById('days').innerHTML = dias;
    document.getElementById('hours').innerHTML = horas-12;
    document.getElementById('minutes').innerHTML = minutos;
    document.getElementById('seconds').innerHTML = segundos; 
}, 1000);
