
    // Ver si el panorama ya fue cargado
    console.log("¿Cargado?", viewer.isLoaded());

    // Obtener el pitch actual
    console.log("Pitch actual:", viewer.getPitch());

    // Cambiar el pitch (con animación de 1s)
    viewer.setPitch(0, 1000, () => {
      console.log("Animación de pitch terminada");
    });

    // Cambiar la vista: pitch, yaw y campo de visión
    viewer.lookAt({
      pitch: 0,
      yaw: 90,
      hfov: 80,
      animated: 1500
    });

    // Iniciar rotación automática
    viewer.startAutoRotate(2.0); // velocidad = 2 grados/segundo

    // Detener rotación automática después de algunos segundos
    setTimeout(() => {
      viewer.stopAutoRotate();
    }, 5000);

    // Agregar un hotspot
    viewer.addHotSpot(
      {
        pitch: 10,
        yaw: 50,
        type: "info",
        text: "Este es un hotspot",
        createTooltipFunc: (hotSpotDiv, args) => {
          hotSpotDiv.innerHTML = args.text;
        }
      },
      /* sceneId opcional */ null
    );

    // Escuchar evento
    viewer.on("scenechange", (sceneId) => {
      console.log("Cambiado a escena:", sceneId);
    });

    // Cuando cambies el tamaño del contenedor, llamar a resize()
    window.addEventListener("resize", () => {
      viewer.resize();
    });



    // Ver si el panorama ya fue cargado
    console.log("¿Cargado?", viewer.isLoaded());

    // Obtener el pitch actual
    console.log("Pitch actual:", viewer.getPitch());

    // Cambiar el pitch (con animación de 1s)
    viewer.setPitch(0, 1000, () => {
      console.log("Animación de pitch terminada");
    });

    // Cambiar la vista: pitch, yaw y campo de visión
    viewer.lookAt({
      pitch: 0,
      yaw: 90,
      hfov: 80,
      animated: 1500
    });

    // Iniciar rotación automática
    viewer.startAutoRotate(2.0); // velocidad = 2 grados/segundo

    // Detener rotación automática después de algunos segundos
    setTimeout(() => {
      viewer.stopAutoRotate();
    }, 5000);

    // Agregar un hotspot
    viewer.addHotSpot(
      {
        pitch: 10,
        yaw: 50,
        type: "info",
        text: "Este es un hotspot",
        createTooltipFunc: (hotSpotDiv, args) => {
          hotSpotDiv.innerHTML = args.text;
        }
      },
      /* sceneId opcional */ null
    );

    // Escuchar evento
    viewer.on("scenechange", (sceneId) => {
      console.log("Cambiado a escena:", sceneId);
    });

    // Cuando cambies el tamaño del contenedor, llamar a resize()
    window.addEventListener("resize", () => {
      viewer.resize();
    });






        // 👇 acá enganchamos el click
        this.viewer.on("mousedown", (event) => {
            const coords = this.viewer.mouseEventToCoords(event);
            const pitch = coords[0];
            const yaw = coords[1];
            console.log(`Click detectado en -> Pitch: ${pitch}, Yaw: ${yaw}`);
        });

