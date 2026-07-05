document.addEventListener("DOMContentLoaded", () => {

    const galleryImages = document.querySelectorAll(".gallery img");

    galleryImages.forEach((image) => {

        image.addEventListener("click", () => {

            image.animate([
                { transform: "scale(1)" },
                { transform: "scale(1.08)" },
                { transform: "scale(1)" }
            ], {
                duration: 400
            });

        });

    });

    const stars = document.querySelector(".stars");

    setInterval(() => {

        const shootingStar = document.createElement("div");

        shootingStar.style.position = "fixed";
        shootingStar.style.width = "2px";
        shootingStar.style.height = "90px";
        shootingStar.style.background = "linear-gradient(white, transparent)";
        shootingStar.style.left = Math.random() * window.innerWidth + "px";
        shootingStar.style.top = "-100px";
        shootingStar.style.transform = "rotate(35deg)";
        shootingStar.style.opacity = "0.8";
        shootingStar.style.pointerEvents = "none";
        shootingStar.style.zIndex = "1";

        document.body.appendChild(shootingStar);

        shootingStar.animate([
            {
                transform: "translate(0,0) rotate(35deg)",
                opacity: 1
            },
            {
                transform: "translate(-350px,500px) rotate(35deg)",
                opacity: 0
            }
        ], {
            duration: 1500,
            easing: "ease-out"
        });

        setTimeout(() => {
            shootingStar.remove();
        }, 1500);

    }, 3500);

});