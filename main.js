

/* Variables */

const links = document.querySelectorAll('a[navigate-to]') /* Links to go */

console.log(links[1].getAttribute("navigate-to"))
console.log(links[0].getAttribute("navigate-to"))
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

const fadeOut_ToSection = () => {

    /* Vars */
    const from = "#section_01"
    const to = "#section_02"

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


    const handleRightMove = () => {
        animation_entrance_elipse2.play()
        fadeOut_ToSection()

    }

    

