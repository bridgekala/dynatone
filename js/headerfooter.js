class specialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
              @font-face {
                font-family: 'sfpro';
                src: url('/fonts/SFPRODISPLAYBOLD.woff2');
            }

.navbar {
    position: fixed;
    top: 0;
    z-index: 99;
    display: flex;
    padding: 20px 30px;
    background-color: transparent;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    transition: background-color 0.3s ease, padding 0.3s ease;
}

.navbar.fixed {
    background-color: ;
    padding: 10px 20px; /* Reduce padding when scrolled */
}

.nav-items.hidden {
    display: none; /* Hide the menu items */
}

.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #c52726;
    color: white;
    font-size: 20px;
    padding: 6px;
    cursor: pointer;
    z-index: 100;
    transition: opacity 0.3s ease;
}

.back-to-top:hover {
    background-color: #a12020; /* Slightly darker on hover */
}

.nav-items > ul > li {
    position: relative;
    display: inline;
    list-style: none;
    margin: 10px;
    padding: 10px 20px;
    cursor: pointer;
}

.nav-items > ul > li > a {
    color: white;
    text-decoration: none;
    font-family: 'sfpro';
}

.nav-items > ul > li::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.17rem;
    background-color: #c52726;
    left: 0;
    bottom: 0;
    transform-origin: 0% 100%;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.nav-items > ul > li:hover::after {
    transform: scaleX(1);
}

.nav-logo a,
.nav-button a {
    color: white;
    list-style: none;
    text-decoration: none;
    display: flex;
}

.nav-logo {
    width: 10%;
}

.nav-logo img {
    width: 100%;
}

.nav-button {
    background-color: #c52726;
    border-radius: 50px;
    position: relative;
    display: inline-block;
    overflow: hidden;
    cursor: pointer;
}

.nav-button .anim-layer {
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 100%;
    background-color: white;
    transition: width 0.3s ease, left 0.3s ease;
}

.nav-button:hover .anim-layer {
    width: 100%;
    left: 0;
}

.nav-button:hover a {
    color: #141214;
}

.nav-button a {
    display: block;
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    position: relative;
    z-index: 1;
}

#hamburger-menu,
#mobile-menu {
    display: none;
}

