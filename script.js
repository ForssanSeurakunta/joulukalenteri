document.addEventListener("DOMContentLoaded", () => {
  const doors = document.querySelectorAll(".door");

  // Sparkle-efekti luukulle 24
  const door24 = document.querySelector('.door[data-day="24"]');
  if (door24) door24.classList.add("sparkling");

  // --- Asetukset ---
  const MONTH_DECEMBER = 11; // JS: 0 = tammikuu, 11 = joulukuu
  const now = new Date();

  // ✅ Haetaan kellonaika Helsingin aikavyöhykkeenä
  const helsinkiNow = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Europe/Helsinki" })
  );
  const year = helsinkiNow.getFullYear();

  // Dev/preview: lisää URL:iin ?preview=1 niin kaikki luukut aukeavat
  const params = new URLSearchParams(window.location.search);
  const isPreview = params.has("preview");

  // Tarkistaa, voiko luukun avata (tänään tai myöhemmin)
  function canOpen(day) {
    if (isPreview) return true;
    const openAt = new Date(year, MONTH_DECEMBER, day, 0, 0, 0);
    return helsinkiNow >= openAt;
  }

  // Linkit videoihin (täytä omat linkit)
  const videoLinks = [
    "",  // 1
    "",  // 2
    "",  // 3
    "",  // 4
    "",  // 5
    "",  // 6
    "",  // 7
    "",  // 8
    "",  // 9
    "",  // 10
    "",  // 11
    "",  // 12
    "",  // 13
    "",  // 14
    "",  // 15
    "",  // 16
    "",  // 17
    "",  // 18
    "",  // 19
    "",  // 20
    "",  // 21
    "",  // 22
    "",  // 23
    "",  // 24
    "",  // 25
  ];

  // Käy läpi kaikki luukut
  doors.forEach(door => {
    const day = parseInt(door.dataset.day, 10);

    // Merkitse lukitut/auenneet ulkoasussa
    if (canOpen(day)) {
      door.classList.remove("locked");
      door.setAttribute("aria-disabled", "false");
      door.title = "";
    } else {
      door.classList.add("locked");
      door.setAttribute("aria-disabled", "true");
      door.title = `Aukeaa ${day}.12.`;
    }

    // Klikki
    door.addEventListener("click", (e) => {
      if (!canOpen(day)) {
        e.preventDefault();
        door.classList.add("shake");
        setTimeout(() => door.classList.remove("shake"), 400);
        return;
      }

      door.classList.add("open");
      const href = videoLinks[day - 1] || "";
      if (href) window.location.href = href;
    });
  });

  // Logo-efektit
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("mouseenter", () => {
      logo.style.transition = "transform 0.2s ease";
      logo.style.transform = "translate(3px, 3px)";
    });
    logo.addEventListener("mouseleave", () => {
      logo.style.transform = "translate(0, 0)";
    });
  }

  // Lumisade
  const snowflakesContainer = document.querySelector('.snowflakes-container');
  if (snowflakesContainer) {
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.textContent = '❄';
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      snowflakesContainer.appendChild(snowflake);
    }
  }
});
