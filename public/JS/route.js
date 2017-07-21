var router = null;

$(document).ready(function () {
    router = new MyRouter();
    Backbone.history.start();
})

var MyRouter = Backbone.Router.extend({

	
	initialize :function(){
		debugger;
		//this.container = new ContainerView({el:$('rAppContainer')});
	},

	routes :{
		"wines":"getAll"
	},

	getAll : function(){
		debugger;
		var wineList = new WineCollection();
		wineList.fetch({success:function(data){
			debugger;
			console.log("Got data : ",wineList);	
			
			var appView = new WineListView({ el: $("#containerList"),model: wineList.models});
   			appView.render();

		}})
	}
})