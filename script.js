document.addEventListener("DOMContentLoaded", () => {
    const doors = document.querySelectorAll(".door");
    const today = new Date(); // Hakee nykyisen päivämäärän
    const currentDay = today.getDate(); // Päivän numero
    const currentMonth = today.getMonth(); // Kuukausi (0 = tammikuu, 11 = joulukuu)

    doors.forEach(door => {
        const day = parseInt(door.getAttribute("data-day"));
        
        // Varmistetaan, että luukku voidaan avata vain joulukuussa
        if (currentMonth === 11 && day <= currentDay) {
            // Voidaan avata luukku vain joulukuussa ja vain oikeana päivänä
            door.addEventListener("click", () => {
                door.classList.add("open");
                window.location.href = `https://www.example.com/video-${day}`; // Linkki videoon
            });
        } else {
            // Estetään klikkaukset ennen joulukuuta ja tuleville luukoille
            door.style.pointerEvents = "none";
            door.style.opacity = "0.6";
            door.style.cursor = "not-allowed";
        }
    });
});
