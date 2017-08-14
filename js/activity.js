define(function (require) {
    var activity    = require("sugar-web/activity/activity");
    var datastore   = require("sugar-web/datastore");
    // Librerias
    var jquery      = require("jquery");
    var interact    = require("interact");
    var Mustache    = require("mustache");
    // Plantillas
    var plantilla    = require("../js/plantilla.js");
    var contenido    = require("../js/contenido.js");
    
    // Captura cualquier click sobre la pantalla para ser redirigido a mustache. 
    function mustache(id,plantilla,txt){
        var output = '';
        $('#canvas').on('click',id ,function(){
            output = Mustache.render(plantilla, txt);
            $('#canvas').html(output);
        });
    };
    
    var moveItem = function(event) {
        // elemento actual
        var target = event.target;
        // Captura el valor en el eje x + cambio de lugar
        if (!target.hasAttribute('data-x')) {
            x0 = $(target).position().top;
            y0 = $(target).position().left;
        }
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
        // Traslada los elementos
        target.style.top  = x0 + 'px';
        target.style.left = y0 + 'px';
        target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        // Actualiza los atributos del elemento
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
        console.log(ejer + '!');
    };

	// Manipula el DOM cuando el este cargado por completo.
	require(['domReady!'], function (doc) {

        var output     = '';
        var referencia = 0;

        // Inicializa la actividad.
        activity.setup();
        
        // Recarga la actividad cuando se clikea el bonto de recargar pagina.
        $('.reload-button').on('click', function() {
            location.reload();
        });
        
        // Carga la plantilla de la pagina inicial.
        $(document).ready(function(){
            output = Mustache.render(plantilla[0].sr);
            $('#canvas').html(output);
        });
        
        // No se.
        for(var i=0; i<plantilla[1].length; i++){
            mustache(plantilla[1].pl[i]);
        }
        
        // Carga el menu de sistema reproductor femenino
        mustache('.btn_sel_f', plantilla[0].menu_srf);
        
        // Regresa a la seleccion de sistema reproductor
        mustache('.btn_back_menu',plantilla[0].sr);
        
        //Botones de exploracion de sistema reproductor femenino
        mustache('#exploro_f', plantilla[0].srf);
        
        //botones del los contenidos de sistema femenino
        mustache('#btn_ovulo',plantilla[0].pf, contenido[0]);
        mustache('#btn_falopio',plantilla[0].pf, contenido[1]);
        mustache('#btn_ovario',plantilla[0].pf, contenido[2]);
        mustache('#btn_utero',plantilla[0].pf, contenido[3]);
        mustache('#btn_uretra',plantilla[0].pf, contenido[4]);
        mustache('#btn_vagina',plantilla[0].pf, contenido[5]);
        
        mustache(".btn_atrasf",plantilla[0].srf);
        
        //Juego Femenino
        mustache("#juego_f",plantilla[0].juego_f, contenido[13]);
        mustache("#btn_reg_f",plantilla[0].menu_srf);
        
        //carga el menu del sistema reproductor masculino
        mustache('.btn_sel_m', plantilla[0].menu_srm);
        
        //Botones de exploracion de sistema reproductor masculino
        mustache('#exploro_m', plantilla[0].srm);
        
        //botones del los contenidos de sistema masculino
        mustache('#btn_vesicula',plantilla[0].pm, contenido[6]);
        mustache('#btn_prostata',plantilla[0].pm, contenido[7]);
        mustache('#btn_cdeferente',plantilla[0].pm, contenido[8]);
        mustache('#btn_uretrav',plantilla[0].pm, contenido[9]);
        mustache('#btn_testiculos',plantilla[0].pm, contenido[10]);
        mustache('#btn_pene',plantilla[0].pm, contenido[11]);
        mustache('#btn_escroto',plantilla[0].pm, contenido[12]);
        
        mustache(".btn_atrasm",plantilla[0].srm);
        
        // Juego Masculino
        mustache("#juego_m",plantilla[0].juego_m); 
        
        var items = interact('.nombre');
        // Atributos de los objetos arrastrables
        items.draggable({
            initial:true,
            restrict: {
                restriction: document.getElementById('canvas'),
                endOnly: true,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            onmove:moveItem,
        });
	});
});
