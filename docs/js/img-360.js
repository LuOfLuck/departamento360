const buttonNavegar = document.getElementById("button--navegar")
const buttonTop = document.getElementById("button--top")
const boxEnd = document.getElementById("button--end")
const boxCartel = document.getElementById("box--cartel")
var boxTitulo = boxCartel.querySelector(".box__header__h3")
var boxDescripcion = boxCartel.querySelector(".box__body__p")
var boxFooter = boxCartel.querySelector(".box__footer__p")
var lugar = document.querySelector('#viewer');
const modelos = [
	{
		"titulo":"Smart TV 32 pulgadas",
		"descripcion":`
			Una tele copada, todos queremos una telesmart, 
			yo quiero una tele tu quieres una tele, ella quiere una tele, metele wacho
			mira esta tremenda es de colores y tiene waifai incluido

			`,
		"footer":"infografia oficial: www.telesmart.com",
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
		"footer":"infografia oficial: www.cosinaperrona.com",
		"minLong":1.51,
		"maxLong":1.89,
		"minLat":-0.56,
		"maxLat":-0.06,
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
		"footer":"infografia oficial: www.pornhub.com",
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
		"footer":"infografia oficial: www.luofluck.tech",
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
		"footer":"infografia oficial: www.mequieromorir.com",
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
		"footer":"infografia oficial: www.inteligenteesnoenamorarse.com",
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
		"minLong":2.78, 
		"maxLong":3.11,
		"minLat":-0.91,
		"maxLat":-0.73,
	},
]
const salidas = [	
	{		
		"cuartoId":1,
		"minLong":0.68,
		"maxLong":0.90,
		"minLat":-0.49,
		"maxLat":-0.10,
	},	
]
const cuartos = [
	{
		"id":0,
		"url":"https://www.luofluck.tech/360/1.jpg",
		"modelos":modelos,
		"salidas":salidas

	},
	{
		"id":1,
		"url":"https://www.luofluck.tech/360/2.jpg",
		"modelos":[],
		"salidas":[	{		
			"cuartoId":0,
			"minLong":0.70,
			"maxLong":1.01,
			"minLat":-0.32,
			"maxLat":0.11,
			},
		]
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
		try{
			
			lugar.innerHTML = "";
			this.viewer = new PhotoSphereViewer.Viewer({
				container: lugar,
				panorama: this.viewerUrl,
				defaultLat: 0,
			  defaultLong: 0,
			  defaultZoomLvl: 0,
			  mousemove: true,
			  mousewheel: true,
				navbar: null,
			});
			this.viewerClic();
			this.viewerExit();
			return this.viewer;
		}
		catch{
			return console.log("error");
		}
	}
	viewerNormalize(){
		buttonTop.style.display = 'block'
		boxEnd.classList.remove("button--end--active");
		boxCartel.classList.remove("box--active");
		this.viewer.config.mousewheel = true;
	 	this.viewer.config.mousemove = true;
	 	new PhotoSphereViewer.Animation({
	  	properties: {
	      zoom: { start: 75, end: 0 },
	    },
	    duration: 1000,
	    onTick: (properties) => {
	      this.viewer.zoom(properties.zoom);
	    }
	  });
	}
	viewerFocus(longitude, latitude, element){
		buttonTop.style.display = 'none'
	  this.viewer.config.mousewheel = false;
	  this.viewer.config.mousemove = false;
	  this.viewer.renderer.camera.far *= 2;
	  let ob = this.viewer.getPosition()
	  new PhotoSphereViewer.Animation({
	    properties: {
	     	lat: { start: ob.latitude, end: latitude },
	     	long: { start: ob.longitude, end: longitude },
	     	zoom: { start: this.viewer.getZoomLevel(), end: 75 },
	    },
	    duration: 1000,
	    onTick: (properties) => {
	     	this.viewer.rotate({ longitude: properties.long, latitude: properties.lat });
	     	this.viewer.zoom(properties.zoom);
	    }
	  });
	  boxEnd.classList.add('button--end--active');
	  boxCartel.classList.add('box--active')

	  boxTitulo.innerText = element.titulo;
	  boxDescripcion.innerText = element.descripcion;
	  boxFooter.innerText = element.footer;
	}
	viewerClic(){
		this.viewer.on('click', (e, data) => {
			console.log(`${data.rightclick?'right ':''}clicked at longitude: ${data.longitude} latitude: ${data.latitude}`);
		 	this.longitude = data.longitude;
		  this.latitude = data.latitude;
			this.modelosObj.forEach((element)=>{
				if(this.viewerlogAndLatVal(element)) this.viewerFocus(this.longitude, this.latitude, element);
		  })	
		  this.modelosDir.forEach((element)=>{
				if(this.viewerlogAndLatVal(element)){
					console.log(cuartos[element.cuartoId])
					this.viewer.destroy()
					const sala = new ViewerConstructor(cuartos[element.cuartoId])
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
		return (log && lat) ? true : false
	}
	viewerExit(){
		boxEnd.addEventListener("click", ()=> this.viewerNormalize()) 
		//ola
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
*/
