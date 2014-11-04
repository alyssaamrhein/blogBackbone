/*global Blogbackbone, Backbone*/

Blogbackbone.Models = Blogbackbone.Models || {};

(function () {
    'use strict';

    Blogbackbone.Models.Blog = Backbone.Model.extend({

        url: 'https://tiny-pizza-server.herokuapp.com/collections/alyssasbbblog',

        initialize: function() {
        },

        defaults: {
          date: new Date(),
          title: '',
          post: '',
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
