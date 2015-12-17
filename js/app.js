$(document).ready(function(){
	function conectar(e){
    var ip = '192.168.0.101:5000';
		document.getElementById('action').innerHTML = '<object class="servervid" data="http://'+ ip +'" type="text/html"></object>';
	}
	conectar();
});


