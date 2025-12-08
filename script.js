document.addEventListener("DOMContentLoaded", () => {
  const doors = document.querySelectorAll(".door");

  // Aikavyöhyke pakotetaan Suomeen, niin ei saa etuajassa auki vaikka ois ulkomailla
  function getHelsinkiDateParts(d = new Date()) {
    const parts = new Intl.DateTimeFormat("fi-FI", {
      timeZone: "Europe/Helsinki",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).formatToParts(d);
    const map = {};
    for (const p of parts) map[p.type] = p.value;
    return {
      year: Number(map.year),
      month: Number(map.month),
      day: Number(map.day),
    };
  }

  const { year, month: helMonth, day: helDay } = getHelsinkiDateParts();
  const DECEMBER = 12;

  const isPreview = new URLSearchParams(window.location.search).has("preview");

  function canOpen(day) {
    if (isPreview) return true;
    return helMonth === DECEMBER && helDay >= day;
  }

  // Tyhjät linkit valmiiksi
   const videoLinks = [
    "https://youtu.be/u18zV3_xwkw", // 1
    "https://youtu.be/qT9GQKToC_s", // 2
    "https://www.youtube.com/watch?v=pi5hnHPAxWc", // 3
    "https://youtu.be/x2tnYryoKMI", // 4
    "https://youtu.be/fUp_nadyV3E", // 5
    "https://youtu.be/5pFEn0ufJos", // 6
    "https://youtu.be/PSlirLzcfPo", // 7
    "https://youtu.be/ScmbZv_Q2Eo", // 8
    "https://youtu.be/axQNwEch32w", // 9
    "", // 10
    "", // 11
    "", // 12
    "", // 13
    "", // 14
    "", // 15
    "", // 16
    "", // 17
    "", // 18
    "", // 19
    "", // 20
    "", // 21
    "", // 22
    "", // 23
    "", // 24
    "", // 25
    "", // 26
    "", // 27
    "", // 28
  ];

  // 3D-pinta kaikille luukuille
  doors.forEach(d => d.classList.add("door--button3d"));

  // Keskibadge vain 24.
  const badgeDays = [24];
  badgeDays.forEach(day => {
    document.querySelector(`.door[data-day="${day}"]`)?.classList.add("door--badge");
  });

  // Sparkle päällä aina
  const door24 = document.querySelector('.door[data-day="24"]');
  if (door24) door24.classList.add("sparkling");

  // Alustetaan lukitus ja tooltipit
  function updateDoorState() {
    const { month, day } = getHelsinkiDateParts();
    doors.forEach(door => {
      const d = Number(door.dataset.day);
      const open = isPreview || (month === DECEMBER && day >= d);
      door.classList.toggle("locked", !open);
      door.setAttribute("aria-disabled", String(!open));
      door.title = open ? "" : `Aukeaa ${d}.12.`;
    });
  }

  updateDoorState();
  setInterval(updateDoorState, 60 * 1000);

  // Klikkaukset
  doors.forEach(door => {
    const day = parseInt(door.dataset.day, 10);
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

  // Logon efekti
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
  const snowflakesContainer = document.querySelector(".snowflakes-container");
  if (snowflakesContainer) {
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.textContent = "❄";
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
      snowflake.style.animationDelay = `${Math.random() * 5}s`;
      snowflakesContainer.appendChild(snowflake);
    }
  }
});
