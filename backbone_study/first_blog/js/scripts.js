//Backbone
var Blog = Backbone.Model.extend({
  defaults: {
    author: '',
    title: '',
    url: ''
  }
});

//Collect all objects together
var Blogs = Backbone.Collection.extend({});

var blog1 = new Blog({
  author:'Ajax',
  title: 'Ajax\'s Blog',
  url: 'http://btbtt.me',
});

var blog2 = new Blog({
  author:'Kyya',
  title: 'Kyya\'s Blog',
  url: 'http://btbtt.me',
});

var blogs = new Blogs([blog1, blog2]);

// Backbone View for one blog
var BlogView = Backbone.View.extend({
  model: new Blog(),
  tagName: 'tr',
  initialize: function() {
    this.template = _.template($('.blogs-list-template').html());
  },
  render: function() {
    this.$el.html(this.template({model: this.model.toJSON()}));
    return this;
  }
});

// Backbone View for all blogs
var BlogsView = Backbone.View.extend({
  model: blogs,
  el: $('.blogs-list'),
  initialize: function() {
    this.model.on('add', this.render(), this);
  },
  render: function() {
    var self = this;
    this.$el.html('');
    _.each(this.model.toArray(), function(blog) {
      self.$el.append((new BlogView({model: blog})).render().$el);
    });
  }
});

var blogsView = new BlogsView();

$(document).ready(function () {
  $('.add-blog').on('click', function() {
    var blog = new Blog({
      author: $('.author-input').val(),
      title: $('.title-input').val(),
      url: $('.url-input').val(),
      action: $('.action-input').val(),
    });
    console.log(blog.toJSON());
    blogs.add(blog);
  })
})
