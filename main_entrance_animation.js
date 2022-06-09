

let animation_entrance_text1 = anime({


    targets: ".initscreen-text1",


    duration: 600,
    direction: "normal",
    loop: "false",
    easing: "linear",
    scale: [1.5,1],
    translateY: -50
})


anime.set([".initscreen-text2"], {
    translateX: "-50%"
})

let animation_entrance_text2 = anime({


    targets: ".initscreen-text2",
    duration: 600,
    direction: "normal",
    loop: "false",
    easing: "linear",
    scale: [1.5,1],
    translateY: [10,-50],
    translateX: [-50]
})

anime.set([".poligono"], {
    scaleX: [0.6],
    scaleY: [0.6]
})

let animation_entrance_poligon1 = anime({

    targets: ".poligono-1",
    duration: 600,
    direction: "normal",
    loop: "false",
    easing: "linear",
    scale: [1.5,1],
    translateY: [-10, 0],
    translateX: [-10, 0]
})

let animation_entrance_poligon2 = anime({

    targets: ".poligono-2",
    duration: 600,
    direction: "normal",
    loop: "false",
    easing: "linear",
    scale: [1.5,1],
    translateX: [-40, 0]
})

let animation_entrance_poligon3 = anime({

    targets: ".poligono-3",
    duration: 600,
    direction: "normal",
    loop: "false",
    easing: "easeInOutSine",
    scale: [1.5,1],
    translateY: [-50,10],
    translateX: [-20, 10]
})


let animation_entrance_poligon10 = anime({

    targets: ".poligono-10",
    duration: 600,
    direction: "normal",
    loop: "false",
    easing: "linear",
    scale: [1.5,1],
    translateY: [10,0],
    translateX: [-40,0]
})

anime.set([".elipse-container"], {
    translateX: "-50%",
    translateY: "-50%"
})

let animation_entrance_elipse = anime({

    targets: ".elipse-container",
    duration: 600,
    direction: "normal",
    loop: "false",
    easing: "easeInOutQuad",
    scaleX: [6,1],
    scaleY: [6,1],
})

let animation_entrance_polingon12 = anime({

    targets: ".poligono-12",
    duration: 600,
    direction: "normal",
    loop: "false",
    easing: "linear",
    scale: [1.5,1],
    translateY: [-40,0],
})



let animation_entrance_polingon6 = anime({

    targets: ".poligono-6",
    duration: 600,
    direction: "normal",
    loop: "false",
    easing: "linear",
    scale: [1.5,1],
    translateY: [-20,0],
    translateX: [0,-30],
})

let animation_entrance_polingon9 = anime({

    targets: ".poligono-9",
    duration: 600,
    direction: "normal",
    loop: "false",
    easing: "linear",
    scale: [1.5,1],
    translateY: [-40,0],
    translateX: [10,-10],
})


let animation_entrance_polingon11 = anime({

    targets: ".poligono-11",
    duration: 600,
    direction: "normal",
    loop: "false",
    easing: "linear",
    scale: [1.5,1],
    translateY: [40,0],
})

let animation_entrance_polingon7 = anime({

    targets: ".poligono-7",
    duration: 600,
    direction: "normal",
    loop: "false",
    easing: "linear",
    scale: [1.5,1],
    translateX: [0,-50],
})


let animation_entrance_polingon8 = anime({

    targets: ".poligono-8",
    duration: 600,
    direction: "normal",
    loop: "false",
    easing: "easeInOutSine",
    scale: [1.5,1],
    translateX: [0,-50],
    translateY: [0,-50],
})



