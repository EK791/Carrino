// modifica l'attributo style:

// $('#title').css('background-color','lime');

// $('h3').css('color','red');

// $('.test').css('border','2px dashed blue');

// aggiunta classi:



//listener= rimane in ascolto di un evento
// listener => nome evento da ascoltare
//         => funzione da eseguire quando l'evento accade


$('#btn').on('click', function () {   // attacco un listener
    // alert('Sono stato cliccato')
    $('#title').addClass('bg-green');
    $('h3').addClass('color-red');
    $('.test').addClass('dashed-blue');
});


$('#rimuovi').on('click', function () {   // attacco un listener
    // alert('Sono stato cliccato')
    $('#title').removeClass('bg-green');
    $('h3').removeClass('color-red');
    $('.test').removeClass('dashed-blue');
});



$('#overme').on('mouseover', function () {
    $('p').css('background', 'yellow');
    $('p.prova').css('background', 'orange');

});


$('#overme').on('mouseleave', function () {
    $('p').css('background', '');
    $('p.prova').css('background', '');

});


$('#changecolor').on('click', function(){
    let color=$('input#color').val();
    $('#title').css('background-color', color);

});

$('#changetext').on('click', function(){
    let testo=$('input#text').val();
    $('h3').text(testo);

});

$('#prependChild').on('click', function(){
    let testo=$('input#text').val();
    $('h2').prepend(testo);

});

$('#appendChild').on('click', function(){
    let testo=$('input#text').val();
    $('h2').append(testo);

});

$('#btn3').on('click', function(){
    $('p').remove();

});






