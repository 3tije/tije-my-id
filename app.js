(() => {
  const config = window.TIJE_CONFIG || {};
  document.getElementById("year").textContent = new Date().getFullYear();

  document.querySelectorAll("[data-public-app]").forEach(link => {
    const key = link.dataset.publicApp;
    if (config.publicApps && config.publicApps[key]) link.href = config.publicApps[key];
  });

  const social = config.social || {};
  const instagramLink = document.getElementById("instagramLink");
  const facebookLink = document.getElementById("facebookLink");
  const emailLink = document.getElementById("emailLink");

  if (instagramLink && social.instagram) instagramLink.href = social.instagram;

  if (facebookLink && social.facebook) {
    facebookLink.href = social.facebook;
    facebookLink.hidden = false;
  }

  if (emailLink && social.email) {
    emailLink.href = `mailto:${social.email}`;
    emailLink.hidden = false;
  }


  const menuBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  menuBtn?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });
  nav?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  const privateDialog = document.getElementById("privateDialog");
  const dialogTitle = document.getElementById("dialogTitle");

  document.querySelectorAll(".private-trigger").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-private-title]");
      dialogTitle.textContent = card?.dataset.privateTitle || "Akses terbatas";
      privateDialog.showModal();
    });
  });

  document.querySelectorAll("dialog").forEach(dialog => {
    dialog.querySelectorAll(".dialog-close,.dialog-ok").forEach(btn => btn.addEventListener("click", () => dialog.close()));
    dialog.addEventListener("click", e => {
      const box = dialog.getBoundingClientRect();
      if (e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom) dialog.close();
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("service-worker.js").catch(() => {}));
  }
})();