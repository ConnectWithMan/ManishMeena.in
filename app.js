/**
 * Premium Bio Page Interactivity & Features
 * Handles themes, animations, sharing, modal interactions, and contact card generation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initTheme();
  initStaggeredAnimations();
  initShareButton();
});

/**
 * --- Light/Dark Theme Management ---
 */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  // Retrieve saved theme or check system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  // Set initial theme
  document.documentElement.setAttribute('data-theme', defaultTheme);

  // Toggle theme click event
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Set theme and save preference
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Play subtle haptic scale animation
    themeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
      themeToggle.style.transform = '';
    }, 150);
  });
}

/**
 * --- Staggered Entrance Animations for Cards ---
 */
function initStaggeredAnimations() {
  const cards = document.querySelectorAll('.link-card');
  cards.forEach((card, index) => {
    // Apply increasing animation delays to create a cascading entrance effect
    card.style.animationDelay = `${index * 80 + 150}ms`;
    card.classList.add('fade-in-card');
  });
}

/**
 * --- Share Page Functionality (Web Share API or Copy to Clipboard) ---
 */
function initShareButton() {
  const shareBtn = document.getElementById('shareBtn');
  if (!shareBtn) return;

  shareBtn.addEventListener('click', async () => {
    const shareData = {
      title: 'Manish Meena | IT Engineer & Consultant',
      text: 'Check out Manish Meena\'s professional links and contact details.',
      url: window.location.href
    };

    try {
      // Check if browser supports Web Share API
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy link to clipboard
        copyToClipboard(window.location.href);
      }
    } catch (err) {
      // Handle potential cancel or error, fallback to clipboard
      if (err.name !== 'AbortError') {
        copyToClipboard(window.location.href);
      }
    }
  });
}

/**
 * Helper: Copy text to clipboard and show toast
 */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Link copied to clipboard!');
  }).catch(() => {
    // Secondary fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast('Link copied to clipboard!');
    } catch (err) {
      showToast('Failed to copy link.');
    }
    document.body.removeChild(textArea);
  });
}

/**
 * Show animated toast notification
 */
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastText = toast.querySelector('.toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  // Automatically hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}




