const ButtonMobileMenu = document.querySelector(".btn-menu-mobile");
const MobileMenuBar = document.querySelectorAll(".btn-menu-mobile div");

const Menu = document.querySelector(".menu");

ButtonMobileMenu.addEventListener('click', function() {
    MobileMenuBar.forEach(e => {
        e.classList.toggle("active");
    });

    Menu.classList.toggle("active");
});

if (localStorage.getItem("Slide") != null) {
    var CardFooterActive = parseInt(localStorage.getItem("Slide"));
} else {
    var CardFooterActive = 0;
}

const CardFooterArray = document.querySelectorAll(".footer-card");

const ButtonLeftFooter = document.querySelector(".fa-chevron-left");
const ButtonRightFooter = document.querySelector(".fa-chevron-right");

ButtonLeftFooter.addEventListener('click', function() {
    CardFooterActive -= 1;
    cardFooterSlide();
})

ButtonRightFooter.addEventListener('click', function() {
    CardFooterActive += 1;
    cardFooterSlide();
})

function cardFooterSlide() {
    if (CardFooterActive < 0 ) {
        CardFooterActive = CardFooterArray.length -1;
    }

    if (CardFooterActive > CardFooterArray.length -1) {
        CardFooterActive = 0;
    }

    for (let i = 0; i < CardFooterArray.length; i++) {
        if (CardFooterActive === i) {
            CardFooterArray[i].classList.add("active");
        } else {
            CardFooterArray[i].classList.remove("active");
        }
    }

    localStorage.setItem("Slide", CardFooterActive);
}

cardFooterSlide();