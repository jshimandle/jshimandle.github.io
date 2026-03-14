// ============================================================
//  search.js  — client-side full-text search via search.json
// ============================================================

(function () {
  const trigger  = document.getElementById('search-trigger');
  const overlay  = document.getElementById('search-overlay');
  const input    = document.getElementById('search-input');
  const closeBtn = document.getElementById('search-close');
  const results  = document.getElementById('search-results');

  if (!trigger || !overlay) return;

  let index = [];

  // Fetch the search index Jekyll builds at /search.json
  function loadIndex() {
    if (index.length) return Promise.resolve();
    return fetch('/search.json')
      .then(r => r.json())
      .then(data => { index = data; })
      .catch(() => { index = []; });
  }

  function openSearch() {
    overlay.classList.add('open');
    loadIndex().then(() => input.focus());
  }
  function closeSearch() {
    overlay.classList.remove('open');
    input.value = '';
    results.innerHTML = '';
  }

  trigger.addEventListener('click', openSearch);
  closeBtn.addEventListener('click', closeSearch);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });

  function highlight(text, query) {
    if (!query) return text;
    const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(re, '<mark>$1</mark>');
  }

  function search(query) {
    if (!query || query.length < 2) { results.innerHTML = ''; return; }
    const q = query.toLowerCase();
    const hits = index.filter(item =>
      item.title.toLowerCase().includes(q) ||
      (item.content && item.content.toLowerCase().includes(q)) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(q)))
    ).slice(0, 8);

    if (!hits.length) {
      results.innerHTML = '<li style="padding:.6em .4em;color:var(--ink-3);font-size:.9rem;">No results found.</li>';
      return;
    }
    results.innerHTML = hits.map(item => `
      <li class="search-result-item">
        <a href="${item.url}">
          <span class="result-type">${item.type}</span>
          <span class="result-title">${highlight(item.title, query)}</span>
        </a>
      </li>
    `).join('');
  }

  input.addEventListener('input', () => search(input.value.trim()));
})();
