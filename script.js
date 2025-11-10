document.addEventListener("DOMContentLoaded", () => {
    const doors = document.querySelectorAll(".door");

    // Lisää säkenöivä efekti luukulle 24
    const door24 = document.querySelector('.door[data-day="24"]');
    if (door24) {
        door24.classList.add("sparkling");
    }

    // Linkit videoihin
    const videoLinks = [
        "",  // Luukku 1
        "",  // Luukku 2
        "",  // Luukku 3
        "",  // Luukku 4
        "",  // Luukku 5
        "",  // Luukku 6
        "",  // Luukku 7
        "",  // Luukku 8
        "",  // Luukku 9
        "", // Luukku 10
        "", // Luukku 11
        "", // Luukku 12
        "", // Luukku 13
        "", // Luukku 14
        "", // Luukku 15
        "", // Luukku 16
        "", // Luukku 17
        "", // Luukku 18
        "", // Luukku 19
        "", // Luukku 20
        "", // Luukku 21
        "", // Luukku 22
        "", // Luukku 23
        "", // Luukku 24
        "", // Luukku 25
    ];

    // Käy läpi kaikki luukut ja lisää klikkauskuuntelijat
    doors.forEach(door => {
        const day = parseInt(door.dataset.day, 10); // Hakee luukun päivämäärän
        door.addEventListener("click", () => {
            door.classList.add("open");
            window.location.href = videoLinks[day - 1]; // Haetaan oikea video taulukosta
        });
    });
    
    
    // Haetaan logo
    const logo = document.querySelector(".logo");

    // Hiiren liikkeen seuraaminen: logo liikkuu todella vähän, kun hiiri menee sen päälle
    logo.addEventListener("mouseenter", () => {
        logo.style.transition = "transform 0.2s ease"; // Sujuva liike
        logo.style.transform = "translate(3px, 3px)"; // Liikuttaa logoa hiukan oikealle ja alas
    });

    // Palautetaan logo alkuperäiseen paikkaan, kun hiiri poistuu
    logo.addEventListener("mouseleave", () => {
        logo.style.transform = "translate(0, 0)"; // Palautetaan alkuperäiseen paikkaan
    });

    // Lumisateen luominen
    const snowflakesContainer = document.querySelector('.snowflakes-container');

    // Lisää lumihiutaleita lumisateeseen
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄'; // Lumihiutaleen merkki
        snowflake.style.left = `${Math.random() * 100}%`; // Sijoittaa satunnaisesti vaakasuunnassa
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Satunnaistaa animaation kestoa
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Satunnaistaa animaation aloitusajan
        snowflakesContainer.appendChild(snowflake);
    }
});
