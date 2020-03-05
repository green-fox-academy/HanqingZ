// // Create new Model(Object)
// var Song = Backbone.Model.extend({
//   // initialize: function(){
//   //   console.log("A new song");
//   // },
//   defaults: {
//     genre: "Jpop"
//   },
//   validate: function(attrs){    // create validation check for selected variable
//     if (!attrs.title)
//       return "Title is required";
//   },
// })

// var song = new Song({
//   title: "Blue in Green",
//   artist: "Miles Davis",
//   publishYear: 1959
// });
// // or
// song.set("title", "Blue in Green"); // set title value for song
// song.get("title"); // output title value
// song.has("title"); // output bool
// song.unset("title"); // remove title variable
// song.clear(); // remove song variable
// song.validationError; // output the selected value's error through validate function
// song.isValid(); // output bool of validate function

// // ====================== Collection =====================
// var Songs = Backbone.Collection.extend({
//   model: Song,  // mention type of collection
//   url: "/api/songs",
// });

// var songs = new Songs([
//   new Song({ title: "Song 1" }),
//   new Song({ title: "Song 2" }),
//   new Song({ title: "Song 3" })
// ])
// songs.add(new Song({ title: "Song 4" }));

// //songs.at(0);
// //songs.get("`${cid}`");
// //songs.remove(songs.at(0));

// // songs.fetch();  // GET /api/songs

// // songs.fetch({
// //   data: {
// //     page:2
// //   },
// //   success: function(){},
// //   error: function(){}
// // });   // GET /api/songs?page = 2


// var SongView = Backbone.View.extend({
//   tagName: "span",
  
//   className: "song",

//   id: "1234",

//   attributes: {
//     "data-genre": "Jpop"
//   },

//   render: function(){
//     this.$el.html("<ul><li>good Job</li></ul>");
//     return this;
//   }
// });

// //var songView = new SongView({ el: "#container" });
// var songView = new SongView();
// songView.render();

// $("#container").html(songView.$el);

var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
  model: Song
});

var SongView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.model.get("title"));
    return this;
  }
});

var SongsView = Backbone.View.extend({
  render: function() {
    var self = this;
    this.model.each(function(song) {
      var songView = new SongView({ model: song });
      self.$el.append(songView.render().$el);
    });
  }
})

//var song = new Song({ title: "Blue in Green" });
var songs = new Songs([
  new Song({ title: "Blue in Green1" }),
  new Song({ title: "Blue in Green2" }),
  new Song({ title: "Blue in Green3" })
]);

var songView = new SongView({ el: "#container", model: songs });
songView.render();
