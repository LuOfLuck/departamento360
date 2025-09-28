import { Viewer } from 'https://cdn.jsdelivr.net/npm/@photo-sphere-viewer/core/index.module.js';
import { MarkersPlugin } from 'https://cdn.jsdelivr.net/npm/@photo-sphere-viewer/markers-plugin/index.module.js';
console.log(MarkersPlugin)
const buttonNavegar = document.getElementById("button--navegar")
const buttonTop = document.getElementById("button--top")
const boxEnd = document.getElementById("button--end")
const boxCartel = document.getElementById("box--cartel")
var boxTitulo = boxCartel.querySelector(".box__header__h3")
var boxDescripcion = boxCartel.querySelector(".box__body__p")
var lugar = document.querySelector('#viewer');
var iframe = document.querySelector('#iframe');
console.log(Viewer)
const modelos = {
	"room1":{
		"objetos":[
			{
				"titulo":"Smart TV 32 pulgadas",
				"descripcion":`
					Una tele copada, todos queremos una telesmart, 
					yo quiero una tele tu quieres una tele, ella quiere una tele, metele wacho
					mira esta tremenda es de colores y tiene waifai incluido

					`,
				"url":"https://www.youtube.com/embed/2ajWUp8F694?si=XEYk7BVDaDiQmnAD",
				"minLong":6.19,
				"maxLong":0.17,
				"minLat":-0.19,
				"maxLat":-0.04,
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
				"minLong":1.51,
				"maxLong":1.89,
				"minLat":-0.56,
				"maxLat":-0,
			},	
			{
				"titulo":"cocina electrica",
				"descripcion":`
					wacho odio contamintar pero obvio no puedo dejar de hacerlo
					mejor una cocina electrica que no entiendo la diferencia pero se ve como del futuro
					eeeaaaaaa
					bueno eso

					no me compres obteneme bv
				`,
				"url":"https://www.youtube.com/embed/2ajWUp8F694?si=XEYk7BVDaDiQmnAD",
				"minLong":3.40, 
				"maxLong":3.97,
				"minLat":-0.95,
				"maxLat":-0.68,
			},	
			{
				"titulo":"Lavadero",
				"descripcion":`
					Aca te podes lavar la manos, la cara, los platos
					y esas cosas, sale agua corriente que podes tomar cuando no pagas el agua

					bueno eso tkm, tengo que rellenar mas texto asi que bueno voy a escribir algo mas
					tambien puedo decir que la vida no es tan mala
				`,
				"url":"https://www.youtube.com/embed/2ajWUp8F694?si=XEYk7BVDaDiQmnAD",
				"minLong":4.69, 
				"maxLong":4.99,
				"minLat":-0.56,
				"maxLat":-0.45,
			},
			{
				"titulo":"Ventana",
				"descripcion":`
					Vista a la terraza re copada
					ondaaaa naaaa pero mira esta vista, te entran mosquitos a la noche pero con un espiral se arregla
					lo mismo, la ventana es corredisa, tiene una cortina para que no te vean los vecinos
					y especial para mirar durante las crisis existenciales
				`,
				"url":"https://www.youtube.com/embed/2ajWUp8F694?si=XEYk7BVDaDiQmnAD",
				"minLong":4.45, 
				"maxLong":5.11,
				"minLat":-0.34,
				"maxLat":0.45,
			},	
			{
				"titulo":"Heladera inteligente",
				"descripcion":`
					esta es como una heladera... pero no cualquier heladera, esta tiene algo de diferente, especial...
					bueno eso... te sirve para mas cosas... como nc soy pobre no tengo una de esas en mi casa
					¡pero ey!
					En el titulo dice inteligente, onda debe ser mejor 
				`,
				"url":"https://www.youtube.com/embed/2ajWUp8F694?si=XEYk7BVDaDiQmnAD",
				"minLong":0.94, 
				"maxLong":1.45,
				"minLat":-0.55,
				"maxLat":-0.22,
			},	
			{
				"titulo":"Limones... ",
				"descripcion":`
					Limones... ¿porque no limones? onda... son limones :D
					todos aman los limones
					ella ama los limones
					Come estos limones y ella te va a amar...

				`,
				"url":"https://www.youtube.com/embed/2ajWUp8F694?si=XEYk7BVDaDiQmnAD",
				"minLong":2.78, 
				"maxLong":3.11,
				"minLat":-0.91,
				"maxLat":-0.73,
			}
		],
		"salidas":[
			{		
				"cuartoId":1,
				"minLong":0.68,
				"maxLong":0.90,
				"minLat":-0.49,
				"maxLat":-0.10,
			},	
		],
	},
	"room2":{
		"objetos":[
			{
				"titulo":"RELOS GIGANTE",
				"descripcion":`
					Una reloj copada, todos queremos un reloj, 
					yo quiero un reloj tu quieres una reloj, ella quiere una reloj, metele wacho
					mira esta tremenda es de colores y tiene waifai incluido

					`,
				"url":"",
				"minLong":5,
				"maxLong":0.4,
				"minLat":-0.06,
				"maxLat":0.6,
			},
		],
		"salidas":[
			{		
			"cuartoId":0,
			"minLong":0.70,
			"maxLong":1.01,
			"minLat":-0.32,
			"maxLat":0.11,
			},
		]
	}
}
const cuartos = [
	{
		"id":0,
		"url":"https://www.luofluck.tech/360/1.jpg",
		"modelos":modelos.room1.objetos,
		"salidas":modelos.room1.salidas,

	},
	{
		"id":1,
		"url":"https://www.luofluck.tech/360/2.jpg",
		"modelos":modelos.room2.objetos,
		"salidas":modelos.room2.salidas
	}
]

