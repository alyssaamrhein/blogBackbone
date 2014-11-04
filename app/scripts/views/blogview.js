/*global Blogbackbone, Backbone, JST*/

Blogbackbone.Views = Blogbackbone.Views || {};

(function () {
    'use strict';

    Blogbackbone.Views.Blogview = Backbone.View.extend({

        template: JST['app/scripts/templates/blogview.ejs'],

        el: $('#postContainer'),

        events: {
            "click input.send" : "onSubmit"
        },

        onSubmit: function (e) {
            e.preventDefault();
            var title = $('#title');
            var post = $('#post');
            var blog = new Blogbackbone.Models.Blog({
                title: title.val(),
                post: post.val()
            });
            Blogbackbone.Blogs.add(blog);
            blog.save();
            title.val(' ');
            post.val(' ');
        },


        initialize: function () {
            this.listenTo(Blogbackbone.Blogs, 'add', this.addOne);
            this.listenTo(Blogbackbone.Blogs, 'reset', this.addAll);
            this.render();
            Blogbackbone.Blogs.fetch();
        },

        addOne: function (blog) {
            console.log(blog);
            var blogView = new Blogbackbone.Views.Blog(blog);
            $('#postContainer').append(blogView.render().el);
        },

        addAll: function () {
            console.log('addAll Called');
        },

        render: function () {
            this.$el.html(this.template());
            console.log('render called');
            return this;
        }

    });

})();
