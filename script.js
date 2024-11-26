document.addEventListener("DOMContentLoaded", () => {
    const doors = document.querySelectorAll(".door");
    const today = new Date(); // Hakee päivämäärän nyt
    const currentDay = today.getDate(); // Päivän numero
    const currentMonth = today.getMonth(); // Kuukausi (0 = tammikuu, 11 = joulukuu)

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

    // Tästä varsinaisesti luodaan ne lumihiutaleet
    createSnowflakes();

    doors.forEach(door => {
        const day = parseInt(door.getAttribute("data-day"));
        
        // Luukku voidaan avata vasta joulukuussa (tsekkaa kuukauden)
        if (currentMonth === 11 && day <= currentDay) {
            // Voidaan avata luukku vain joulukuussa ja vain oikeana päivänä
            door.addEventListener("click", () => {
                door.classList.add("open");
                window.location.href = `https://www.example.com/video-${day}`; // Linkki videoon
            });
        } else {
            // Estetään klikkaukset ennen joulukuuta
            door.style.pointerEvents = "none";
            door.style.opacity = "0.6";
            door.style.cursor = "not-allowed";
        }
    });
});
