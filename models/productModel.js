var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var productSchema = new Schema({
	name : {type : String},
	year	: {type : String},
	grapes : {type : String},
	country : {type : String},
	region : {type : String},
	description : {type : String},
	picture : {type : String}
})

var wines = mongoose.model('wines',productSchema)

module.exports = wines;