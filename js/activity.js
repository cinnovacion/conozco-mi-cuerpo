"user strict";

define(function (require) {
    var activity    = require("sugar-web/activity/activity");
    var datastore   = require("sugar-web/datastore");
    // Librerias
    var jquery      = require("jquery");
    var interact    = require("interact");
    var Mustache    = require("mustache");
    // Plantillas
    var plantilla    = require("../js/plantilla.js");

	// Manipulate the DOM only when it is ready.
	require(['domReady!'], function (doc) {

        var output   = '';

        // Initialize the activity.
        activity.setup();

        $('.reload-button').on('click', function() {
            location.reload();
        });

        $(document).ready(function(){
            output = Mustache.render(plantilla[1].pag1, {name: "Luke"});
            $('#canvas').html(output);
        });
        
        $('#canvas').on('click','#nina',function(){
            output = Mustache.render(plantilla[2].pag2);
            $('#canvas').html(output);
        });
        
        $('#canvas').on('click','#nino',function(){
            output = Mustache.render(plantilla[3].pag3);
            $('#canvas').html(output);
        });
    
	});
});
