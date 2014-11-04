/*global Blogbackbone, Backbone*/

Blogbackbone.Collections = Blogbackbone.Collections || {};

(function () {
    'use strict';

    Blogbackbone.Collections.Blogs = Backbone.Collection.extend({

        model: Blogbackbone.Models.Blog,

        url: "https://tiny-pizza-server.herokuapp.com/collections/alyssasbbblog"

    });

})();
