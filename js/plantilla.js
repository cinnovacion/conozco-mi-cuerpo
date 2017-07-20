define(function (require) {
    return [
        {
            'contenido' : {
                'ovarios' : 'Los ovarios son dos, están situados en el abdomen de la mujer; y producen los óvulos.',
                
                'falopio' : 'Son dos conductos que comunican a cada ovario con el útero o matriz. En las trompas de falopio se encuentran unas células              ciliadas que ayudan a transportar el óvulo hasta el útero.',
                
                'vagina' : 'Es el conducto que comunica el útero con el exterior, tiene propiedades elásticas. Es un órgano tubular que sirve de vía de acceso para los espermatozoides y de salida para el flujo menstrual. También es el canal por donde nace el nuevo ser.',
                
                'ovulo' : 'Célula sexual femenina, originada en el ovario con un ritmo de unos 28 días. Un óvulo es más grande que un espermatozoide y carece de movilidad.',
                
                'uretra' : 'Es un conducto que comunica la vejiga con el orificio urinario en la pared del cuerpo. La uretra es más larga en el hombre que en la mujer, ya que recorre el interior del pene. Además de servir para la evacuación de la orina, la uretra en hombre también sirve para llevar el líquido seminal.',
                
                'utero' : 'El útero o matriz es una cavidad musculosa situado bajo el vientre, cubierta en su parte interna por una capa de células del tejido epitelial.Este es el órgano que durante el embarazo aloja al feto, para su desarrollo.'
               }
        },
        {
            'menu' : '<div class="fondo"><button class="btn_back_menu btn_back">Menu</button><button class="boton" id="exploro"><h3 class="objeto">Exploro</h3></button><button class="boton" id="juego"><h3 class="objeto">Juego</h3></button></div>',
            
        },
        {
            'pag1' : '<div class="fondo" id="pag1"><h1 class="objeto titulo">Seleccione el sistema reproductor<br/> que deseas estudiar</h1><button id="nina" class="objeto boton btn_sel_f" type="button"><h3 class="objeto">Femenino</h3></button><button id="nino" class="objeto boton" type="button"><h3 class="objeto">Masculino</h3></button></div>'
        },
        {
            'pag2' : '<div class="fondo"><button class="btn_back btn_sel_f">Atras</button><h1 class="objeto titulo">Sistema reproductor Femenino.<br/>Seleccione que deseas estudiar</h1><div id="img_srf"><button class="btn_radius" id="btn_ovario"></button><button class="btn_radius" id="btn_falopio"></button><button class="boton btn_radius" id="btn_vagina"></button><button class="boton btn_radius" id="btn_ovulo"></button><button class="btn_radius" id="btn_uretra"></button><button class="btn_radius" id="btn_utero"></button></div></div>',
            
            'ovario' : '<div class="fondo"><div id="ovario"><div class="text_matrix">{{text}}</div></div><button class="btn_atras btn_back">Atras</button></div>',
            
            'falopio' : '<div class="fondo"><div id="falopio"><div class="text_matrix">{{text}}</div></div><button class="btn_atras btn_back">Atras</button></div>',
            
            'vagina' : '<div class="fondo"><div id="vagina"><div class="text_matrix">{{text}}</div></div><button class="btn_atras btn_back">Atras</button></div>',
            
            'ovulo' : '<div class="fondo"><div id="ovulo"><div class="text_matrix">{{text}}</div></div><button class="btn_atras btn_back">Atras</button></div>',
            
            'uretra' : '<div class="fondo"><div id="uretra"><div class="text_matrix">{{text}}</div></div><button class="btn_atras btn_back">Atras</button></div>',
            
            'utero' : '<div class="fondo"><div id="utero"><div class="text_matrix">{{text}}</div></div><button class="btn_atras btn_back">Atras</button></div>'
        },
        {
            'pag3' : '<div id="pag3" class="fondo"><h1 class="objeto titulo">Sistema reproductor Masculino.<br/>Seleccione que deseas estudiar</h1></div>'
        },
        {
            'pl' : ['#nino' , 1 , "menu"]
        }
    ];
});