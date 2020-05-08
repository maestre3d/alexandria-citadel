// getTheme returns the global theme configuration
// Uses HTML attribute "data-theme" as root
// Uses local storage "theme" value as secondary
// Uses prefers color scheme CSS Webkit-query to override default configurations
export function getTheme() {
    let theme = 'light';

    // Use HTML attributes as root
    const htmlItem = document.documentElement.getAttribute('data-theme');
    theme = !htmlItem || htmlItem !== 'dark' ? theme : htmlItem;

    // Use disk config as secondary
    const storageItem = localStorage.getItem('theme');
    if (!htmlItem) {
        theme = !storageItem || storageItem !== 'dark' ? theme : storageItem;
        if (!storageItem || storageItem !== 'dark') {
            // Save changes to disk if non-valid value
            localStorage.setItem('theme', theme);
        }    
    }

    // iOS/Modern webkit polyfill - Override if user is using latest webkit CSS queries, just set by default
    // to avoid global overriding
    if (isUsingDarkColorScheme() && theme !== 'dark' && !storageItem) {
        localStorage.setItem('theme', 'dark');
        theme = 'dark';
    } 

    return theme;
}

function isUsingDarkColorScheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}