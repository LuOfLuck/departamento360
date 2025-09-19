

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
                 }
            },  
        ],
        "salidas":[
            {       
                "id":1,
                "pitch": -25.99,
                "yaw": 44.63,
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
                "createTooltipArgs": {
                    "titulo":"Smart TV 32 pulgadas",
                    "descripcion":`
                    Una tele copada, todos queremos una telesmart, 
                    yo quiero una tele tu quieres una tele, ella quiere una tele, metele wacho
                    mira esta tremenda es de colores y tiene waifai incluido
                    `,
                    "url":"https://www.youtube.com/embed/2ajWUp8F694?si=XEYk7BVDaDiQmnAD",
                
                }
            },  
            {
                "pitch": 0,
                "yaw": 0,
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
                }
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


class ViewerConstructor{
    constructor(modelos, cuartos) {
        this.cuartos = cuartos;
        this.modelos = modelos;
       // this.boxEnd = boxEnd;
        this.viewer  = pannellum.viewer('panorama',  this.createdViewer(this.modelos, this.cuartos))
        this.viewerClic()

    }
    createdViewer(modelos, cuartos){
        let v = {}
        let scenes={};
        v = {
            "default": {
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
                e.createTooltipFunc = hotspot;
                objetos.push(e)
                
            })
            element.salidas.forEach((e, i)=>{
                objetos.push(e)
            })
            scenes[`${index}`].hotSpots = objetos
        });
        v.scenes = scenes;
        return v
    }

    viewerClic(){
        this.viewer.on("mousedown", (event) => {
            const coords = this.viewer.mouseEventToCoords(event);
            const pitch = coords[0];
            const yaw = coords[1];
            console.log(`Click detectado en -> Pitch: ${pitch}, Yaw: ${yaw}`);
        });

    }

}
const main = ()=>{
    const vistaPrinc = new ViewerConstructor(modelos, cuartos)
    console.log(vistaPrinc)
}
main()

// Hot spot creation function
function hotspot(hotSpotDiv, args) {
    hotSpotDiv.classList.add('custom-tooltip');
    hotSpotDiv.addEventListener("click", (event) => {
        alert(args.titulo)
        console.log(args.titulo)
    });
}