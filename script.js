document.addEventListener("DOMContentLoaded", () => {
    const doors = document.querySelectorAll(".door");

    // Lisää säkenöivä efekti luukulle 24
    const door24 = document.querySelector('.door[data-day="24"]');
    if (door24) {
        door24.classList.add("sparkling");
    }

    // Linkit videoihin
    const videoLinks = [
        "https://youtu.be/WNs7fZ9oAu8",  // Luukku 1
        "https://youtu.be/bFVwdcSUO2o",  // Luukku 2
        "https://youtu.be/GxwG9Bn2Wrw",  // Luukku 3
        "https://youtu.be/OVEk4KcBkEM",  // Luukku 4
        "https://youtu.be/j1LXYpvdpNE",  // Luukku 5
        "https://youtu.be/A0Kl01Dabgk",  // Luukku 6
        "https://youtu.be/cBJiK2pV5CQ",  // Luukku 7
        "https://youtu.be/KQZG5tUtR_k",  // Luukku 8
        "https://youtu.be/MvPHOcqY3wo",  // Luukku 9
        "https://youtu.be/QjIOkFX9Ntg", // Luukku 10
        "https://youtu.be/K6_po_B1cAc", // Luukku 11
        "https://youtu.be/HY4SM9fxiX4", // Luukku 12
        "https://youtu.be/leA3oeotRqU", // Luukku 13
        "https://youtu.be/P7pA-w3u-aE", // Luukku 14
        "https://youtu.be/p1B4UVxuvGM", // Luukku 15
        "https://youtu.be/_rCMBjyE_68", // Luukku 16
        "https://youtu.be/iEXf4zruf7w", // Luukku 17
        "https://youtu.be/MnE8FPW-4-o", // Luukku 18
        "https://youtu.be/osDBcw1UiFo", // Luukku 19
        "https://youtu.be/NP6f2idYSFU", // Luukku 20
        "https://youtu.be/7dlKkVQdsIg", // Luukku 21
        "https://youtu.be/KElELXU8kfc", // Luukku 22
        "https://youtu.be/0x8fReUi_0w", // Luukku 23
        "https://youtu.be/LvYDpoTmdAI", // Luukku 24
        "https://youtu.be/H7q6quZO_5M", // Luukku 25
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
        logo.style.transform = "translate(5px, 5px)"; // Liikuttaa logoa hiukan oikealle ja alas
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
