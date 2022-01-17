function editar(obj){

    //Mostro o formulário
    $("#formArea").css("display","block");
    $("#divnumerocliente").show();

    //Capturo o numero de cliente da tabela correspondente à linha do botao editar que cliquei
    var numerocliente=$(obj).parent().siblings().first().text();

    $.get("/consultarcliente/"+numerocliente,function(cliente,status){
        //preencho o formulario com os dados do json cliente
        $("#numerocliente").val(cliente.ClienteID);
        $("#nomecliente").val(cliente.Nome);
        $("#nif").val(cliente.NIF);
        $("#morada").val(cliente.Morada);
        $("#cpostal").val(cliente.CPostal);
        $("#telefone").val(cliente.Telefone);
        $("#email").val(cliente.EMail);
        $("#form").attr("action","/atualizarcliente")
        $("#btnapagar").attr("href","/apagarcliente/"+cliente.ClienteID);
    });
}

function voltar(){
    $("#formArea").css("display","none");
}

function adicionar(){
    $("#formArea").css("display","block");
    $("#numerocliente").val("");
    $("#divnumerocliente").hide();
    $('#nomecliente').val("");
    $('#nif').val("");
    $('#morada').val("");
    $('#cpostal').val("");
    $('#telefone').val("");
    $('#email').val("");
    $("#form").attr("action","/inserircliente")
}