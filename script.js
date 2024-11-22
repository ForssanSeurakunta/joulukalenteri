document.addEventListener("DOMContentLoaded", () => {
    const doors = document.querySelectorAll(".door");
    const today = new Date().getDate(); // Haetaan tämän päivän päivännumeron

    doors.forEach(door => {
        const day = parseInt(door.getAttribute("data-day"));
        
        if (day <= today) {
            door.addEventListener("click", () => {
                if (!door.classList.contains("open")) {
                    door.classList.add("open");
                    door.style.backgroundColor = "#ffcc99"; // Pieni värivaihdos, kun luukku avataan
                    door.style.transform = "scale(1.1)"; // Pieni zoom-efekti
                    door.style.transition = "all 0.3s ease"; // Animaatioefekti
                    alert(`Luukku ${day} avattu!`);

                    // Lisätään lumisateen efekti
                    let snowEffect = document.createElement('div');
                    snowEffect.classList.add('snow-effect');
                    door.appendChild(snowEffect);
                    setTimeout(() => {
                        door.removeChild(snowEffect); // Poistetaan lumisateen efekti
                    }, 1500); // Lumisade kestää 1.5 sekuntia
                }
            });
        } else {
            door.style.pointerEvents = "none"; // Estetään klikkaukset tuleville luukoille
            door.style.opacity = "0.6"; // Muutetaan luukun läpinäkyvyyttä tuleville päiville
            door.style.cursor = "not-allowed"; // Estetään kursori klikkaukselle
        }
    });
});
