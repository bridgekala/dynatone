gsap.registerPlugin(ScrollTrigger);

gsap.from(".img-div .img1 img", {
    x: 400,
    opacity: 0,
    duration: 1.2,
    delay: 1.2,
    scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        start: "10% 10%",
        end: "10% 10%",
        scrub: 4,
        // markers:true,
    },
});

gsap.from(".img-div .img3 img", {
    x: -400,
    opacity: 0,
    duration: 1,
    delay: 1.2,
    scrollTrigger: {
        trigger: ".page1",
        scroller: "body",
        start: "10% 10%",
        end: "10% 10%",
        scrub: 4,
    },
});

// var tl2 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".page2",
//         scroller: "body",
//         start: "center 50%",
//         end: "center 50%",
//         scrub: 2.5,
//         // markers:true,
//     }
// });

// tl2.to(".img-div .img2 img", {
//     y: 440,
//     x: 640,
//     scale: 1,
// });

 const video = document.getElementById('head');
                const muteIcon = document.getElementById('muteIcon');
                const iconImage = muteIcon.querySelector('img');

                muteIcon.addEventListener('click', function () {
                    if (video.muted) {
                        video.muted = false;
                        iconImage.src = './img/volume up.png'; // Change to your unmute icon
                    } else {
                        video.muted = true;
                        iconImage.src = './img/volume down.png'; // Change to your mute icon
                    }
                });

function canvas() {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function debounce(fn, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), delay);
        };
    }

    window.addEventListener("resize", debounce(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    }, 200));

    function files(index) {
        return `https://www.dropbox.com/s/your-unique-id/render_${String(index).padStart(5, "0")}.png?raw=1`;
    }


    const frameCount = 482;
    const images = [];
    const imageSeq = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);

        img.onload = function() {
            images[i] = img;
            if (i === 0) render(); // Render the first image once it loads
        };

        img.onerror = function() {
            console.error(`Failed to load image: ${img.src}`);
        };
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 4,
            trigger: ".page4",
            start: "top top",
            end: "650% top",
            scroller: "body",
        },
        onUpdate: render,
    });

    function render() {
        if (images[imageSeq.frame]) {
            scaleImage(images[imageSeq.frame], context);
        }
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }

    ScrollTrigger.create({
        trigger: ".page4",
        pin: true,
        scroller: "body",
        start: "top top",
        end: "650% top",
    });
}

canvas();


function scroll() {
    let scrollcontainer = document.querySelector(".wrapper");

    scrollcontainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollcontainer.scrollLeft += evt.deltaY;
    });
}
scroll();



function smooth (){
    const lenis = new Lenis()

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);

}
smooth();



// const canvas = document.querySelector("canvas")
//  const context = canvas.getContext("2d");

// const frames = {
//     currentIndex: 0,
//     maxIndex:638
// };

// let imagesLoaded = 0;
// const images = [];

// function preloadImages(){
//     for (var i = 0; i <= frames.maxIndex; i++) {
//         const imageUrl = `./new/render${i.toString().padStart(4, "0")}.png`
//         const img = new Image();
//         img.src = imageUrl;
//         img.onload = () => {
//             imagesLoaded++;
//             if ( imagesLoaded === frames.maxIndex ){
//                 loadImage (frames.currentIndex);
//                 startAnimation();
//             }
//         }
//         images.push(img);
//         }
// }
// function loadImage(index){
//     if(index>=0 && index<=frames.maxIndex){
//         const img = images[index];

//           canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;

//         const scaleX = canvas.width / img.width;
//         const scaleY = canvas.height / img.height;
//         const scale = Math.max(scaleX, scaleY);

//         const newWidth = img.width * scale;
//         const newHeight = img.height * scale;

//         const offsetX = (canvas.width - newWidth) / 2;
//         const offsetY = (canvas.height - newHeight) / 2;

//         context.clearRect(0, 0, canvas.width, canvas.height);
//         context.imageSmoothingEnabled = true;
//         context.imageSmoothingQuality = "high";
//         context.drawImage(img, offsetX, offsetY, newHeight, newWidth);
//         frames.currentIndex = index;
//     }
// }

// function startAnimation(){
//     var tl = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".page4",
//             start: "top top",
//             scrub: 2,
//             markers:true

//         }
//     })

//     tl.to(frames,{
//         currentIndex: frames.maxIndex,
//         onUpdate: function (){
//             loadImage(Math.floor(frames.currentIndex))
//         }
//     })
// }

// preloadImages()