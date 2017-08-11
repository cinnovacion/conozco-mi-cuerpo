define(function (require) {
    return [
        {//Sistema Reproductor
            'sr' : '<div class="fondo" id="pag1"><h1 class="objeto titulo">Selecciona el sistema reproductor<br/> que deseas estudiar</h1><button id="nina" class="objeto boton btn_sel_f" type="button" data="1"><h3 class="objeto">Femenino</h3></button><button id="nino" class="objeto boton btn_sel_m" type="button" data="2"><h3 class="objeto">Masculino</h3></button></div>',
       
            'menu_srf' : '<div class="fondo"><button class="btn_back_menu btn_back">Menu</button><h1 class="objeto titulo">Sistema Reproductor Femenino</h1><button class="boton" id="exploro_f"><h3 class="objeto">Exploro</h3></button><button class="boton" id="juego"><h3 class="objeto">Juego</h3></button></div>',
       
            'srf' : '<div class="fondo"><button class="btn_back btn_sel_f">Atras</button><h1 class="objeto titulo">Sistema reproductor Femenino.<br/>Seleccione que deseas estudiar</h1><div id="img_srf"><button class="btn_radius" id="btn_ovario"></button><button class="btn_radius" id="btn_falopio"></button><button class="boton btn_radius" id="btn_vagina"></button><button class="boton btn_radius" id="btn_ovulo"></button><button class="btn_radius" id="btn_uretra"></button><button class="btn_radius" id="btn_utero"></button></div></div>',
            
            'pf' : '<div class="fondo"><div><img id="grafica" src="{{grafica}}"><div class="text_titulo">{{titulo}}</div><div class="text_matrix">{{teoria}}</div></div><button class="btn_atrasf btn_back">Atras</button></div>',
            
            'menu_srm' : '<div class="fondo"><button class="btn_back_menu btn_back">Menu</button><h1 class="objeto titulo">Sistema Reproductor Masculino</h1><button class="boton" id="exploro_m"><h3 class="objeto">Exploro</h3></button><button class="boton" id="juego"><h3 class="objeto">Juego</h3></button></div>',
      
            'srm' : '<div class="fondo"><button class="btn_back btn_sel_f">Atras</button><h1 class="objeto titulo">Sistema reproductor Masculino.<br/>Selecciona que deseas estudiar</h1><div id="img_srm"><button class="btn_radius" id="btn_vesicula"></button><button class="btn_radius" id="btn_prostata"></button><button class="boton btn_radius" id="btn_cdeferente"></button><button class="boton btn_radius" id="btn_uretrav"></button><button class="btn_radius" id="btn_testiculos"></button><button class="btn_radius" id="btn_pene"></button><button class="btn_radius" id="btn_escroto"></button></div></div>',
            
            'pmenu' : '<div class="fondo"><div><img id="grafica" src="{{grafica}}"><div class="text_titulo">{{titulo}}</div><div class="text_matrix">{{teoria}}</div></div><button class="btn_atras btn_back">Atras</button></div>',
            
            'pm' : '<div class="fondo"><div><img id="graficam" src="{{grafica}}"><div class="text_titulo">{{titulo}}</div><div class="text_matrix">{{teoria}}</div></div><button class="btn_atrasm btn_back">Atras</button></div>',
        },
        {
            'pl' : ['#nino' , 1 , "menu"]
        }
    ];
});