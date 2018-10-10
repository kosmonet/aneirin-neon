var handler = Java.type('neon.server.handlers.ScriptHandler');
var result = handler.output('huppel');

var start = {
	onGameStart : function() {
		var result = handler.output('start');
	}		
}

function onGameStart() {
	var result = handler.output('blurp');
}		
