/* ================================================
   ManishMeena — Blog JavaScript
================================================ */

// ======== DATA ========
const posts = [
    {
        id: 1, cat: "Economy", tag: "economy-tag", pinned: true,
        title: "India's Economic Ascent: How the Next Decade Will Reshape Global Finance",
        excerpt: "From manufacturing hubs to digital innovation, India is poised for unprecedented growth. Here's what investors need to know about the opportunities and challenges ahead.",
        author: "Ananya Sharma", authorSeed: "ananya", role: "Senior Economics Editor",
        date: "Feb 20, 2026", readTime: "14 min read", emoji: "🇮🇳",
        bg: "linear-gradient(135deg,rgba(59,130,246,0.2),rgba(37,99,235,0.1))",
        views: "12.4K", comments: 143, saves: 891
    },
    {
        id: 2, cat: "Investing", tag: "investing-tag",
        title: "Decoding the Nifty 50: What India's Benchmark Index Tells Us About Future Returns",
        excerpt: "A deep dive into the Nifty 50's composition, sector weightings, and historical performance to forecast the trajectory of Indian equities.",
        author: "Rohan Mehta", authorSeed: "rohan", role: "Markets Editor",
        date: "Feb 19, 2026", readTime: "10 min read", emoji: "📈",
        bg: "linear-gradient(135deg,rgba(168,85,247,0.2),rgba(126,34,206,0.1))",
        views: "9.8K", comments: 97, saves: 654
    },
    {
        id: 3, cat: "Business", tag: "business-tag",
        title: "The Rise of Indian Unicorns: A Blueprint for Startup Success in a Dynamic Market",
        excerpt: "Examining the strategies, funding rounds, and market impact of India's most successful startups, and what it takes to build a billion-dollar company.",
        author: "Priya Singh", authorSeed: "priya", role: "Corporate Strategy",
        date: "Feb 18, 2026", readTime: "12 min read", emoji: "🚀",
        bg: "linear-gradient(135deg,rgba(34,197,94,0.15),rgba(21,128,61,0.08))",
        views: "8.1K", comments: 62, saves: 501
    },
    {
        id: 4, cat: "Markets", tag: "markets-tag",
        title: "Understanding India's Bond Market: Opportunities and Risks for Global Investors",
        excerpt: "Navigating the complexities of Indian government bonds and corporate debt, with insights into yields, inflation, and regulatory changes.",
        author: "Vikram Kumar", authorSeed: "vikram", role: "Fixed Income Analyst",
        date: "Feb 17, 2026", readTime: "8 min read", emoji: "💰",
        bg: "linear-gradient(135deg,rgba(212,160,23,0.18),rgba(161,117,8,0.08))",
        views: "7.3K", comments: 55, saves: 443
    },
    {
        id: 5, cat: "Leadership", tag: "leadership-tag",
        title: "Indian CEOs on the Global Stage: Leading with Innovation and Resilience",
        excerpt: "Profiles of visionary Indian leaders who are shaping global industries, their management philosophies, and lessons for aspiring executives.",
        author: "Deepa Narayan", authorSeed: "deepa", role: "Leadership & Culture",
        date: "Feb 16, 2026", readTime: "9 min read", emoji: "🌟",
        bg: "linear-gradient(135deg,rgba(20,184,166,0.15),rgba(15,118,110,0.08))",
        views: "6.5K", comments: 48, saves: 389
    },
    {
        id: 6, cat: "Technology", tag: "tech-tag",
        title: "India's Digital Transformation: The Impact of AI and 5G on the Economy",
        excerpt: "Exploring how advanced technologies are driving growth across sectors, from fintech to healthcare, and positioning India as a tech powerhouse.",
        author: "Arjun Reddy", authorSeed: "arjun", role: "Technology Analyst",
        date: "Feb 15, 2026", readTime: "11 min read", emoji: "💻",
        bg: "linear-gradient(135deg,rgba(249,115,22,0.15),rgba(194,65,12,0.08))",
        views: "5.9K", comments: 41, saves: 302
    },
    {
        id: 7, cat: "Economy", tag: "economy-tag",
        title: "The Future of India's Manufacturing Sector: 'Make in India' and Beyond",
        excerpt: "An analysis of government initiatives, foreign investment, and infrastructure development driving India's manufacturing resurgence.",
        author: "Ananya Sharma", authorSeed: "ananya", role: "Senior Economics Editor",
        date: "Feb 14, 2026", readTime: "9 min read", emoji: "🏭",
        bg: "linear-gradient(135deg,rgba(59,130,246,0.12),rgba(37,99,235,0.06))",
        views: "4.7K", comments: 33, saves: 218
    },
    {
        id: 8, cat: "Investing", tag: "investing-tag",
        title: "Small Cap Gems: Unearthing Undervalued Opportunities in the Indian Market",
        excerpt: "A systematic screen of promising small-cap companies with strong fundamentals and high growth potential for long-term investors.",
        author: "Rohan Mehta", authorSeed: "rohan", role: "Markets Editor",
        date: "Feb 13, 2026", readTime: "10 min read", emoji: "💎",
        bg: "linear-gradient(135deg,rgba(212,160,23,0.12),rgba(161,117,8,0.06))",
        views: "4.1K", comments: 29, saves: 267
    },
];

