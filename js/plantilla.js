define(function (require) {
    return [
        {//Sistema Reproductor
            'sr' : '<div id="fondo" id="pag1"><h1 class="objeto titulo">Selecciona el Sistema Reproductor<br/> que deseas estudiar</h1><button id="nina" class="objeto boton btn_sel_f" type="button" data="1"><h3 class="objeto">Femenino</h3></button><button id="nino" class="objeto boton btn_sel_m" type="button" data="2"><h3 class="objeto">Masculino</h3></button></div>',
       
            'menu_srf' : '<div id="fondo"><button class="btn_back_menu btn_back">Menú</button><h1 class="objeto titulo">Sistema Reproductor Femenino</h1><button class="boton" id="exploro_f"><h3 class="objeto">Exploro</h3></button><button class="boton" id="juego_f"><h3 class="objeto">Juego</h3></button></div>',
       
            'srf' : '<div id="fondo"><button class="btn_back btn_sel_f">Atras</button><h1 class="objeto titulo">Sistema reproductor Femenino<br/>Seleccione que deseas estudiar</h1><div id="img_srf"><button class="btn_radius popup" id="btn_ovario"><span class="popuptext">Ovario</span></button><button class="btn_radius popup" id="btn_falopio"><span class="popuptext">Trompa de Falopio</span></button><button class="boton btn_radius popup" id="btn_vagina"><span class="popuptext">Vagina</span></button><button class="boton btn_radius popup" id="btn_ovulo"><span class="popuptext">Óvulo</span></button><button class="btn_radius popup" id="btn_uretra"><span class="popuptext">Uretra</span></button><button class="btn_radius popup" id="btn_utero"><span class="popuptext">Útero</span></button></div></div>',
            
            'pf' : '<div id="fondo"><div><img id="graficaf" src="{{grafica}}"><div class="text_titulo">{{titulo}}</div><div class="text_matrix">{{teoria}}</div></div><button class="btn_atrasf btn_back">Atrás</button></div>',
            
            'menu_srm' : '<div id="fondo"><button class="btn_back_menu btn_back">Menú</button><h1 class="objeto titulo">Sistema Reproductor Masculino</h1><button class="boton" id="exploro_m"><h3 class="objeto">Exploro</h3></button><button class="boton" id="juego_m"><h3 class="objeto">Juego</h3></button></div>',
      
            'srm' : '<div id="fondo"><button class="btn_back btn_sel_m">Atrás</button><h1 class="objeto titulo">Sistema Reproductor Masculino<br/>Selecciona que deseas estudiar</h1><div id="img_srm"><button class="btn_radius popup" id="btn_vesicula"><span class="popuptext">Vesícula Seminal</span></button><button class="btn_radius popup" id="btn_prostata"><span class="popuptext">Próstata</span></button><button class="boton btn_radius popup" id="btn_cdeferente"><span class="popuptext">Conducto Deferente</span></button><button class="boton btn_radius popup" id="btn_uretrav"><span class="popuptext">Úretra</span></button><button class="btn_radius popup" id="btn_testiculos"><span class="popuptext">Testículo</span></button><button class="btn_radius popup" id="btn_pene"><span class="popuptext">Pene</span></button><button class="btn_radius popup" id="btn_escroto"><span class="popuptext">Escroto</span></button></div></div>',
            
            'pmenu' : '<div id="fondo"><div><img id="grafica" src="{{grafica}}"><div class="text_titulo">{{titulo}}</div><p class="text_matrix">{{teoria}}</p></div><button class="btn_atras btn_back">Atrás</button></div>',
            
            'pm' : '<div id="fondo"><div><img id="graficam" src="{{grafica}}"><div class="text_titulo">{{titulo}}</div><p class="text_matrix">{{teoria}}</p></div><button class="btn_atrasm btn_back">Atrás</button></div>',
            
            'juego_f' : '<div id="fondo"><h1 id="insturccion">Arratra los nombre a su lugar correspondiente</h1><div id="etiquetas"></div>{{#botones}}<p class="nombre">{{boton}}</p>{{/botones}}<div id="grafica">{{#respuestas}}<div class="respuesta" id="{{res}}"></div>{{/respuestas}}<img src="{{grafica}}"></div><div id="botones"><button id="btn_reg_f">Atrás</button><button id="btn_rev">Comprobar</button><button id="btn_rin_f">Reiniciar</button></div><div id="triangulo_f"></div><div id="Modal" class="modal"><div class="modal-content"><img src=""><button id="Close" class="close">Aceptar</button></div></div></div>',
            
            'juego_m' : '<div id="fondo"><h1 id="insturccion">Arratra los nombre a su lugar correspondiente</h1><div id="etiquetas"></div>{{#botones}}<p class="nombre">{{boton}}</p>{{/botones}}<div id="grafica">{{#respuestas}}<div class="respuesta" id="{{res}}"></div>{{/respuestas}}<img src="{{grafica}}"></div><div id="botones"><button id="btn_reg_m">Atrás</button><button id="btn_rev">Comprobar</button><button id="btn_rin_m">Reiniciar</button></div><div id="triangulo_m"></div><div id="Modal" class="modal"><div class="modal-content"><img src=""><button id="Close" class="close">Aceptar</button></div></div></div>'
        }
    ];
});
