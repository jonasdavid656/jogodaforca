
//Express é um(a) módulo/bliblioteca de JavaScript que você pode importar para outro código usando a função require() do Node.js.

var express = require ('express');

//Mustache é uma sintaxe de modelo sem lógica. Pode ser usado para HTML, arquivos de configuração, código fonte - qualquer coisa;
//Nós o chamamos de "sem lógica" porque não há instruções if, cláusulas else ou loops. Em vez disso, existem apenas tags;
//Algumas tags são substituídas por um valor, outras nada e outras por uma série de valores.

var mustache = require ('mustache-express');

//A variável "app" representa a aplicação.

var app = express ();

//"app.engine" define o mecanismo da aplicação.

app.engine ('html', mustache ());

//"app.set" informa qual mecanismo de modelo utilizar, neste caso html.

app.set ('view engine', 'html');

//Define o diretório onde procurar os arquivos de exibição.

app.set ('views', __dirname + '/views');

//"app.get" mostra uma definição de rota.

app.get ('/', function (req, res) {
	res.render ('index.html');
});

app.get ('/ajuda.html', function (req, res) {
	res.render ('ajuda.html');
});

app.get ('/contato.html', function (req, res) {
	res.render ('contato.html');
});

app.get ('/sobre.html', function (req, res) {
	res.render ('sobre.html');
});

app.get ('/jogo.html', function (req, res) {
	res.render ('jogo.html');
});

//"express.static" entrega arquivos estáticos.

app.use('/_css', express.static(__dirname + '/_css'));

app.use('/_imagens', express.static(__dirname + '/_imagens'));

app.use('/_sound', express.static(__dirname + '/_sound'));

app.use('/_script', express.static(__dirname + '/_script'));

//A variável port define a porta que será utilizada na aplicação.

var port = 3000;
app.listen (port, function () {
	console.log (`Escutando na porta ${port}...`);
});