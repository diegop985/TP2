

/* Variables */


let animation /* Init animation */
let stage = '#section_01' /* screen on stage/ 01 per default */

/* Methos / Functions */

// const navigateTo = (id) => {

//     animate_ToSection(id)

//     animation.finished.then(()=>{
//         stage = id
//     })
// }

// const animate_ToSection = id => {

//     /* Vars */
//     const from = document.querySelector(stage)
//     const to = document.querySelector(id)

//     /* sets */
//     anime.set([to], {
//         visibility: "visible",
//         translateX: "100%",
//         opacity: 1
//     })

    
//     /* Anime */

//     animation = anime.timeline({
//         easing: "easeInOutSine",

//         /* Callback */
//         complete() {
//             anime.set([from], {
//                 visibility: "hidden",
//                 opacity: 0
//             })
//         }
//     })

//     /* Animation  */

//     animation
//         .add({
//             targets: [from],
//             translateX: "-100%",
//             opacity: 0,
//             delay: 1000
//         })
//         .add({
//             targets: [to],
//             translateX: "0%",
//             opacity: 1
//         }, "-=500")       
// }
    
    /* Eventos */


let animation_entrance_elipse2 = anime({

    targets: ".elipse-container",
    duration: 4000,
    direction: "normal",
    loop: "false",
    easing: "easeInOutSine",
    scaleX: [1,100],
    scaleY: [1,200],
    autoplay: false,
})

const animation_ToSection = ( from, to ) => {
    console.log(from)
    console.log(to)
    /* sets */
    anime.set([to], {
        visibility: "visible",
        translateX: "100%",
        opacity: 1
    })
    /* Anime */

    animation = anime.timeline({
        easing: "easeInOutSine",

        /* Callback */
        complete() {
            anime.set([from], {
                visibility: "hidden",
                opacity: 0
            })
        }
    })

    /* Animation  */

    animation
        .add({
            targets: [from],
            opacity: 0,
            delay: 500
        })
        .add({
            targets: [to],
            opacity: 1
        }, "-=500")
        
}

    
    const section02tosection03 = () => {

        /* Vars */
        const from = "#section_02"
        const to = "#section_03"
    
        /* sets */
        anime.set([to], {
            visibility: "visible",
            translateX: "120%",
            opacity: 1
        })

    
        
        /* Anime */
    
        animation = anime.timeline({
            easing: "easeInOutSine",
    
            /* Callback */
            complete() {
                anime.set([from], {
                    visibility: "hidden",
                    opacity: 0
                })
            }
        })
    
        /* Animation  */
    
        animation
            .add({
                targets: [from],
                translateX: "-100%",
                opacity: 0,
                delay: 1000
            })
            .add({
                targets: [to],
                translateX: "0%",
                opacity: 1
            }, "-=500")
            
    }

    window.addEventListener("keydown", function( e ) {
        switch (e.code) {
            case "ArrowLeft":
                handleLeftMove()
                break
            case "ArrowRight":
                handleRightMove()
                break 
        }
    })

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
            delay: 3500
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
            duration: 2500
        }, "-=200")
        .add({
            targets: [".nav-modal"],
            opacity: 1
        })
    
    
    
    const handleRightMove = () => {
        animation_entrance_elipse2.play()
        animation_ToSection( "#section_01", "#section_02" )
        section02tosection03()
        animation_scene01.play()
    }
    