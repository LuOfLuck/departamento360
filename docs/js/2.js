const boxEnd = document.getElementById("button--end")
const boxCartel = document.getElementById("box--cartel")
const buttonTop = document.getElementById("button--top")
var boxTitulo = boxCartel.querySelector(".box__header__h3")
var boxDescripcion = boxCartel.querySelector(".box__body__p")

var iframe = document.querySelector('#iframe');
//C:\Users\Lucas\AppData\Roaming\npm\http-server
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
                "id":1,
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
                "id":0,
                "pitch": -8.27,
                "yaw":  53.44,
                "type": "scene",
                "cssClass": "custom-exit",
                "text": "",
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
        this.viewerExit()

    }
    createdViewer(modelos, cuartos){
        let v = {}
        let scenes={};
        v = {
            "default": {
                "firstScene": cuartos[0].id,
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
            console.log(event)
            const coords = this.viewer.mouseEventToCoords(event);
            const pitch = coords[0];
            const yaw = coords[1];
            console.log(`Click detectado en -> Pitch: ${pitch}, Yaw: ${yaw}`);
        });
    }
    viewerFocus(args){
        this.viewer.lookAt(args.pitch, args.yaw, 20, 2500);

        boxEnd.classList.add('button--end--active');
        boxCartel.classList.add('box--active');
        boxTitulo.innerText = args.titulo;
        boxDescripcion.innerText = args.descripcion;
        
        if(args.url!=""){
            iframe.src = args.url;
            iframe.classList.add('box__body__iframe--active');
        }else{
            iframe.classList.remove('box__body__iframe--active');
        }

    }
    viewerNormalize(){
        let hotdiv = document.querySelectorAll(".custom-hotspot--desactive")
        hotdiv.forEach(function (element) {
            element.classList.remove("custom-hotspot--desactive")
        });
        buttonTop.style.display = 'block'
        boxEnd.classList.remove("button--end--active");
        boxCartel.classList.remove("box--active");
        let pitch = vistaPrinc.viewer.getPitch(); 
        let yaw   = vistaPrinc.viewer.getYaw();   
        this.viewer.lookAt(pitch, yaw, 100, 2500);

    }
    viewerExit(){
        boxEnd.addEventListener("click", ()=> this.viewerNormalize()) 
        //ola
    }

}
let vistaPrinc;
const main = ()=>{
    vistaPrinc = new ViewerConstructor(modelos, cuartos)
    console.log(vistaPrinc)
}
main()

function hotspot(hotSpotDiv, args) {
    let pulse;
    pulse = document.createElement("div")
    pulse.classList.add('pulse');
    hotSpotDiv.classList.add('custom-tooltip');
    hotSpotDiv.appendChild(pulse)
    hotSpotDiv.addEventListener("click", (event) => {
        vistaPrinc.viewerFocus(args);
        hotSpotDiv.classList.add('custom-hotspot--desactive');
    });
}