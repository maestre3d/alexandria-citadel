// listenColorScheme listen to any color scheme changed
export function listenColorScheme() {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    query.addEventListener('change', (e) => {
        // If changed to dark theme, replace current config
        // Prefer CSS Webkit over any config
        if (e.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
}