document.addEventListener("DOMContentLoaded", () => {
    const doors = document.querySelectorAll(".door");
    const today = new Date().getDate(); // Haetaan tämän päivän päivännumeron

    // Luokka, jossa videoiden URLit
    const videoLinks = [
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Esimerkki linkki 1 (muokkaa näitä oikeiksi video-linkeiksi)
        "https://www.youtube.com/watch?v=kJQP7kiw5Fk", // Esimerkki linkki 2
        // Lisää video-linkkejä tähän
    ];

    doors.forEach(door => {
        const day = parseInt(door.getAttribute("data-day"));

        // Luukku 1 on aina avattavissa
        if (day === 1) {
            door.addEventListener("click", () => {
                window.location.href = videoLinks[0]; // Linkki videoon
            });
        } 
        // Kaikki muut luukut (2-24) voivat avautua vain oikeana päivänä
        else {
            if (day <= today) {
                door.addEventListener("click", () => {
                    window.location.href = videoLinks[day - 1]; // Linkki videoon oikean päivän mukaan
                });
            } else {
                door.style.pointerEvents = "none"; // Estetään klikkaukset tuleville luukoille
                door.style.opacity = "0.6"; // Muutetaan luukun läpinäkyvyyttä tuleville päiville
                door.style.cursor = "not-allowed"; // Estetään kursori klikkaukselle
            }
        }
    });
});
