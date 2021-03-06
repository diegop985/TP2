

/* Variables */


let animation /* Init animation */
let stage = '#section_01' /* screen on stage/ 01 per default */



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

    const section03ToSection04 = () => {

        /* Vars */
        const from = "#section_03"
        const to = "#section_04"
    
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
                delay: 500
            })
            .add({
                targets: [to],
                translateX: "0%",
                opacity: 1
            }, "-=500")       
    }


        


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
            delay: 3500
        })
        .add({
            targets: [".second-screen__boards"],
            translateY: "4%",
        }, "-=1000")
        .add({
            targets: [".nav-modal2"],
            opacity: 1
        })
            
            
            
    const animation_rope2F = () => {

        let animation_rope2 = anime.timeline({
            easing: "easeInOutSine",
            autoplay: true
        })
        
        animation_rope2.set([".nav-modal2"], {
            opacity: 0,
        })
        
        animation_rope.set([".second-screen__boards "], {
            translateY: "4%",
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
        
        
    }
    
    const animation_rope3F = () => {
        let animation_rope3 = anime.timeline({
            easing: "easeInOutSine",
            autoplay: true
    })
        
    animation_rope3.set([".nav-modal2"], {
        opacity: 0,
    })

    animation_rope.set([".second-screen__boards "], {
        translateY: "18%",
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
    
    }
    
    
    
    const animation_rope4F = () => {
        let animation_rope4 = anime.timeline({
            easing: "easeInOutSine",
            autoplay: true
        })
        
        animation_rope4.set([".nav-modal2"], {
        opacity: 0,
        })
    
        animation_rope.set([".second-screen__boards "], {
            translateY: "31%",
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
    }
    
    
    const animation_rope5F = () => {
        let animation_rope5 = anime.timeline({
            easing: "easeInOutSine",
            autoplay: true
        })
        
        animation_rope5.set([".nav-modal2"], {
        opacity: 0,
        })
    
        animation_rope.set([".second-screen__boards "], {
            translateY: "44%",
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
        
    }
    
    
    const animation_rope6F = () => {
        let animation_rope6 = anime.timeline({
            easing: "easeInOutSine",
            autoplay: true
        })
        
        animation_rope6.set([".nav-modal2"], {
        opacity: 0,
        })
        animation_rope.set([".second-screen__boards "], {
            translateY: "57%",
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
        
    }
    
    
    const animation_rope7F = () => {
        let animation_rope7 = anime.timeline({
            easing: "easeInOutSine",
            autoplay: true
        })
        
        animation_rope7.set([".nav-modal2"], {
        opacity: 0,
        })
    
        animation_rope.set([".second-screen__boards "], {
            translateY: "70%",
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
    }
    
        
        
        

        /* Transitions onKeyPress Management */
        let contKeyRight = 1

        window.addEventListener("keydown", function( e ) {
            switch (e.code) {
                case "ArrowLeft":
                    handleLeftMove()
                    break
                case "ArrowRight":
                    handleRightMove()
                    contKeyRight+=1
                    break 
            }
        })
        
        const handleRightMove = () => {
            
            if (contKeyRight<=1) {
                animation_entrance_elipse2.play()
                animation_ToSection( "#section_01", "#section_02" )
                section02tosection03()
                animation_scene01.play()

            } else if(contKeyRight==2) {
                section03ToSection04()
                animation_rope.play()
                
                console.log(contKeyRight)
            } else if(contKeyRight==3) {
                animation_rope2F()
                
                console.log(contKeyRight)
            } else if(contKeyRight==4) {
                animation_rope3F()
                
                console.log(contKeyRight)
            } else if(contKeyRight==5) {
                animation_rope4F()
                
                console.log(contKeyRight)
            } else if(contKeyRight==6) {
                animation_rope5F()
                
                console.log(contKeyRight)
            } else if(contKeyRight==7) {
                animation_rope6F()
            }
    }