class ViewerConstructor{
	constructor(modelosObj) {
		this.cuartos = cuartos;
	  this.viewerUrl = modelosObj.url;
	  this.modelosObj = modelosObj.modelos;
	  this.modelosDir = modelosObj.salidas;
	  this.boxEnd = boxEnd;
	  this.viewer = this.createdViewer();
	  this.longitude = null;
		this.latitude = null;
	}
	createdViewer(){
	//	try{
			this.viewer = new Viewer({
				container: lugar,
				panorama: this.viewerUrl,
				defaultYaw: 0,
				defaultPitch: 0,
				defaultZoomLvl: 0,
				mousemove: true,
				mousewheel: true,
				navbar: null,
				loadingTxt: "HOla",
				plugins: [
        	MarkersPlugin.withConfig({
            markers: [
              {
                id: 'image',
                position: { yaw: 0.32, pitch: 0.11 },
	              image: "../img/x.jpg",
	              size: { width: 32, height: 32 },
	            },
						],
					}),
        ],
			});
			this.viewerClic();
			this.viewerExit();


			return this.viewer;
	/*	}
		catch{
			return console.log("error");
		}}*/
  }
	viewerNormalize(){
		buttonTop.style.display = 'block'
		boxEnd.classList.remove("button--end--active");
		boxCartel.classList.remove("box--active");
		this.viewer.config.mousewheel = true;
	 	this.viewer.config.mousemove = true;
		this.viewer.animate({
			    zoom: 0,
			    speed: '2rpm',
			})
	}
	viewerFocus(longitude, latitude, element){
		console.log("focus")
		buttonTop.style.display = 'none'
		this.viewer.config.mousewheel = false;
		this.viewer.config.mousemove = false;
	 	this.viewer.renderer.camera.far *= 2;
		let ob = this.viewer.getPosition()
		console.log("llego aqui")
		this.viewer.animate({
		    yaw: ob.yaw,
		    pitch: ob.pitch,
		    zoom: 75,
		    speed: '2rpm',
		})
		this.viewer.rotate({
		    textureX: ob.yaw,
		    textureY: ob.pitch,
		});
	
		boxEnd.classList.add('button--end--active');
		boxCartel.classList.add('box--active');

		boxTitulo.innerText = element.titulo;
		boxDescripcion.innerText = element.descripcion;
		
		if(element.url!=""){
			iframe.src = element.url;
			iframe.classList.add('box__body__iframe--active');
		}else{
			iframe.classList.remove('box__body__iframe--active');
		}
	}
	viewerClic(){
		console.log(this.viewer.getPosition())
		this.viewer.addEventListener('click', ({ data }) => {
			console.log(`${data.rightclick ? 'right ' : ''}clicked at yaw: ${data.yaw} pitch: ${data.pitch}`);
			this.longitude =data.yaw;
		  this.latitude = data.pitch;
			this.modelosObj.forEach((element)=>{
				if(this.viewerlogAndLatVal(element)) this.viewerFocus(this.longitude, this.latitude, element);
		  		console.log("funcion")
		  	})	
		  	this.modelosDir.forEach((element)=>{
				if(this.viewerlogAndLatVal(element)){
					console.log(cuartos[element.cuartoId])
						let cuarto = cuartos[element.cuartoId];
					  this.viewer.setPanorama(cuarto.url, {
						    caption: 'The new caption',
						    position: { yaw: 0, pitch: 0 },
						    transition: {
						        rotation: false,
						        effect: 'black',
						    },
						});
					  this.modelosObj = cuarto.modelos;
					  this.modelosDir = cuarto.salidas;
				}
		  	})
		});
	}
	viewerlogAndLatVal(element){
		//capaz en un futuro cercano no entienda que hize aca asi que abajo una pequeña descripcion;
		let minLong = element["minLong"]
		let maxLong = element["maxLong"]  	
		let minLat = element["minLat"]
		let maxLat = element["maxLat"]
		let log = (maxLong < minLong)? maxLong > this.longitude  || minLong < this.longitude: maxLong > this.longitude && minLong < this.longitude;
		let lat = maxLat > this.latitude && minLat < this.latitude;
		return (log && lat) 
	}
	viewerExit(){
		boxEnd.addEventListener("click", ()=> this.viewerNormalize()) 
		//ola
	}
	ViewerActu(){

	}
}
const main = ()=>{
	const vistaPrinc = new ViewerConstructor(cuartos[0])
}
main()
buttonNavegar.addEventListener("click",e=>{
	lugar.classList.add("image--mostrar");
});
buttonTop.addEventListener("click",e=>{
	lugar.classList.remove("image--mostrar");
})
/*
				La onda es simple hoy me entere que voy a ser tio ahr que tenia que ver 
				(10:31pm - 16/04/2022)
				ahr bueno lo que hago es a hay un error donde el maximo es mas chico que 
				el minimo log y tal ves en un futuro lat

				y para que se arregle eso en la comparacion tengo que cambiar un && por ||
				por eso hago la comparacion, en el primer caso es cuando hay por poner el || porque else no se marca nada
				bueno Lu del futuro ojala entiendas lo que acabe de escribir porque hasta mi se me complica
				decirte esto

				en fin ya que estoy escribiendo te dejo algo anotado
				emmmmm... tengo ganas de verte... verterte en un mar de misterios e incognitas donde la unica salida
				son tus labios bv

				gracias...
				Desde hace un tiempo largo solo vengo perdiendo gente y si bien conozco nueva como que muy ñe
				me falta tener personas interesantes... aunque las que tengo son muy buenas, bueno che me estoy yendo de tema
				Lu del futuro decime si conociste a alguien copado y que tal te fue, a y si para la nueva actualizacion
				aprendes a besar no viene mal

				eso vamos a hacerlo un meme despues. FIN



                10/8/25
				Ola lu del pasado, temo decirte que retomamos el proyecto, y esta ves apostamos en el. Dejaste de programar mucho tiempo (eso fue triste)
				Pero quien soy yo para juzgarme, pasaron y viviste muchas cosas, fuiste tio devuelta por tu mejor amigo, y ahora vas a volver a serlo
			    pero por tu mejor amiga, en fin... ahora entrenas y lo de aprender a besar capaz te lo sigo debiendo jaja, como dato de color, fue dificil
			    pero si entendi lo que hiciste, capaz en un plano carteciano de x e y se explica mejor.


			    todo es curioso, obvio perdimos gente pero si, te rodeas de personas geniales, eso no se duda, te sorprenderia saber a quienes conocimos por el camino
			    mucha gente nos ayudo y ayuda muchisimo, espero que la proxima ves que escribas aca es porque la pegamos con este proyecto, nada de mediocridades
			    no vuelvas hasta decir que la pegamos,sino no te quiero ver.

			    en fin,nos vemos luego, cuidate. FIN (sigueremos conociendo personas interesante sin perder a las que tenemos)
*/


//C:\Users\Lucas\AppData\Roaming\npm\http-server