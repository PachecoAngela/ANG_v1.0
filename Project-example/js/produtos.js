function editar(obj){
    //Mostro o formulário
    $("#formArea").css("display","block");
    $("#divnumeroproduto").show();

    //Capturo o numero de produto da tabela correspondente à linha do botao editar que cliquei
    var numeroproduto=$(obj).parent().siblings().first().text();

    $.get("/consultarproduto/"+numeroproduto,function(produto,status){
        //preencho o formulario com os dados do json cliente
        $("#numeroproduto").val(produto.ProdutoID);
        $("#designacaoproduto").val(produto.Nome);
        $("#descricaoproduto").val(produto.Descricao);
        $("#unidademedida").val(produto.UnidadeMedida);
        $("#precounitario").val(produto.PrecoUnitario);
        $("#taxaiva").val(produto.IVA);
        $("#produto").val(produto.Foto);
        $("#form").attr("action","/atualizarproduto")
        $("#btnapagar").attr("href","/apagarproduto/"+produto.ProdutoID);
    });
}

function voltar(){
    $("#formArea").css("display","none");
}

function adicionar(){
    $("#formArea").css("display","block");
    $("#numeroproduto").val("");
    $("#divnumeroproduto").hide();
    $("#numeroproduto").val(numeroproduto);
    $("#designacaoproduto").val("");
    $("#descricaoproduto").val("");
    $("#unidademedida").val("");
    $("#precounitario").val("");
    $("#taxaiva").val("");
    $("#form").attr("action","/inserirproduto")
}