const categories = [
    { name: "Markets", icon: "📈", count: 47 },
    { name: "Economy", icon: "🏛️", count: 38 },
    { name: "Investing", icon: "💰", count: 62 },
    { name: "Startups", icon: "🚀", count: 41 },
    { name: "Budget & Tax", icon: "📋", count: 24 },
    { name: "Technology", icon: "💻", count: 31 },
    { name: "Real Estate", icon: "🏠", count: 19 },
];

const popularPosts = [
    { title: "Union Budget 2026: Every Tax Change That Affects You", cat: "Budget & Tax", views: "21.4K" },
    { title: "Nifty at 25,000: Is the Rally Sustainable?", cat: "Markets", views: "17.8K" },
    { title: "Best SIP Funds for 2026: A Category-by-Category Guide", cat: "Investing", views: "15.2K" },
    { title: "RBI Repo Rate History vs. Sensex: What the Data Shows", cat: "Economy", views: "12.6K" },
    { title: "India's Top 10 Funded Startups of 2025: Where Are They Now?", cat: "Startups", views: "10.9K" },
];

const authors = [
    { name: "Rahul Sharma", beat: "Indian Markets & Economy", bio: "Former SEBI official and equity research head. 18 years decoding Dalal Street, RBI policy, and India's macroeconomic story.", seed: "rahul", posts: 54, followers: "36K", avg: "14K views" },
    { name: "Priya Nair", beat: "Mutual Funds & SIP", bio: "SEBI-registered investment adviser and personal finance educator. Makes complex investing concepts simple for the everyday Indian.", seed: "priya", posts: 41, followers: "29K", avg: "11K views" },
    { name: "Anjali Mehta", beat: "Startups & Venture Capital", bio: "Covered 200+ funding rounds across India's startup ecosystem. Former journalist at ET and Mint with an eye for India's next unicorns.", seed: "anjali", posts: 38, followers: "24K", avg: "9K views" },
    { name: "Vikram Singh", beat: "Equity Strategy", bio: "Ex-buy-side analyst at DSP and HDFC AMC. Writes about Nifty, Sensex, FII/DII flows, and sector rotation strategies.", seed: "vikram", posts: 31, followers: "19K", avg: "8K views" },
    { name: "Neha Kapoor", beat: "Tax, Budget & Policy", bio: "CA and tax policy expert. Translates the Finance Minister's budget speech into plain language every Indian understands.", seed: "neha", posts: 27, followers: "22K", avg: "12K views" },
    { name: "Arjun Reddy", beat: "Technology & Fintech", bio: "IIT alumnus and former product manager at Razorpay. Covers India's fintech revolution, UPI, digital banking, and tech IPOs.", seed: "arjun", posts: 33, followers: "17K", avg: "7K views" },
];

const tags = ["Nifty 50", "Sensex", "RBI Policy", "SIP", "Mutual Funds", "GST", "Union Budget", "FII Flows", "SEBI", "IPO", "Smallcap", "Midcap", "FD Rates", "Gold Prices", "Inflation", "UPI", "Startup Funding", "PLI Scheme", "REITs", "NPS"];

const trendingTags = ["RBI Repo Rate", "Nifty 50", "Union Budget 2026", "SIP Returns", "FII Selloff", "India Inflation", "Sensex Rally", "Top Smallcaps", "Startup Funding", "GST Reform"];

// ======== UTILITIES ========
const toast = (msg) => {
    const el = document.getElementById('toast');
    const m = document.getElementById('toast-msg');
    if (!el || !m) return;
    m.textContent = msg;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 3000);
};

const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.08 });
const observeReveal = () => document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObs.observe(el));

// ======== DATE ========
function setDate() {
    const el = document.getElementById('htop-date');
    if (!el) return;
    const d = new Date('2026-02-20');
    el.textContent = d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

// ======== READING PROGRESS ========
function initReadingProgress() {
    const bar = document.getElementById('reading-bar');
    if (!bar) return;
    window.addEventListener('scroll', () => {
        const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        bar.style.width = Math.min(pct, 100) + '%';
    });
}

// ======== TRENDING TAGS ========
function buildTrendingTags() {
    const c = document.getElementById('ttb-tags');
    if (!c) return;
    c.innerHTML = trendingTags.map((t, i) => `<button class="ttb-tag" id="ttag-${i}">${t}</button>`).join('');
    c.querySelectorAll('.ttb-tag').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('search-input').value = btn.textContent;
            document.getElementById('search-overlay').classList.add('open');
            document.getElementById('search-input').focus();
        });
    });
}

