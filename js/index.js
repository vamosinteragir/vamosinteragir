$('#confirmarNome').click(function () {
    var nome = $('#nomeUser').val();
    if (nome != '') {
        window.location.href = '/page1.html?nome=' + nome;

    }


})

$('#Co-Design').hide();
$('#Dparticipativo').hide();


$('#btn-Co-Design').click(function () {
    $("#Dparticipativo").hide();
    $("#Co-Design").fadeIn(1000);


})

$('#btn-Dparticipativo').click(function () {
    $("#Co-Design").hide();
    $("#Dparticipativo").fadeIn(1000);


})

$(document).ready(function () {
    $('button.btn').click(function () {
        $("div.elementToFadeInAndOut").hide();
        $("div.elementToFadeInAndOut").fadeIn(1000);
    });
});



