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
        
        function mustache(id,plantilla,txt){
            $('#canvas').on('click',id ,function(){
            output = Mustache.render(plantilla,txt);
            $('#canvas').html(output);
        });
        }

        $(document).ready(function(){
            output = Mustache.render(plantilla[2].pag1);
            $('#canvas').html(output);
        });
        
        for(var i=0; i<plantilla[5].length; i++){
            mustache(plantilla[5].pl[i]);
        }
        
        mustache('.btn_sel_f',plantilla[1].menu);
        mustache("#exploro",plantilla[3].pag2);
        mustache('#btn_ovario',plantilla[3].ovario,{text : plantilla[0].contenido.ovarios});
        mustache('#btn_falopio',plantilla[3].falopio,{text : plantilla[0].contenido.falopio});
        mustache('#btn_vagina',plantilla[3].vagina,{text : plantilla[0].contenido.vagina});
        mustache('#btn_ovulo',plantilla[3].ovulo,{text : plantilla[0].contenido.ovulo});
        mustache('#btn_uretra',plantilla[3].uretra,{text : plantilla[0].contenido.uretra});
        mustache('#btn_utero',plantilla[3].utero,{text : plantilla[0].contenido.utero});
        mustache(".btn_atras",plantilla[3].pag2);
        mustache('.btn_back_menu',plantilla[2].pag1);
        
	});
});
