window.WineListView = Backbone.View.extend({
	
	model:WineCollection,
	initialize : function(){
		
	},

	render :function(){
		debugger;
		this.$el.html('');
        this.$el.html();

         for(var i = 0; i < this.model.length;i++) {
            
            var itemView= new ItemView({model: this.model[i]});

            this.$el.append(itemView.$el); 

            itemView.render();           
        } 

         return this;
	}
})

 var ItemView = Backbone.View.extend({
    //tagName: "ul",
    model: Wine,

    initialize: function() {
      debugger;
    },

     events : {
        
                "click .deleteDiv" : "showDeleteAlert"
              },

    render: function (){
      debugger;
        //this.$el.append('<div id="deleteItem" class ="deleteItem"><img src="../static/Images/delete_icon.png"/></div>');
        this.$el.html('<li class="main-li"><div class="deleteDiv"><img class="deleteItem" src="../static/Images/delete_icon.png"/></div>' + this.model.get("name") + '</li>');
        return this;
    },

  
      showDeleteAlert : function() {
        debugger;
          var result = confirm("Do you want to delete ?");

          if(result == true)
          {
              var id = this.model.get("_id");
            var winedata = new Wine({ _id: id });
            winedata.destroy({
                success: function (model, respose, options) {
                  debugger;
                    console.log("The model has deleted the server");

                    var router = new MyRouter();
                    router.getAll();
                },
                error: function (model, xhr, options) {
                  debugger;
                    console.log("Something went wrong while deleting the model");
                    alert("Something went wrong while deleting the model");
                }
            });

          }
      }

});

