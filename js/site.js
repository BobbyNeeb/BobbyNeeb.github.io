// Shared header/footer + nav toggle. Pages include <div id="site-header"></div> and <div id="site-footer"></div>.
(function () {
  const pages = [
    ["index.html", "Home"], ["wellness.html", "Wellness"], ["hikes.html", "Hikes"],
    ["bucket-list.html", "Bucket List"], ["journal.html", "Planning Journal"]
  ];
  const here = location.pathname.split("/").pop() || "index.html";
  const logo = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M2 27 L12 11 L17 18 L21 13 L30 27 Z" fill="#9db58f"/><path d="M12 11 L14.5 15 L12.8 14.2 L11 15.5 Z" fill="#fff"/><circle cx="24" cy="7" r="3" fill="#e9a25f"/></svg>';
  const header = document.getElementById("site-header");
  if (header) {
    header.outerHTML = `
<a class="skip" href="#main">Skip to content</a>
<header class="site-header"><div class="wrap">
  <a class="brand" href="index.html">${logo}<span>Bobby Neeb</span></a>
  <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav">Menu</button>
  <nav id="site-nav" class="site-nav" aria-label="Main"><ul>
    ${pages.map(([h, t]) => `<li><a href="${h}"${h === here ? ' aria-current="page"' : ""}>${t}</a></li>`).join("")}
  </ul></nav>
</div></header>`;
    const btn = document.querySelector(".nav-toggle"), nav = document.getElementById("site-nav");
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  }
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.outerHTML = `<footer class="site-footer"><div class="wrap">
  <span>&copy; 2026 Bobby Neeb</span>
  <span>Made in Indiana &middot; Hike your own hike.</span>
</div></footer>`;
  }
})();

// Helpers used by data-driven pages
window.esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
window.tbd = s => (/^\s*TBD\s*$/i.test(String(s)) ? '<mark class="tbd">TBD</mark>' : esc(s).replace(/\bTBD\b/g, '<mark class="tbd">TBD</mark>'));
window.loadJSON = async path => {
  const r = await fetch(path, { cache: "no-cache" });
  if (!r.ok) throw new Error(path + " " + r.status);
  return r.json();
};
window.showError = (el, e) => { el.innerHTML = `<p class="placeholder">Couldn't load data (${esc(e.message)}). Preview the site through a web server, not by double-clicking the file.</p>`; };
