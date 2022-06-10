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