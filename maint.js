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


let animation_rope2 = anime.timeline({
    easing: "easeInOutSine",
    autoplay: false
})

animation_rope2.set([".nav-modal2"], {
    opacity: 0,
})

animation_rope2
    .add({
        targets: [".second-screen__boards"],
        translateY: "18%",
    })
    .add({
        targets: [".nav-modal2"],
        opacity: 1
    })

    animation_rope2.play()


let animation_rope3 = anime.timeline({
        easing: "easeInOutSine",
        autoplay: false
})
    
animation_rope3.set([".nav-modal2"], {
    opacity: 0,
})

animation_rope3
    .add({
        targets: [".second-screen__boards"],
        translateY: "31%",
    })
    .add({
        targets: [".nav-modal2"],
        opacity: 1
    })

animation_rope3.play()



let animation_rope4 = anime.timeline({
    easing: "easeInOutSine",
    autoplay: false
})

animation_rope4.set([".nav-modal2"], {
opacity: 0,
})

animation_rope4
.add({
    targets: [".second-screen__boards"],
    translateY: "44%",
})
.add({
    targets: [".nav-modal2"],
    opacity: 1
})

animation_rope4.play()


let animation_rope5 = anime.timeline({
    easing: "easeInOutSine",
    autoplay: false
})

animation_rope5.set([".nav-modal2"], {
opacity: 0,
})

animation_rope5
.add({
    targets: [".second-screen__boards"],
    translateY: "57%",
})
.add({
    targets: [".nav-modal2"],
    opacity: 1
})

animation_rope5.play()


let animation_rope6 = anime.timeline({
    easing: "easeInOutSine",
    autoplay: false
})

animation_rope6.set([".nav-modal2"], {
opacity: 0,
})

animation_rope6
.add({
    targets: [".second-screen__boards"],
    translateY: "70%",
})
.add({
    targets: [".nav-modal2"],
    opacity: 1
})

animation_rope6.play()

let animation_rope7 = anime.timeline({
    easing: "easeInOutSine",
    autoplay: false
})

animation_rope7.set([".nav-modal2"], {
opacity: 0,
})

animation_rope7
.add({
    targets: [".second-screen__boards"],
    translateY: "83%",
})
.add({
    targets: [".nav-modal2"],
    opacity: 1
})

animation_rope7.play()