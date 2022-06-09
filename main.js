

/* Variables */

const links = document.querySelectorAll('a[navigate-to]') /* Links to go */

console.log(links[1].getAttribute("navigate-to"))
console.log(links[0].getAttribute("navigate-to"))
let animation /* Init animation */
let stage = '#section_01' /* screen on stage/ 01 per default */

/* Methos / Functions */

const navigateTo = (id) => {

    animate_ToSection(id)

    animation.finished.then(()=>{
        stage = id
    })
}

const animate_ToSection = id => {

    /* Vars */
    const from = document.querySelector(stage)
    const to = document.querySelector(id)

    /* sets */
    anime.set([to], {
        visibility: "visible",
        translateX: "100%",
        opacity: 1
    })

    
    /* Anime */

    animation = anime.timeline({
        duration: 500,
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
            opacity: 0
        })
        .add({
            targets: [to],
            translateX: "0%",
            opacity: 1
        }, "-=500")


        
        
}
    
    /* Eventos */

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault()
            console.log("hola")
            const id = e.target.getAttribute("navigate-to")
            console.log(id)
            navigateTo(id)
        })
    })


    // document.onkeydown = function ( e ) {
    window.addEventListener("keydown", function( e ) {
        switch (e.code) {
            case "ArrowLeft":
                console.log("left key")
                break
            case "ArrowRight":
                console.log("right key")
                const id = links[0].getAttribute("navigate-to")
                console.log(id)
                navigateTo(id)
                break 
        }
    })