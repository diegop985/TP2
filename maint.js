let animation_rope = anime.timeline({
    easing: "easeInOutSine",
    autoplay: false
})




animation_rope.set([".second-screen__rope"], {
    translateY: "-100%"
})

animation_rope.set([".second-screen__boards "], {
    translateY: "-40%",
    scale: "0.85",

})

animation_rope.set([".nav-modal2"], {
    opacity: 0,
})

animation_rope
    .add({
        targets: [".second-screen__rope"],
        translateY: "0%",
        // delay: 3500
    })
    .add({
        targets: [".second-screen__boards"],
        translateY: "4%",
    }, "-=1000")
    .add({
        targets: [".nav-modal2"],
        opacity: 1
    })


    animation_rope.play()