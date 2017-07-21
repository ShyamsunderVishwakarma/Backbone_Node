var wines = require('../models/productModel')

exports.getAll =function(req,res){

	wines.find({},function(err,data){

		if(err)
		{
			return res.send({message:"Oops something went wrong!!!",msgTye : "E"}).status(500);
		}
		else
		{
			if(data.length == 0)
			{
				return res.send({message : "No data available!!!",msgtype : "S",Data:data}).status(200);
			}
			else
			{
				console.log(data);
				return res.send(data).status(200);
			}
		}

	})

}