// ======== POSTS FEED ========
let activeCat = 'all';

function getTagClass(cat) {
    const map = { Economy: 'economy-tag', Markets: 'markets-tag', Startups: 'business-tag', Investing: 'investing-tag', 'Budget & Tax': 'realestate-tag', Technology: 'tech-tag', 'Real Estate': 'realestate-tag' };
    return map[cat] || 'economy-tag';
}

function buildPosts() {
    const c = document.getElementById('posts-list');
    if (!c) return;
    const filtered = activeCat === 'all' ? posts : posts.filter(p => p.cat === activeCat);
    c.innerHTML = filtered.map((p, i) => {
        const featured = p.pinned && activeCat === 'all' && i === 0;
        return `<article class="post-card ${featured ? 'featured-post' : ''} reveal" style="animation-delay:${i * 0.05}s" id="post-${p.id}">
      <div class="pc-body">
        <div class="pc-eyebrow">
          <span class="post-tag ${getTagClass(p.cat)}">${p.cat}</span>
          ${featured ? '<span class="pinned-badge">📌 Pinned</span>' : ''}
        </div>
        <div class="pc-author-row">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${p.authorSeed}" class="pc-author-avatar" alt="${p.author}" />
          <span class="pc-author-name">${p.author}</span>
          <span class="pc-dot">•</span>
          <span class="pc-date">${p.date}</span>
        </div>
        <h2 class="pc-title">${p.title}</h2>
        <p class="pc-excerpt">${p.excerpt}</p>
        <div class="pc-footer">
          <span class="pc-read-time">⏱ ${p.readTime}</span>
          <div class="pc-engagement">
            <span class="pc-eng-item">🔥 ${p.views}</span>
            <span class="pc-eng-item">💬 ${p.comments}</span>
            <span class="pc-eng-item">🔖 ${p.saves}</span>
          </div>
        </div>
      </div>
      ${!featured ? `<div class="pc-thumb" style="background:${p.bg};">${p.emoji}</div>` : ''}
    </article>`;
    }).join('');
    observeReveal();
}

// ======== CATEGORIES ========
function buildCategories() {
    const c = document.getElementById('cat-list');
    if (!c) return;
    c.innerHTML = categories.map((cat, i) => `
    <div class="cat-item reveal" id="catitem-${i}">
      <div class="cat-item-left">
        <span class="cat-item-icon">${cat.icon}</span>
        <span class="cat-item-name">${cat.name}</span>
      </div>
      <span class="cat-item-count">${cat.count}</span>
    </div>`).join('');
    observeReveal();
    c.querySelectorAll('.cat-item').forEach((item, i) => {
        item.addEventListener('click', () => {
            activeCat = categories[i].name;
            document.querySelectorAll('.feed-tab').forEach(t => t.classList.remove('active'));
            const matchTab = document.querySelector(`.feed-tab[data-cat="${activeCat}"]`);
            if (matchTab) matchTab.classList.add('active');
            buildPosts();
            document.getElementById('posts').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// ======== POPULAR POSTS ========
function buildPopular() {
    const c = document.getElementById('popular-list');
    if (!c) return;
    c.innerHTML = popularPosts.map((p, i) => `
    <div class="popular-item" id="pop-${i}">
      <div class="popular-num">${String(i + 1).padStart(2, '0')}</div>
      <div>
        <div class="popular-title">${p.title}</div>
        <div class="popular-meta">${p.cat} · ${p.views} views</div>
      </div>
    </div>`).join('');
}

// ======== AUTHOR SPOTLIGHT ========
function buildAuthorSpotlight() {
    const c = document.getElementById('author-spotlight');
    if (!c) return;
    const a = authors[0];
    c.innerHTML = `
    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${a.seed}" class="as-avatar" alt="${a.name}" />
    <div class="as-name">${a.name}</div>
    <div class="as-beat">${a.beat}</div>
    <p class="as-bio">${a.bio}</p>
    <div class="as-stats">
      <div class="as-stat"><span class="as-stat-n">${a.posts}</span><span class="as-stat-l">Posts</span></div>
      <div class="as-stat"><span class="as-stat-n">${a.followers}</span><span class="as-stat-l">Followers</span></div>
      <div class="as-stat"><span class="as-stat-n">${a.avg}</span><span class="as-stat-l">Avg Views</span></div>
    </div>
    <button class="as-follow-btn" id="as-follow-btn">+ Follow ${a.name}</button>`;
    document.getElementById('as-follow-btn')?.addEventListener('click', () => toast('✅ Following ' + a.name));
}

// ======== TAGS ========
function buildTags() {
    const c = document.getElementById('tags-cloud');
    if (!c) return;
    c.innerHTML = tags.map((t, i) => `<span class="tag-pill" id="tagpill-${i}">${t}</span>`).join('');
}

// ======== AUTHORS GRID ========
function buildAuthors() {
    const c = document.getElementById('authors-grid');
    if (!c) return;
    c.innerHTML = authors.map((a, i) => `
    <div class="author-card reveal" style="animation-delay:${i * 0.07}s" id="ac-${i}">
      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${a.seed}" class="author-card-avatar" alt="${a.name}" />
      <div class="author-card-name">${a.name}</div>
      <div class="author-card-beat">${a.beat}</div>
      <p class="author-card-bio">${a.bio}</p>
      <div class="author-card-stats">
        <span><b>${a.posts}</b>Posts</span>
        <span><b>${a.followers}</b>Followers</span>
        <span><b>${a.avg}</b>Avg Views</span>
      </div>
    </div>`).join('');
    observeReveal();
}

// ======== FEED FILTERS ========
function initFeedTabs() {
    document.querySelectorAll('.feed-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.feed-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCat = btn.dataset.cat;
            buildPosts();
        });
    });
}

// ======== SEARCH ========
function initSearch() {
    const overlay = document.getElementById('search-overlay');
    const input = document.getElementById('search-input');
    const open = () => { overlay.classList.add('open'); input?.focus(); };
    const close = () => { overlay.classList.remove('open'); };
    document.getElementById('nav-search-btn')?.addEventListener('click', open);
    document.getElementById('sov-close')?.addEventListener('click', close);
    overlay?.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); open(); } });
    document.querySelectorAll('.sov-chip').forEach(chip => {
        chip.addEventListener('click', () => { if (input) input.value = chip.textContent; input?.focus(); });
    });
}

