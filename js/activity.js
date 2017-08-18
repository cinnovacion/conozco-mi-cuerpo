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
    
    function dragMoveListener (event) {
        var target = event.target,
            // Mantener la posición arrastrada en los atributos data-x / data-y
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
        // Trasladar el elemento
        target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        // Actualizar los atributos de posición
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }
    
    /**
     * Funcion que remueve los acentos
     */
    function remove_accent(str) {
        // Mapa de acentos
        var map={'À':'A','Á':'A','Â':'A','Ã':'A','Ä':'A','Å':'A','Æ':'AE','Ç':'C','È':'E','É':'E','Ê':'E','Ë':'E','Ì':'I','Í':'I','Î':'I','Ï':'I','Ð':'D','Ñ':'N','Ò':'O','Ó':'O','Ô':'O','Õ':'O','Ö':'O','Ø':'O','Ù':'U','Ú':'U','Û':'U','Ü':'U','Ý':'Y','ß':'s','à':'a','á':'a','â':'a','ã':'a','ä':'a','å':'a','æ':'ae','ç':'c','è':'e','é':'e','ê':'e','ë':'e','ì':'i','í':'i','î':'i','ï':'i','ñ':'n','ò':'o','ó':'o','ô':'o','õ':'o','ö':'o','ø':'o','ù':'u','ú':'u','û':'u','ü':'u','ý':'y','ÿ':'y','Ā':'A','ā':'a','Ă':'A','ă':'a','Ą':'A','ą':'a','Ć':'C','ć':'c','Ĉ':'C','ĉ':'c','Ċ':'C','ċ':'c','Č':'C','č':'c','Ď':'D','ď':'d','Đ':'D','đ':'d','Ē':'E','ē':'e','Ĕ':'E','ĕ':'e','Ė':'E','ė':'e','Ę':'E','ę':'e','Ě':'E','ě':'e','Ĝ':'G','ĝ':'g','Ğ':'G','ğ':'g','Ġ':'G','ġ':'g','Ģ':'G','ģ':'g','Ĥ':'H','ĥ':'h','Ħ':'H','ħ':'h','Ĩ':'I','ĩ':'i','Ī':'I','ī':'i','Ĭ':'I','ĭ':'i','Į':'I','į':'i','İ':'I','ı':'i','Ĳ':'IJ','ĳ':'ij','Ĵ':'J','ĵ':'j','Ķ':'K','ķ':'k','Ĺ':'L','ĺ':'l','Ļ':'L','ļ':'l','Ľ':'L','ľ':'l','Ŀ':'L','ŀ':'l','Ł':'L','ł':'l','Ń':'N','ń':'n','Ņ':'N','ņ':'n','Ň':'N','ň':'n','ŉ':'n','Ō':'O','ō':'o','Ŏ':'O','ŏ':'o','Ő':'O','ő':'o','Œ':'OE','œ':'oe','Ŕ':'R','ŕ':'r','Ŗ':'R','ŗ':'r','Ř':'R','ř':'r','Ś':'S','ś':'s','Ŝ':'S','ŝ':'s','Ş':'S','ş':'s','Š':'S','š':'s','Ţ':'T','ţ':'t','Ť':'T','ť':'t','Ŧ':'T','ŧ':'t','Ũ':'U','ũ':'u','Ū':'U','ū':'u','Ŭ':'U','ŭ':'u','Ů':'U','ů':'u','Ű':'U','ű':'u','Ų':'U','ų':'u','Ŵ':'W','ŵ':'w','Ŷ':'Y','ŷ':'y','Ÿ':'Y','Ź':'Z','ź':'z','Ż':'Z','ż':'z','Ž':'Z','ž':'z','ſ':'s','ƒ':'f','Ơ':'O','ơ':'o','Ư':'U','ư':'u','Ǎ':'A','ǎ':'a','Ǐ':'I','ǐ':'i','Ǒ':'O','ǒ':'o','Ǔ':'U','ǔ':'u','Ǖ':'U','ǖ':'u','Ǘ':'U','ǘ':'u','Ǚ':'U','ǚ':'u','Ǜ':'U','ǜ':'u','Ǻ':'A','ǻ':'a','Ǽ':'AE','ǽ':'ae','Ǿ':'O','ǿ':'o'};
        var res=''; // Variable donde se almacenara la palabre sin acentos
        // Ciclo que recorre cada letra de la palabra
        for (var i=0; i<str.length; i++) {
            c = str.charAt(i); // Captura cada letra de la palabra
            res += map[c] || c; // Guarda la letra procesada y sin acentos
        }
        // Retorna la palabra sin acentos
        return res;
    }

	// Manipula el DOM cuando el este cargado por completo.
	require(['domReady!'], function (doc) {

        var output     = '';
        var referencia = 0;
        var comprovar  = 0;
        var movx, movy = 0;

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
        //mustache("#juego_f",plantilla[0].juego_f, contenido[13]);
        $('#canvas').on('click', '#juego_f',function(){
            output = Mustache.render(plantilla[0].juego_f, contenido[13]);
            $('#canvas').html(output);
            var alto = 250;
            $('.nombre').each(function(){
                $(this).css({'top':alto+'px', 'left':'30px'});
                alto += 50;
            });
        });
        
        mustache("#btn_reg_f",plantilla[0].menu_srf);
        //Reiniciar el juego
        //mustache("#btn_rin_f",plantilla[0].juego_f, contenido[13]);
        $('#canvas').on('click', '#btn_rin_f',function(){
            output = Mustache.render(plantilla[0].juego_f, contenido[13]);
            $('#canvas').html(output);
            var alto = 250;
            $('.nombre').each(function(){
                $(this).css({'top':alto+'px', 'left':'30px'});
                alto += 50;
            });
        });
        
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
        //mustache("#juego_m",plantilla[0].juego_m, contenido[14]);
        $('#canvas').on('click', '#juego_m',function(){
            output = Mustache.render(plantilla[0].juego_m, contenido[14]);
            $('#canvas').html(output);
            var alto = 250;
            $('.nombre').each(function(){
                $(this).css({'top':alto+'px', 'left':'30px'});
                alto += 50;
            });
        });
        //Reiniciar el juego
        //mustache("#btn_rin_m",plantilla[0].juego_m, contenido[14]);
        $('#canvas').on('click', '#btn_rin_m',function(){
            output = Mustache.render(plantilla[0].juego_m, contenido[14]);
            $('#canvas').html(output);
            var alto = 250;
            $('.nombre').each(function(){
                $(this).css({'top':alto+'px', 'left':'30px'});
                alto += 50;
            });
        });
        
        mustache("#btn_reg_m",plantilla[0].menu_srm);
        
        // Elementos de destino con la clase "arrastrable"
        interact('.nombre').draggable({
            // Habilitar lanzamiento inercial
            inertia: true,
            // Mantener el elemento dentro del área de su padre
            restrict: {
                restriction: "parent",
                endOnly: true,
                elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
            },
            // Habilitar autoScroll
            //autoScroll: true,
            // Llamar a esta función en cada evento de movimiento de arrastre
            onmove: dragMoveListener
        });
        window.dragMoveListener = dragMoveListener;
        
        // Permiten arrastrar los arrastradores a esta
        interact('.respuesta').dropzone({
            // Sólo acepta elementos que coincidan con este selector CSS
            accept: '.nombre',
            // Requiere un solapamiento de 75% para que una gota sea posible
            overlap: 0.75,
            // Escuchar eventos relacionados con la caída:
            ondragenter: function (event) {
                var draggableElement = event.relatedTarget, dropzoneElement = event.target;
                // retroalimentación de la posibilidad de una caída
                dropzoneElement.classList.add('drop-target');
                var arrastrable = remove_accent(draggableElement.textContent.toLowerCase()).replace(/\s/g, '');
                if(arrastrable === dropzoneElement.id)
                    comprovar++;
            },
            ondragleave: function (event) {
                // Eliminar el estilo de retroalimentación de la caída
                event.target.classList.remove('drop-target');
                if(remove_accent(draggableElement.textContent.toLowerCase()) === dropzoneElement.id)
                    if(comprovar > 0)
                        comprovar--;
            }
        });
        
        $(document).on('click', '#btn_rev', function(){
            if(comprovar == 6) {
                $('.modal-content img').attr('src', '../img/ganador.png');
                $('#Modal').css('display', 'block');
            } 
            else {
                $('.modal-content img').attr('src', '../img/perdedor.png');
                $('#Modal').css('display', 'block');
            } 
        });
        
        $(document).on('click', '#Close', function(){
            $('#Modal').css('display', 'none');
            if(comprovar == 6) location.reload();
        });
	});
});
