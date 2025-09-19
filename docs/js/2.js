const modelos = {
    "circle":{
        "objetos":[
            {
                "titulo":"Smart TV 32 pulgadas",
                "descripcion":`
                    Una tele copada, todos queremos una telesmart, 
                    yo quiero una tele tu quieres una tele, ella quiere una tele, metele wacho
                    mira esta tremenda es de colores y tiene waifai incluido

                    `,
                "url":"https://www.youtube.com/embed/2ajWUp8F694?si=XEYk7BVDaDiQmnAD",
                
                "pitch": 14.1,
                "yaw": 1.5,
                "cssClass": "custom-hotspot",
                "createTooltipFunc": hotspot,
            },  
            {
                "titulo":"2 cosinas de pared",
                "descripcion":`
                    ¿Porque tener una si podes tener 2?
                    No hablo de esposas else cocinas de pared bien copadas,
                    eheh mira aca te haces tremendas comidas
                    comer es eso que hace feliz a la gente
                    Se feliz :)
                `,
                "url":"",
                "pitch": 0,
                "yaw": 0,
                "cssClass": "custom-hotspot",
                "createTooltipFunc": hotspot,
            },  
        ],
        "salidas":[
            {       
                "id":1,
                "pitch": -2.1,
                "yaw": 132.9,
                "type": "scene",
                "text": "Spring House or Dairy",
                "sceneId": "1"
            },  
        ],
    },
    "house":{
            "objetos":[
            {
                "titulo":"Smart TV 32 pulgadas",
                "descripcion":`
                    Una tele copada, todos queremos una telesmart, 
                    yo quiero una tele tu quieres una tele, ella quiere una tele, metele wacho
                    mira esta tremenda es de colores y tiene waifai incluido

                    `,
                "url":"https://www.youtube.com/embed/2ajWUp8F694?si=XEYk7BVDaDiQmnAD",
                
                "pitch": 14.1,
                "yaw": 1.5,
                "cssClass": "custom-hotspot",
                "createTooltipFunc": hotspot,
            },  
            {
                "titulo":"2 cosinas de pared",
                "descripcion":`
                    ¿Porque tener una si podes tener 2?
                    No hablo de esposas else cocinas de pared bien copadas,
                    eheh mira aca te haces tremendas comidas
                    comer es eso que hace feliz a la gente
                    Se feliz :)
                `,
                "url":"",
                "pitch": 0,
                "yaw": 0,
                "cssClass": "custom-hotspot",
                "createTooltipFunc": hotspot,
            },  
        ],
        "salidas":[
            {       
                "id":0,
                "pitch": -2.1,
                "yaw": 132.9,
                "type": "scene",
                "text": "Spring House or Dairy",
                "sceneId": "0"
            },  
        ],
    }
}
const cuartos = [
    {
        "id":"0",
        "url":"https://www.luofluck.tech/360/1.jpg",
        "modelos":modelos.circle.objetos,
        "salidas":modelos.circle.salidas,

    },
    {
        "id":"1",
        "url":"https://www.luofluck.tech/360/2.jpg",
        "modelos":modelos.house.objetos,
        "salidas":modelos.house.salidas,
    }
]

const creatViewer = (modelos, cuartos)=>{
    let scenes={};
    v = {
        "default": 
            {
                "firstScene": cuartos[0].id,
                "author": "Lucas",
                "sceneFadeDuration": 1000,
                "autoLoad": true,
                "showControls": false,
            },
        "scenes": {
        }
    }

    cuartos.forEach(function(element, index) {
        scenes[`${index}`] = {
            title: "",
            hfov: 110,
            pitch: 0,
            yaw: 0,
            type: "equirectangular",
            panorama: element.url,
            hotSpots: []
        };
        let objetos = []
        element.modelos.forEach((e, i)=>{
            objetos.push(e)
        })
        element.salidas.forEach((e, i)=>{
            objetos.push(e)
        })
        scenes[`${index}`].hotSpots = objetos
         console.log(objetos)
    });

    v.scenes = scenes;
    console.log(v)
    return v
}
const viewer = pannellum.viewer('panorama',  creatViewer(modelos, cuartos));


// Hot spot creation function
function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    var span = document.createElement('span');
    span.innerHTML = args;
    hotSpotDiv.addEventListener("click", (event) => {
        alert(event)
    });
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
}