@media only screen and (max-width: 770px) {
    #mobile-menu {
        background-color: #c52726;
        width: 100%;
        height: 100vh;
        position: fixed;
        z-index: 9;
        top: 0;
        left: 0;
        display: none;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: transform 0.3s ease;
        transform: translateX(-100%);
    }

    .mobile-nav-items > ul {
        padding: 0px;
    }

    .mobile-nav-items > ul > li {
        text-align: center;
        position: relative;
        list-style: none;
        margin: 10px;
        padding: 10px 20px;
        cursor: pointer;
    }

    .mobile-nav-items > ul > li > a {
        color: white;
        text-decoration: none;
        font-family: 'sfpro';
    }

    .mobile-nav-items > ul > li::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 0.17rem;
        background-color: white !important;
        left: 0;
        bottom: 0;
        transform-origin: 0% 100%;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    .mobile-nav-items > ul > li:hover::after {
        transform: scaleX(1);
    }

    .mobile-nav-button {
        background-color: #141214;
        border-radius: 50px;
        position: relative;
        display: inline-block;
        overflow: hidden;
        cursor: pointer;
    }

    .mobile-nav-button .anim-layer {
        position: absolute;
        top: 0;
        left: 50%;
        width: 0;
        height: 100%;
        background-color: white;
        transition: width 0.3s ease, left 0.3s ease;
    }

    .mobile-nav-button:hover .anim-layer {
        width: 100%;
        left: 0;
    }

    .mobile-nav-button:hover a {
        color: #141214;
    }

    .mobile-nav-button a {
        display: block;
        padding: 10px 20px;
        color: white;
        text-decoration: none;
        font-family: 'sfpro';
        position: relative;
        z-index: 1;
    }

    .nav-items > ul,
    .nav-button {
        display: none;
    }

    #hamburger-menu,
    #mobile-menu {
        display: block;
        color: white;
    }

    #hamburger-cross {
        display: block;
        color: white;
        cursor: pointer;
        font-size: 40px;
        position: absolute;
        top: 20px;
        right: 26px;
    }

    #hamburger-cross {
        display: block;
        cursor: pointer;
        font-size: 30px;
        color: white;
        position: absolute;
        top: 20px;
        right: 20px;
    }
}
            </style>
            <div id="back-to-top" class="back-to-top" style="display: none;">&#94;</div>
               <div class="navbar">
                <div class="nav-logo">
                    <a href="/index.html"><img src="img/logo.png" alt=""></a>
                </div>
                <div class="nav-items">
                    <ul>
                        <li><a href="/index.html">Home</a></li>
                        <li><a href="./about.html">About</a></li>
                        <li><a href="./product.html">Product</a></li>
                        <li><a href="./blogs.html">Blogs</a></li>
                        <li><a href="./contact.html">Contact</a></li>
                        <li><a href="">Dealer Network</a></li>
                    </ul>
                </div>
                <div id="hamburger-menu">&#9776;</div>
            </div>
            <div id="mobile-menu">
                <div class="mobile-nav-items">
                   <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="./about.html">About</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div id="hamburger-cross">&#10006;</div>
            </div>
        `;
        
    }
}


customElements.define('special-header', specialHeader);

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var navItems = document.querySelector('.nav-items');
    var backToTopButton = document.getElementById('back-to-top');

    if (window.scrollY > 10) {
        navbar.classList.add('fixed');
        navItems.classList.add('hidden');
        backToTopButton.style.display = 'block';
    } else {
        navbar.classList.remove('fixed');
        navItems.classList.remove('hidden');
        backToTopButton.style.display = 'none';
    }
});

// Scroll back to top when the button is clicked
document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function nav() {
    var getHamburgerIcon = document.getElementById("hamburger-menu");
    var getHamburgerCrossIcon = document.getElementById("hamburger-cross");
    var getMobileMenu = document.getElementById("mobile-menu");

    getHamburgerIcon.addEventListener("click", function () {
        getMobileMenu.style.display = "flex";
        setTimeout(function () {
            getMobileMenu.style.transform = "translateX(0%)"; // Slide in the menu
        }, 50); // Add a small delay for better transition effect
    });

    getHamburgerCrossIcon.addEventListener("click", function () {
        getMobileMenu.style.transform = "translateX(-100%)"; // Slide out the menu
        setTimeout(function () {
            getMobileMenu.style.display = "none";
        }, 300); // Wait for the transition to end before hiding
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 770) {
            getMobileMenu.style.display = "none";
        }
    });
}
nav();

class specialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                @font-face {
                    font-family: 'sfpro';
                    src: url('/fonts/SFPRODISPLAYBOLD.woff2');
                }


                .footer {
                    background-color: #1f1f1f;
                    padding: 80px 0;
                       font-family: 'sfpro';
                }

                .container {
                    max-width: 1170px;
                    margin: auto;
                }

                .row {
                    display: flex;
                    flex-wrap: wrap;
                }

                ul {
                    list-style: none;
                }

                .footer-col {
                    width: 20%;
                    padding: 0 5px;
                }

                .footer-logo a,
                .footer-button a {
                  color: white;
                  list-style: none;
                     text-decoration: none;
                     display: flex;
                                        }

                        .footer-logo {
                            width: 20%;
                        }

                        .footer-logo img {
                            width: 100%;
                        }


                .footer-col h4 {
                    font-size: 18px;
                    color: #FFF;
                    text-transform: capitalize;
                    margin-bottom: 35px;
                    text-align:center;
                    font-weight: 500;
                    position: relative;
                }

                .footer-col h4::before {
                    content: "";
                    position: absolute;
                    left: 20;
                    bottom: -10px;
                    background-color: #E91E63;
                    width: 50px;
                    height: 2px;
                }

                .footer-col ul li:not(:last-child) {
                    margin-bottom: 10px;
                }

                .footer-col ul li a {
                    color: #DDD;
                    display: block;
                    text-align:center;
                    font-size: 1rem;
                    font-weight: 300;
                    text-transform: capitalize;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .footer-col ul li a:hover {
                    color: #FFF;
                    padding-left: 0;
                }
                    ol,
                    ul{
                        padding: 0 !important;

                    }

                .footer-col .social-links a {
                    color: #FFF;
                    background-color: rgba(255, 255, 255, 0.2);
                    display: inline-block;
                    height: 40px;
                    width: 40px;
                    border-radius: 50%;
                    text-align: center;
                    margin: 0 10px 10px 0;
                    line-height: 40px;
                    transition: all 0.5s ease;
                }

                .social-links{
                display: flex;
                justify-content: center;
                align-items: center;
                }

                .footer-col .social-links a:hover {
                    color: #151515;
                    background-color: #FFF;
                }

                @media(max-width: 767px) {
                    .footer-col {
                        width: 50%;
                        margin-bottom: 30px;
                    }
                }

                @media(max-width: 574px) {
                    .footer-col {
                        width: 100%;
                    }
                }
            </style>
            <footer class="footer">
                <div class="container row">
                    <div class="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">FAQ's</a></li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Categories</h4>
                        <ul>
                            <li><a href="#">Amplifier</a></li>
                            <li><a href="#">Mic</a></li>
                            <li><a href="#">Mixer</a></li>
                            <li><a href="#">Speakers</a></li>
                            <li><a href="#">woffer</a></li>
                        </ul>
                    </div>
                      <div class="footer-logo footer-col">
                    <a href="/index.html"><img src="img/logo.png" alt=""></a>
                </div>
                    <div class="footer-col">
                        <h4>Visit Our Store</h4>
                        <ul>
                            <li><a href="#">download</a></li>
                            <li><a href="#">changelog</a></li>
                            <li><a href="#">github</a></li>
                            <li><a href="#">all version</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-youtube"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
                    <div style="width:100%;padding:20px; background-color: #000; color:white; text-align:center;">
                        <span>Copyright &copy;
                            <script>
                         document.write(new Date().getFullYear());
                            </script>&nbsp;
                            <a style="color:red; text-decoration: none;" href="{{ route("index") }}" > Dynatone </a> Designed and Developed by <a href="https://www.bridgekala.com/" style="color:purple; text-decoration: none;" target="_blank">Bridgekala</a>
                        </span>
                    </div>
        `;
    }
}

customElements.define('special-footer', specialFooter);
