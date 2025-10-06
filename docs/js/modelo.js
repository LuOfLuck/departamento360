const modelos = {
    "circle":{
        "objetos":[
            {

                "pitch": -8.40,
                "yaw": 3.23,
                "cssClass": "custom-hotspot",
                "createTooltipArgs": {
                    "titulo":"Smart TV 32 pulgadas",
                    "descripcion":`
                    Una tele copada, todos queremos una telesmart, 
                    yo quiero una tele tu quieres una tele, ella quiere una tele, metele wacho
                    mira esta tremenda es de colores y tiene waifai incluido

                    `,
                    "url":"https://www.youtube.com/embed/2ajWUp8F694?si=XEYk7BVDaDiQmnAD",
                    "pitch": -8.40,
                    "yaw": 3.23,
            }
            },  
            {
               
                "pitch": -21.231,
                "yaw": 95.08,
                "cssClass": "custom-hotspot",
                "createTooltipArgs": {
                    "titulo":"2 cosinas de pared",
                    "descripcion":`
                    ¿Porque tener una si podes tener 2?
                    No hablo de esposas else cocinas de pared bien copadas,
                    eheh mira aca te haces tremendas comidas
                    comer es eso que hace feliz a la gente
                    Se feliz :)`,
                    "url":"",
                    "pitch": -21.231,
                    "yaw": 95.08,
                 }
            },  
        ],
        "salidas":[
            {       
                "id":0,
                "pitch": -25.99,
                "yaw": 44.63,
                "type": "scene",
                "sceneId": "1",
                "cssClass": "custom-exit",
            },  
        ],
    },
    "house":{
            "objetos":[
            {
                "pitch": 14.1,
                "yaw": 1.5,
                "cssClass": "custom-hotspot",
                "createTooltipArgs": {
                    "titulo":"RELOS GIGANTE",
                    "descripcion":`
                        Una reloj copada, todos queremos un reloj, 
                        yo quiero un reloj tu quieres una reloj, ella quiere una reloj, metele wacho
                        mira esta tremenda es de colores y tiene waifai incluido

                        `, "url":"https://www.youtube.com/embed/2ajWUp8F694?si=XEYk7BVDaDiQmnAD",
                    "pitch": 14.1,
                    "yaw": 1.5,
                }
            },  
        ],
        "salidas":[
            {       
                "id":1,
                "pitch": -8.27,
                "yaw":  53.44,
                "type": "scene",
                "cssClass": "custom-exit",
                "text": "",
                "sceneId": "0"

            },  
             {       
                "id":2,
                "pitch": -9.08,
                "yaw":  -42.33,
                "type": "scene",
                "cssClass": "custom-exit",
                "text": "",
                "sceneId": "2"

            },  
        ],
    },
    "cuarto":{
            "objetos":[
            {
                "pitch": -42.38,
                "yaw": 32.36,
                "cssClass": "custom-hotspot",
                "createTooltipArgs": {
                    "titulo":"RELOS GIGANTE",
                    "descripcion":`
                        Una reloj copada, todos queremos un reloj, 
                        yo quiero un reloj tu quieres una reloj, ella quiere una reloj, metele wacho
                        mira esta tremenda es de colores y tiene waifai incluido

                        `, "url":"https://www.youtube.com/embed/2ajWUp8F694?si=XEYk7BVDaDiQmnAD",
                    "pitch": -42.38,
                    "yaw": 32.36,
                }
            },  
        ],
        "salidas":[  
             {       
                "id":2,
                "pitch":  -19.03,
                "yaw":  82.30,
                "type": "scene",
                "cssClass": "custom-exit",
                "text": "",
                "sceneId": "1"

            },  
        ],
    }
}
const cuartos = [
    {
        "id":"0",
        "nombre": "circle",
        "url":"https://www.luofluck.tech/360/1.jpg",
        "modelos":modelos.circle.objetos,
        "salidas":modelos.circle.salidas,

    },
    {
        "id":"1",
        "nombre": "house",
        "url":"https://www.luofluck.tech/360/2.jpg",
        "modelos":modelos.house.objetos,
        "salidas":modelos.house.salidas,
    },
    {
        "id":"2",
        "nombre": "cuarto",
        "url":"https://www.luofluck.tech/360/3.jpg",
        "modelos":modelos.cuarto.objetos,
        "salidas":modelos.cuarto.salidas,
    }

]
