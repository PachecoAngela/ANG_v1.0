var produtos=[
    {
        numeroproduto:1,
        designacaoproduto:"Régua",
        descricaoproduto:"Régua transparente em acrílico, de 50cm",
        unidademedida:"Un.",
        precounitario:5.87,
        taxaiva:"23%",
        foto:"regua.png"
    },
    {
        numeroproduto:2,
        designacaoproduto:"Caderno",
        descricaoproduto:"Caderno A4 pautado",
        unidademedida:"Un.",
        precounitario:3.45,
        taxaiva:"23%",
        foto:"caderno.png"
    },
    {
        numeroproduto:3,
        designacaoproduto:"Estojo",
        descricaoproduto:"Estojo em tecido com motivo estampado",
        unidademedida:"Un.",
        precounitario:7.14,
        taxaiva:"23%",
        foto:"estojo.png"
    },
    {
        numeroproduto:4,
        designacaoproduto:"Compasso",
        descricaoproduto:"Estojo em tecido com motivo estampado",
        unidademedida:"Un.",
        precounitario:7.14,
        taxaiva:"23%",
        foto:"compasso.png"
    },
    {
        numeroproduto:5,
        designacaoproduto:"Borracha",
        descricaoproduto:"Estojo em tecido com motivo estampado",
        unidademedida:"Un.",
        precounitario:7.14,
        taxaiva:"23%",
        foto:"borracha.png"
    },
    {
        numeroproduto:6,
        designacaoproduto:"Esferográfica",
        descricaoproduto:"Estojo em tecido com motivo estampado",
        unidademedida:"Un.",
        precounitario:7.14,
        taxaiva:"23%",
        foto:"esferografica.png"
    },
    {
        numeroproduto:7,
        designacaoproduto:"Lápis",
        descricaoproduto:"Estojo em tecido com motivo estampado",
        unidademedida:"Un.",
        precounitario:7.14,
        taxaiva:"23%",
        foto:"lapis.png"
    },
    {
        numeroproduto:8,
        designacaoproduto:"Afiadeira",
        descricaoproduto:"Estojo em tecido com motivo estampado",
        unidademedida:"Un.",
        precounitario:7.14,
        taxaiva:"23%",
        foto:"afiadeira.png"
    },
    {
        numeroproduto:9,
        designacaoproduto:"Furador",
        descricaoproduto:"Estojo em tecido com motivo estampado",
        unidademedida:"Un.",
        precounitario:7.14,
        taxaiva:"23%",
        foto:"furador.png"
    },
    {
        numeroproduto:10,
        designacaoproduto:"Agrafador",
        descricaoproduto:"Estojo em tecido com motivo estampado",
        unidademedida:"Un.",
        precounitario:7.14,
        taxaiva:"23%",
        foto:"agrafador.png"
    }
]

function preencherMontra(){

    var cartaoproduto="";

    for(var posicao=0;posicao<=produtos.length-1;posicao++){
        cartaoproduto="<div class='card' style='width:300px;padding:15px;'>"+
                                "<img class=\'card-img-top\' src=\"\/static\/img\/"+produtos[posicao].foto+"\" alt='card image'>"+
                                "<div class='card-body'>"+
                                "<h4 class='card-title'>"+produtos[posicao].designacaoproduto+"</h4>"+
                                "<p>"+produtos[posicao].descricaoproduto+"</p>"+
                                "<p>Código do Produto: "+produtos[posicao].numeroproduto+"</p>"+
                                "<p>"+produtos[posicao].precounitario+"€</p>"+
                                "<a href='#' class='btn btn-primary'>COMPRAR</a>"+
                            "</div>"+
                      "</div>";

        $("#montra").append(cartaoproduto);
    }
}