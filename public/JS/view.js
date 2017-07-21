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
    tagName: "li",
    model: Wine,

    initialize: function() {
      debugger;
    },

    render: function (){
      debugger;
        this.$el.html('<li>' + this.model.get("name") + '</li>');
        return this;
    }
});

