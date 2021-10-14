$('#confirmarNome').click(function () {
    var nome = $('#nomeUser').val();
    if (nome != '') {
        window.location.href = '/page1.html?nome=' + nome;

    }


})






$(document).ready(function () {
    $('button.btn').click(function () {
        $("div.elementToFadeInAndOut").hide();
        $("div.elementToFadeInAndOut").fadeIn(1000);
    });

    $('#oQueE').hide();
    $('#surgimento').hide();
    $('#funcionamento').hide();
    $('#importancia').hide();
    $('#objetivo').hide();
    $('#essencia').hide();



    $('.botaoInfos').click(function () {
        var id = this.id;
        id  = id.replace('btn-', '')
        $(".text-div").hide();
        $("#"+id).fadeIn(1000);


    })



});



