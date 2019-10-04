function id( el ){
        return document.getElementById( el );
}
function val( destino, valor ){
        destino.value += valor;
}
var focus = false;
window.onload = function(){
       
       
        var botoes = id('teclado').getElementsByTagName('input');
        for( var i=0; i<botoes.length; i++ ){
                botoes[i].onclick = function(){
                        if( !focus ){ alert('coloque o foco em algum input');exit(); }

                        val( id( focus ), this.value );
                        id( focus ).focus();
                }
        }
       
        var inputs = id('area').getElementsByTagName('input');
        for( var i=0; i<inputs.length; i++ ){
                inputs[i].onfocus = function(){
                        focus = this.id;
                }
        }
        id('entrada_1').focus();
}