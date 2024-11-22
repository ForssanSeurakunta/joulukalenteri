document.addEventListener("DOMContentLoaded", () => {
    const doors = document.querySelectorAll(".door");
    const today = new Date().getDate(); // Hakee tämän päivän päivänumeron

    doors.forEach(door => {
        const day = parseInt(door.getAttribute("data-day"));
        
        if (day <= today) {
            door.addEventListener("click", () => {
                door.classList.add("open");
                alert(`Luukku ${day} avattu!`);
            });
        } else {
            door.style.pointerEvents = "none";
            door.style.opacity = "0.6";
        }
    });
});
