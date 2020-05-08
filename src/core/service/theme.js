export function getTheme() {
    const storageItem = localStorage.getItem('theme');
    let theme = !storageItem || storageItem !== 'dark' ? 'light' : storageItem;

    // iOS/Modern webkit polyfill - Override if user is using latest webkit CSS queries, just set by default
    // to avoid global overriding
    if (isUsingDarkColorScheme() && !storageItem) {
        localStorage.setItem('theme', 'dark');
        theme = 'dark';
    } else if (!storageItem || storageItem !== 'dark') {
        // Save config to disk
        localStorage.setItem('theme', theme);
    }    

    return theme;
}

function isUsingDarkColorScheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}