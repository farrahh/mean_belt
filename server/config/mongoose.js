var mongoose = require('mongoose');

var fs = require('fs');

mongoose.connect('mongodb://localhost/BlackBelt');
// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://mean_belt:mean_belt@ds153400.mlab.com:53400/heroku_ck62nsbz');

var models_path = __dirname + '/../models'

fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') > 0) {
		require(models_path + '/' + file);
	}
})
