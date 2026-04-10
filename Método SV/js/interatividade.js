$(function(){


//ENTRADA

var botoes = $(".botao");
var titulo = $("h1");
var subtitulo = $("#subtitulo");
var icones = $("svg");
var fundo = $("body");
var botao_modoescuro = $("#modoescuro");
var terceiro_titulo = $("h3");

var modoescuro = false


//PROCESSAMENTO

botao_modoescuro.click(()=>{

    if(modoescuro == false ){

        botoes.css("background-color","rgb(77, 0, 13)");
        botoes.css("color","white");

        fundo.css("background-image","url('https://i.pinimg.com/736x/7b/64/37/7b6437d1f16f761028af10ef244e6726.jpg')")
        titulo.css("color","white");
        subtitulo.css("color" , "white")
        terceiro_titulo.css("color", "white")
        icones.css("fill", "white")
        
       
        
        
        modoescuro = true


    }else{

        botoes.css( "background-color","rgb(255, 174, 197)");
        botoes.css("color","rgb(139, 4, 51)");
        fundo.css("background-image" , "url('https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg')")
        
        fundo.css("background-size" , "1000px")

        titulo.css("color","rgb(139, 4, 51)");
        subtitulo.css("color" , "rgb(139, 4, 51)")
        terceiro_titulo.css("color", "rgb(139, 4, 51)")
        icones.css("fill", "white");     
 
        modoescuro = false

    }


});


icones.mouseenter(()=>{

    icones.css("color" , "rgb(57, 8, 26)")
    

});


});