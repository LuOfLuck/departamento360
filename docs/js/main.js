const boxEnd = document.getElementById("button--end")
const boxCartel = document.getElementById("box--cartel")
const panorama = document.getElementById("panorama")
const buttonAcceso = document.getElementById("button-acceso")
const consejo = document.getElementById("consejo__span")
const acceso = document.getElementById("acceso")
const acceso_cont = document.getElementById("acceso_cont")
const escene_change = document.getElementById("escene_change")


var boxTitulo = boxCartel.querySelector(".box__header__h3")
var boxDescripcion = boxCartel.querySelector(".box__body__p")
var loadingEl = document.getElementById('loading');
var progressBar = document.getElementById('progressBar');
var progressText = document.getElementById('progressText');
var intervar;
var iframe = document.querySelector('#iframe');
//C:\Users\Lucas\AppData\Roaming\npm\http-server






const tips = [
  "Puedes desplazarte arrastrando con el dedo o el mouse",
  "Haz zoom acercando o alejando con dos dedos o con la rueda del mouse",
  "Toca los íconos brillantes (orbes) para descubrir información",
  "Pulsa en las flechas de salida para cambiar de habitación",
  "En pantallas táctiles, prueba girar el dispositivo para una experiencia más inmersiva",
  "Algunos objetos contienen enlaces a videos o contenido extra",
  "Toca el ícono de información para leer más detalles de la escena",
];



const consejos = ["Puedes "]
class ViewerConstructor{
    constructor(modelos, cuartos) {
        this.cuartos = cuartos;
        this.modelos = modelos;
        this.viewer  = pannellum.viewer('panorama', this.createdViewer(this.modelos, this.cuartos))
        this.carga = 0;
        this.actualizarImagenes();
        this.viewerClic()
        this.viewerExit()
        this.changeEscena()
        this.intervar = null;
    }

    createdViewer(modelos, cuartos){
        this.loadViewer()
        let v = {}
        let scenes={};
        v = {
            "default": {
                "firstScene": cuartos[0].id,
                "sceneFadeDuration": 1000,
                "autoLoad": true,
                "showControls": false,
            },
            "scenes": { }
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

    showLoading(msg="Cargando panorama...") {
        progressBar.style.width = "0%";
        progressText.textContent = "0%";
        this.simulateProgress();
    }

    simulateProgress() {
        loadingEl.classList.remove("hidden");
        this.carga=0
        progressBar.style.width = this.carga + "%";
        progressText.textContent = this.carga + "%";
        let randomTip = tips[Math.floor(Math.random() * tips.length)];
        consejo.textContent = randomTip;
        const intervalConsejo = setInterval(() => {
                let randomTip = tips[Math.floor(Math.random() * tips.length)];
                consejo.textContent = randomTip;
        }, 3000);
        const intervar = setInterval(() => {
            this.carga += Math.random() * 7;
            if (this.carga > 95) this.carga = 95;
            progressBar.style.width = Math.round(this.carga) + "%";
            progressText.textContent = Math.round(this.carga) + "%";
            if (this.viewer.isLoaded()) {
                clearInterval(intervar);
                clearInterval(intervalConsejo);
                this.hideLoading();
            }
            
  
        }, 400);
    }
    hideLoading() {
        progressBar.style.width = "100%";
        progressText.textContent = "100%";
        panorama.classList.add("cargado")
        acceso.classList.add("app__aceso--mostrar")
        setTimeout(() => {
            loadingEl.classList.add("hidden");
        }, 300);
    }
    viewerClic(){
        this.viewer.on("mousedown", (event) => {
            const coords = this.viewer.mouseEventToCoords(event);
            console.log(`Click detectado en -> Pitch: ${coords[0]}, Yaw: ${coords[1]}`);
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
        document.querySelectorAll(".custom-hotspot--desactive").forEach(e => {
            if(e){e.classList.remove("custom-hotspot--desactive")}
        });
        //buttonTop.style.display = 'block'
        boxEnd.classList.remove("button--end--active");
        boxCartel.classList.remove("box--active");
        let pitch = vistaPrinc.viewer.getPitch(); 
        let yaw   = vistaPrinc.viewer.getYaw();   
        this.viewer.lookAt(pitch, yaw, 120, 2500);
    }
    viewerExit(){
        boxEnd.addEventListener("click", ()=> this.viewerNormalize()) 
    }
    loadViewer(){
        if(acceso.classList.contains("app__aceso--mostrar")){
            acceso.classList.remove("app__aceso--mostrar")
        }
        this.showLoading("Cargando escena...");
        this.simulateProgress();
    }
    changeEscena(){
        this.viewer.on("scenechange",(sceneId)=>{
            console.log("Cambiando a escena:", sceneId);;
            this.loadViewer();
            this.actualizarImagenes();
        })
    }
    actualizarImagenes(){
        let scena_actual = this.viewer.getScene();
        console.log(scena_actual)
        acceso_cont.innerHTML = "";
        cuartos.forEach((cuarto)=>{
            if(cuarto.id != scena_actual){
                acceso_cont.insertAdjacentHTML('beforeend', `
                    <div class="app__aceso__img" data-scena="${cuarto.id}">
                        <img src="img/cuartos/${cuarto.id}.png"  alt="">
                        <span class="text">${cuarto.nombre}</span>
                    </div> 
            `);
            }
        })
        let imagenes = document.querySelectorAll(".app__aceso__img");
        console.log(imagenes)
        imagenes.forEach((imagen)=>{
                imagen.addEventListener("click", ()=>{
                this.viewer.loadScene(imagen.dataset.scena);
            })
        })
    }

}

let vistaPrinc;
const main = ()=>{
    vistaPrinc = new ViewerConstructor(modelos, cuartos)
    console.log(vistaPrinc)
    buttonAcceso.addEventListener("click", (e)=>{
        if(acceso.classList.contains("app__aceso--default")){
            acceso.classList.remove("app__aceso--default")
        }else{
            acceso.classList.add("app__aceso--default")
        }
    })
}
main()

function hotspot(hotSpotDiv, args) {
    let pulse;
    pulse = document.createElement("div")
    pulse.classList.add('pulse');
    hotSpotDiv.classList.add('custom-tooltip');
    hotSpotDiv.appendChild(pulse)
    hotSpotDiv.addEventListener("click", (event) => {
        hotSpotDiv.classList.add('custom-hotspot--desactive');
        vistaPrinc.viewerFocus(args);
        
    });
}

