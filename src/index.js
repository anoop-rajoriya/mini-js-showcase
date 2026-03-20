// ── FILTER LOGIC ──
const pills = document.querySelectorAll('.pill');
const cards = document.querySelectorAll('.card');

pills.forEach(pill => {
    pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const filter = pill.dataset.filter;

        cards.forEach(card => {
            const tags = card.dataset.tags || '';
            if (filter === 'all' || tags.includes(filter)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });

        // Update count
        const visible = document.querySelectorAll('.card:not(.hidden)').length;
        document.getElementById('totalCount').textContent = visible;
    });
});