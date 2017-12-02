const dirTree = require('directory-tree');

process.on('message', function(options){
	if(options.channel == "getRootTree"){
		if( options.data && options.data != false ){
			process.send(dirTree(options.data[0], {exclude:/\/\..*\//}));
		} else {
			process.send(null);
		}
	} else {
		process.send(null);
	}
});