function editar(obj){
    //Mostro o formulário
    $("#formArea").css("display","block");
    $("#divnumerofornecedor").show();

    //Capturo o numero de fornecedor da tabela correspondente à linha do botao editar que cliquei
    var numerofornecedor=$(obj).parent().siblings().first().text();

    $.get("/consultarfornecedor/"+numerofornecedor,function(fornecedor,status){
        //preencho o formulario com os dados do json cliente
        $("#numerofornecedor").val(fornecedor.FornecedorID);
        $("#nomefornecedor").val(fornecedor.Nome);
        $("#nif").val(fornecedor.NIF);
        $("#morada").val(fornecedor.Morada);
        $("#cpostal").val(fornecedor.CPostal);
        $("#telefone").val(fornecedor.Telefone);
        $("#email").val(fornecedor.EMail);
        $("#form").attr("action","/atualizarfornecedor")
        $("#btnapagar").attr("href","/apagarfornecedor/"+fornecedor.FornecedorID);
    });
}

function voltar(){
    $("#formArea").css("display","none");
}

function adicionar(){
    $("#formArea").css("display","block");
    $("#numerofornecedor").val("");
    $("#divnumerofornecedor").hide();
    $("#numerofornecedor").val(numerofornecedor);
    $("#nomefornecedor").val("");
    $("#nif").val("");
    $("#morada").val("");
    $("#cpostal").val("");
    $("#telefone").val("");
    $("#email").val("");
    $("#form").attr("action","/inserirfornecedor")
}