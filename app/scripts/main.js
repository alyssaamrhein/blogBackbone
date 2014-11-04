/*global Blogbackbone, $*/


window.Blogbackbone = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        this.Blogs     = new Blogbackbone.Collections.Blogs();
        var app        = new Blogbackbone.Views.Blogview();
    }
};

$(document).ready(function () {
    'use strict';
    Blogbackbone.init();
});
