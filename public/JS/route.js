var router = null;

$(document).ready(function () {

    router = new MyRouter();
    Backbone.history.start();
})

window.MyRouter = Backbone.Router.extend({

	
	initialize :function(){
		debugger;
		//this.container = new ContainerView({el:$('rAppContainer')});
	},

	routes :{
		"wines":"getAll",
		"add":"add",
		"save" : "save"
	},

	getAll : function(){
		var wineList = new WineCollection();
		wineList.fetch({success:function(data){
			debugger;
			console.log("Got data : ",wineList);	
			
			var appView = new WineListView({ el: $("#containerList"),model: wineList.models});
   			appView.render();

		}})
	},

	add: function()
	{
		debugger;
		$("#addForm").show();
        $("#resultList").hide();
	},

	save :function(){

		var dataObj = {
				"name":$("#name").val(),
				"year":$("#year").val(),
				"grapes":$("#grapes").val(),
				"country":$("#country").val(),
				"region" : $("#region").val(),
				"description" : $("#description").val(),
				"picture" : $("#picture").val()
			};

		var wine = new Wine(dataObj);
                wine.save({}, {
                    type: "POST",
                    success: function (model, response, options) {
                    	debugger;
                        console.log("The model has been saved to the server");
                         $("#msg").text(response.message);
                         resetField();

                    },
                    error: function (model, xhr, options) {
                    	debugger;
                        console.log("Oops Something went wrong");
                         $("#msg").val("Oops Something went wrong");
                    }
                });

	}
})

 function resetField(){
		$("#name").val(""),
		$("#year").val(""),
		$("#grapes").val(""),
		$("#country").val(""),
		$("#region").val(""),
		$("#description").val(""),
		$("#picture").val("")
	}