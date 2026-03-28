document.addEventListener('DOMContentLoaded', () => {
  loadTrips();
});

async function loadTrips() {
  try {
    // JSON path ---------------------------------------------------------
    const response = await fetch('./static-US26-SF-travel/imageLoader.json');
    if (!response.ok) {
      console.log("Error");
      throw new Error('Failed to load imageLoader.json');
    }
    const trips = await response.json();
    renderTimeline(trips);
    initScrollObserver();
  } catch (error) {
    console.error('Error loading trip data:', error);
    document.getElementById('timeline').innerHTML = `
      <div style="text-align:center; padding:60px 20px; color:rgba(255,255,255,0.3);">
        <p style="font-size:1.2rem; margin-bottom:12px;">Unable to load trip data</p>
        <p style="font-size:0.85rem;">Please ensure <code>imageLoader.json</code> exists in the current folder.</p>
      </div>
    `;
  }
}

function renderTimeline(trips) {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';

  trips.forEach((trip, index) => {
    const isEven = index % 2 === 0;
    const directionClass = isEven ? 'from-left' : 'from-right';
    const orderLabel = String(index + 1).padStart(2, '0');

    const entry = document.createElement('div');
    entry.classList.add('timeline-entry', directionClass);
    entry.setAttribute('data-index', index);
    // change src to corrresponding sub-folder -------------------------------------------------------
    entry.innerHTML = `
      <div class="entry-image-wrapper">
        <div class="entry-image-container">
          <a href="static-US26-SF-travel/original_imgs/${escapeHTML(trip.img)}" target="_blank">
          <img
            src="static-US26-SF-travel/web_imgs/${escapeHTML(trip.img)}"
            alt="Trip photo ${index + 1}"
            loading="lazy"
            onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22480%22 height=%22320%22><rect width=%22480%22 height=%22320%22 fill=%22%231a1a2e%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22rgba(255,255,255,0.15)%22 font-family=%22sans-serif%22 font-size=%2218%22>Photo ${index + 1}</text></svg>';"
          />
          </a>
        </div>
      </div>
      <div class="entry-text-wrapper">
        <div class="entry-order">${orderLabel}</div>
        <div class="entry-time">${escapeHTML(trip.time)}</div>
        <div class="entry-content">${escapeHTML(trip.content)}</div>
      </div>
    `;

    timeline.appendChild(entry);
  });
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function initScrollObserver() {
  const entries = document.querySelectorAll('.timeline-entry');

  // Intersection Observer for fade-in
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((observerEntries) => {
    observerEntries.forEach((obsEntry) => {
      if (obsEntry.isIntersecting) {
        obsEntry.target.classList.add('visible');
      } else {
        // Remove visible class when scrolled out for re-animation
        obsEntry.target.classList.remove('visible');
      }
    });
  }, observerOptions);

  entries.forEach((entry) => {
    observer.observe(entry);
  });
}