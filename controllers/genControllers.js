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
				//console.log(data);
				return res.send(data).status(200);
			}
		}

	});
}

exports.save = function(req,res){

	//console.log(req.body);
	//res.send(req.body);

	var winesdetail = new wines(req.body); 

	winesdetail.save(function(err,data){

		console.log("Save Data : ",data)

		if(err)
		{
			console.log("CreateError: " + err);
			return res.send({"message" : err,"msgTye" : "E"}).status(500);
		}
		else
		{
			console.log("Created Successfully!!!");
			return res.send({message : "Created Successfully!!!",msgTye : "S"}).status(201);
		}
	});
}

exports.deleteData = function(req,res){

		console.log("deleted data id : "+req.params.id);
		//res.send({message : "id Deleted Successfully!!!",msgTye : "S"}).status(200);

		var id = req.params.id;

		wines.remove({_id : id},function(err,data){

			if(err)
			{
				res.send({"message":"Oops something went wrong!!!"}).status(500);
			}

			var resultData = JSON.parse(data);

			if(resultData.n)
			{
				return res.send({message : "Data deleted successfully!!!",msgtype : "S",Data:data}).status(200);
			}
			else
			{
				return res.send({message : "No Data found for provided isbn!!!",msgtype : "S",Data:data}).status(400);	
			}

		})

}