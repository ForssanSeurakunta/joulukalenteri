document.addEventListener("DOMContentLoaded", () => {
    const doors = document.querySelectorAll(".door");
    const today = new Date(); // Hakee päivämäärän nyt
    const currentDay = today.getDate(); // Päivän numero
    const currentMonth = today.getMonth(); // Kuukausi (0 = tammikuu, 11 = joulukuu)

    // Linkit videoihin
    const videoLinks = [
        "https://www.forssanseurakunta.fi/info-ja-asiointi/kirkolliset-ilmoitukset",  // Luukku 1
        "https://www.example.com/video-2",  // Luukku 2
        "https://www.example.com/video-3",  // Luukku 3
        "https://www.example.com/video-4",  // Luukku 4
        "https://www.example.com/video-5",  // Luukku 5
        "https://www.example.com/video-6",  // Luukku 6
        "https://www.example.com/video-7",  // Luukku 7
        "https://www.example.com/video-8",  // Luukku 8
        "https://www.example.com/video-9",  // Luukku 9
        "https://www.example.com/video-10", // Luukku 10
        "https://www.example.com/video-11", // Luukku 11
        "https://www.example.com/video-12", // Luukku 12
        "https://www.example.com/video-13", // Luukku 13
        "https://www.example.com/video-14", // Luukku 14
        "https://www.example.com/video-15", // Luukku 15
        "https://www.example.com/video-16", // Luukku 16
        "https://www.example.com/video-17", // Luukku 17
        "https://www.example.com/video-18", // Luukku 18
        "https://www.example.com/video-19", // Luukku 19
        "https://www.example.com/video-20", // Luukku 20
        "https://www.example.com/video-21", // Luukku 21
        "https://www.example.com/video-22", // Luukku 22
        "https://www.example.com/video-23", // Luukku 23
        "https://www.example.com/video-24", // Luukku 24
    ];

    // Lumisade
    function createSnowflakes() {
        const snowflakeCount = 50; // Lumihiutaleiden määrä
        for (let i = 0; i < snowflakeCount; i++) {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflake.innerHTML = "&#10052;"; // Lumihiutaleen symboli
            snowflake.style.left = `${Math.random() * 100}vw`; // Satunnainen sijainti vaakasuunnassa
            snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Satunnainen kesto
            snowflake.style.animationDelay = `${Math.random() * 5}s`; // Satunnainen viive
            document.body.appendChild(snowflake);
        }
    }

    // Tässä varsinaisesti luodaan ne lumihiutaleet
    createSnowflakes();

    doors.forEach(door => {
        const day = parseInt(door.getAttribute("data-day"));
        
        if (currentMonth === 11 && day <= currentDay) {
            // Luukku voidaan avata vain joulukuussa ja oikeana päivänä
            door.addEventListener("click", () => {
                door.classList.add("open");
                window.location.href = videoLinks[day - 1]; // Haetaan oikea video taulukosta
            });
        } else {
            // Estetään klikkaukset ennen joulukuuta
            door.style.pointerEvents = "none";
            door.style.opacity = "0.6";
            door.style.cursor = "not-allowed";
        }
    });
});
