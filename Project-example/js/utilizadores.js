function editar(obj){
    //Mostro o formulário
    $("#formArea").css("display","block");
    $("#divnumeroutilizador").show();

    //Capturo o numero de utilizador da tabela correspondente à linha do botao editar que cliquei
    var numeroutilizador=$(obj).parent().siblings().first().text();

    $.get("/consultarutilizador/"+numeroutilizador,function(utilizador,status){
        //preencho o formulario com os dados do json cliente
        $("#numeroutilizador").val(utilizador.UtilizadorID);
        $("#primeironomeutilizador").val(utilizador.PrimeiroNome);
        $("#ultimonomeutilizador").val(utilizador.UltimoNome);
        $("#morada").val(utilizador.Morada);
        $("#cpostal").val(utilizador.CPostal);
        $("#telefone").val(utilizador.Telefone);
        $("#email").val(utilizador.Email);
        $("#username").val(utilizador.NomeUtilizador);
        $("#password").val(utilizador.PalavraPasse);
        $("#foto").attr("src", utilizador.Foto);
        $("#form").attr("action","/atualizarutilizador")
        $("#btnapagar").attr("href","/apagarutilizador/"+utilizador.UtilizadorID);
    });
}

function voltar(){
    $("#formArea").css("display","none");
}

function adicionar(){
    $("#formArea").css("display","block");
    $("#numeroutilizador").val("");
    $("#divnumeroutilizador").hide();
    $("#numeroutilizador").val(numeroutilizador);
    $("#primeironomeutilizador").val("");
    $("#ultimonomeutilizador").val("");
    $("#morada").val("");
    $("#cpostal").val("");
    $("#telefone").val("");
    $("#email").val("");
    $("#username").val("");
    $("#password").val("");
    $("#confirmarpassword").val("");
    $("#foto").attr("src","img/silhueta.png");
    $("#form").attr("action","/inserirutilizador")
}
