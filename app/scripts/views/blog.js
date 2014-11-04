/*global Blogbackbone, Backbone, JST*/

Blogbackbone.Views = Blogbackbone.Views || {};

(function () {
    'use strict';

    Blogbackbone.Views.Blog = Backbone.View.extend({

        template: JST['app/scripts/templates/blog.ejs'],

        tagName: 'div',

        id: '',

        className: 'send',

        events: {
          'click .send': 'sendPost'
        },

        sendPost: function (event) {
          console.log('sendPost function initialized lol')
        },

        initialize: function () {
            this.model = model;
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            console.log('blog entry posty toasty');
            return this;
        }

    });

})();
