const channelUrl = 'https://www.youtube.com/@AGAPEEBENEZERKARENBAPTISTCHURC';

export function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;
  const close = () => { menu.hidden = true; toggle.setAttribute('aria-expanded', 'false'); };
  toggle.addEventListener('click', () => {
    menu.hidden = !menu.hidden;
    toggle.setAttribute('aria-expanded', String(!menu.hidden));
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) { close(); toggle.focus(); }
  });
  document.addEventListener('click', event => {
    if (!menu.hidden && !menu.contains(event.target) && !toggle.contains(event.target)) close();
  });
  window.matchMedia('(min-width: 851px)').addEventListener('change', event => { if (event.matches) close(); });
}

export function initEventFilter() {
  const buttons = document.querySelectorAll('[data-filter]');
  buttons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.filter === 'all'));
    button.addEventListener('click', () => {
      buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      document.querySelectorAll('#eventList .event').forEach(event => {
        event.hidden = button.dataset.filter !== 'all' && !event.querySelector('.date')?.textContent.toLowerCase().includes(button.dataset.filter);
      });
    });
  });
}

export function updateFooterYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[character]);
}

function channelCard() {
  return `<article class="sermon"><a class="sermon-link" href="${channelUrl}" target="_blank" rel="noopener noreferrer"><span class="yt-tag">▶ AEKBC ON YOUTUBE</span><div><div class="sermon-video-title">A message of hope.</div><div class="sermon-video-status">Worship and grow with our church family.</div></div><span class="sermon-cta-row">Watch on YouTube ↗</span></a><div class="body"><h3>Messages from our church</h3><div class="meta">Explore worship services and recent uploads</div></div></article>`;
}

export async function initLatestVideos() {
  const container = document.getElementById('youtubeVideos');
  if (!container) return;
  container.innerHTML = channelCard();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const feed = 'https://www.youtube.com/feeds/videos.xml?channel_id=UC62JtIKzB3j3yytVsTqci9w';
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed)}`, { signal: controller.signal });
    if (!response.ok) throw new Error('Feed unavailable');
    const data = await response.json();
    const videos = (Array.isArray(data.items) ? data.items : []).filter(video => /(?:yt:video:|v=)[\w-]{11}/.test(`${video.guid} ${video.link}`)).slice(0, 3);
    if (!videos.length) return;
    container.innerHTML = videos.map(video => {
      const id = `${video.guid} ${video.link}`.match(/(?:yt:video:|v=)([\w-]{11})/)[1];
      const title = escapeHtml(video.title || 'Church worship service');
      const date = new Date(video.pubDate);
      const label = Number.isNaN(date.getTime()) ? 'Watch on YouTube' : date.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'});
      return `<article class="sermon"><a class="sermon-link" href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer" aria-label="Watch ${title} on YouTube" style="background-image:linear-gradient(0deg,rgba(20,39,30,.75),rgba(20,39,30,.08)),url('https://i.ytimg.com/vi/${id}/hqdefault.jpg')"><span class="yt-tag">▶ SUNDAY MESSAGES</span><span class="sermon-cta-row">Watch message ↗</span></a><div class="body"><h3>${title}</h3><div class="meta">${label}</div></div></article>`;
    }).join('');
  } catch {
    // The channel card remains usable when the third-party feed is unavailable.
  } finally { clearTimeout(timeout); }
}

export function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => button.setAttribute('aria-expanded', String(button.getAttribute('aria-expanded') !== 'true')));
  });
}

export function init() {
  initMobileMenu();
  initEventFilter();
  updateFooterYear();
  initAccordion();
  initLatestVideos();
}
