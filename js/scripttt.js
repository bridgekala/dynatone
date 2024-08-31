// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function loco() {
    // Using Locomotive Scroll from Locomotive
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
        getSpeed: true,
        getDirection: true,
        smartphone: {
            smooth: true
        },
        tablet: {
            smooth: true
        }
    });

    // Update ScrollTrigger on Locomotive Scroll update
    locoScroll.on("scroll", ScrollTrigger.update);

    // Tell ScrollTrigger to use these proxy methods for the ".main" element
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // Refresh ScrollTrigger and Locomotive Scroll
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

function scroll() {
    let scrollcontainer = document.querySelector(".wrapper");

    scrollcontainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollcontainer.scrollLeft += evt.deltaY;
    });
}

function gsapAnimations() {
    // GSAP animations
    gsap.from(".img-div .img1 img", {
        x: 500,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
            trigger: ".page1",
            scroller: ".main",
            start: "center 60%",
            end: "center 30%",
            scrub: true,
        },
    });

    gsap.from(".img-div .img3 img", {
        x: -500,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
            trigger: ".page1",
            scroller: ".main",
            start: "center 60%",
            end: "center 30%",
            scrub: true,
        },
    });

    // gsap.from(".categories img" ,{
    //     y:100,
    //     opacity:0,
    //     duration:1,
    //     ease: "bounce.out",
    //     delay: 1.5,
    //     stagger:2,
    //     scrollTrigger: {
    //         trigger: ".page2",
    //         scroller: ".main",
    //         start: "40% 60%",
    //         end: "40% 40%",
    //         scrub: true,
    //     },

    // })

    // var tl2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".page2",
    //         scroller: ".main",
    //         start: "top 80%",
    //         end: "20% 50%",
    //         scrub: 1.5,
    //     }
    // });

    // tl2.to(".img-div .img2 img", {
    //     y: 570,
    //     x: -140,
    //     scale: 0.27,
    // });
}



function canvas() {
    const canvas = document.querySelector(".page4>canvas");
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
        return `new/render${String(index + 0).padStart(5, "0")}.png`;
    }

    const frameCount = 639;
    const images = [];
    const imageSeq = { frame: 1 };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: true,
            trigger: `.page4>canvas`,
            start: `top top`,
            end: `600% top`,
            scroller: `.main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
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
        trigger: ".page4>canvas",
        pin: true,
        scroller: `.main`,
        start: `top top`,
        end: `600% top`,
    });
}

// Initialize functions
loco();
scroll();
gsapAnimations();
canvas();
