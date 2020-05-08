// listenColorScheme listen to any color scheme changed
export function listenColorScheme() {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    if (query.addEventListener !== undefined) {
        query.addEventListener('change', (e) => {
            // If changed to dark theme, replace current config
            // Prefer CSS Webkit over any config
            if (e.matches) {
                document.documentElement.classList.add('theme-transition');
                document.documentElement.setAttribute('data-theme', 'dark');
                window.setTimeout(function() {
                    document.documentElement.classList.remove('theme-transition')
                }, 200);
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.add('theme-transition');
                document.documentElement.setAttribute('data-theme', 'light');
                window.setTimeout(function() {
                    document.documentElement.classList.remove('theme-transition')
                }, 200);
                localStorage.setItem('theme', 'light');
            }
        });
    } else {
        // Using secure polyfill (avoid problems with iOS Safari)
        query.onchange = (e) => {
            // If changed to dark theme, replace current config
            // Prefer CSS Webkit over any config
            if (e.matches) {
                document.documentElement.classList.add('theme-transition');
                document.documentElement.setAttribute('data-theme', 'dark');
                window.setTimeout(function() {
                    document.documentElement.classList.remove('theme-transition')
                }, 200);
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.add('theme-transition');
                document.documentElement.setAttribute('data-theme', 'light');
                window.setTimeout(function() {
                    document.documentElement.classList.remove('theme-transition')
                }, 200);
                localStorage.setItem('theme', 'light');
            }
        }
    }
}