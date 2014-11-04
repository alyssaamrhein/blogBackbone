/*global Blogbackbone, Backbone, JST*/

Blogbackbone.Views = Blogbackbone.Views || {};

(function () {
    'use strict';

    Blogbackbone.Views.Blogs = Backbone.View.extend({

        template: JST['app/scripts/templates/blogs.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
