let animation_scene01 = anime.timeline({
    easing: "easeInOutSine",
    autoplay: false
})


animation_scene01.set([".first-screen__questionmark-der"], {
    rotateZ: ("-90deg"),
})
animation_scene01.set([".first-screen__questionmark-izq"], {
    rotateZ: ("90deg"),
})

animation_scene01.set([".first-screen__p"], {
  position: "absolute",
  top: "30%",
  left: "47%",
  translateX: "-50%",
  translateY: "-50%",
})

animation_scene01.set([".first-screen__elipse7"], {
    position: "absolute",
    top: "30%",
    left: "47%",
    translateX: "-50%",
    translateY: "-50%",
    scaleY: "0.8",
    scaleX: "0.6"
  })

animation_scene01
    .add({
        targets: [".first-screen__background-image"],
        translateX: "-5%",
        // delay: 3500
    })
    .add({
        targets: [".first-screen__mono1"],
        translateX: "20vw",
    }, "-=1000")
    .add({
        targets: [".first-screen__mono2"],
        translateX: "-20vw"
    }, "-=1000")
    .add({
        targets: [".first-screen__questionmark-der"],
        scale: [0.5,1],
        duration: 5000,
        keyframes: [
            {opacity: 1, rotateZ: ("-1deg")},
            {rotateZ: ("-90deg"), scale: "0.5", opacity: 0 },
          ],
        easing: "easeOutElastic(1, .8)"
    })
    .add({
        targets: [".first-screen__questionmark-izq"],
        scale: [0.5,1],
        duration: 5000,
        keyframes: [
            {opacity: 1,  rotateZ: ("-5deg")},
            {rotateZ: ("90deg"), scale: "0.5", opacity: 0 },
          ],
        easing: "easeOutElastic(1, .8)"
    }, "-=5000")
    .add({
        targets: [".first-screen__elipse1, .first-screen__elipse4"],
        opacity: 1
    }, "-=2000")
    .add({
        targets: [".first-screen__elipse2, .first-screen__elipse5"],
        opacity: 1
    }, "-=1000")
    .add({
        targets: [".first-screen__elipse3, .first-screen__elipse6"],
        opacity: 1
    }, "-=400")
    .add({
        targets: [".first-screen__elipse7, .first-screen__p"],
        opacity: 1,
        scaleX: "0.9",
        duration: 4000
    }, "-=200")
    

    animation_scene01.play()