// ======== STICKY NAV ========
function initStickyNav() {
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
        } else {
            header.style.boxShadow = 'none';
        }
        // Active nav highlight
        const sections = ['hero', 'posts', 'authors', 'newsletter'];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom > 100) {
                document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            }
        });
    });
}

// ======== NEWSLETTERS ========
function initNewsletters() {
    document.getElementById('nl-sidebar-btn')?.addEventListener('click', () => {
        const email = document.getElementById('nl-sidebar-email')?.value;
        if (email) { toast('🎉 Subscribed to ManishMeena Daily! Check your inbox.'); document.getElementById('nl-sidebar-email').value = ''; }
        else toast('⚠️ Please enter your email');
    });
    document.getElementById('nl-big-form')?.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('nl-email')?.value;
        if (email) { toast('🎉 You\'re in! ManishMeena Daily arrives tomorrow at 7 AM IST!'); document.getElementById('nl-email').value = ''; document.getElementById('nl-fname').value = ''; }
    });
    document.getElementById('htop-sub-btn')?.addEventListener('click', e => { e.preventDefault(); document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' }); });
    document.getElementById('cta-read-hero')?.addEventListener('click', e => { e.preventDefault(); toast('📖 Opening full article...'); });
    document.getElementById('save-hero-post')?.addEventListener('click', () => toast('🔖 Saved to reading list'));
}

// ======== PAGINATION ========
function initPagination() {
    document.querySelectorAll('.page-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            toast(`📄 Loading page ${btn.textContent}...`);
            document.getElementById('posts').scrollIntoView({ behavior: 'smooth' });
        });
    });
    document.getElementById('page-next-btn')?.addEventListener('click', () => toast('📄 Loading next page...'));
}

// ======== HAMBURGER ========
function initHamburger() {
    document.getElementById('nav-hamburger')?.addEventListener('click', () => {
        const menu = document.getElementById('nav-menu');
        menu?.classList.toggle('open');
    });
    // mobile styles
    const style = document.createElement('style');
    style.textContent = `
    @media(max-width:720px){
      .nav-menu.open{display:flex!important;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:var(--bg2);border-bottom:1px solid var(--border);padding:12px;z-index:200;}
      .nav-menu.open .nav-item{height:auto;padding:10px 14px;border-bottom:1px solid rgba(255,255,255,0.04);}
    }`;
    document.head.appendChild(style);
}

// ======== INIT ========
document.addEventListener('DOMContentLoaded', () => {
    setDate();
    initReadingProgress();
    buildTrendingTags();
    buildPosts();
    buildCategories();
    buildPopular();
    buildAuthorSpotlight();
    buildTags();
    buildAuthors();
    initFeedTabs();
    initSearch();
    initStickyNav();
    initNewsletters();
    initPagination();
    initHamburger();
    observeReveal();
});
