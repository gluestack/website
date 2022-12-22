// Insert this script in your index.html right after the <body> tag.
// This will help to prevent a flash if dark mode is the default.

(function() {
  // Change these if you use something different in your hook.
  var storageKey = "darkMode";
  var classNameDark = "dark";
  var classNameLight = "light";

  function setClassOnDocumenHTML(darkMode) {
    document.documentElement.classList.add(
      darkMode ? classNameDark : classNameLight
    );
    document.documentElement.classList.remove(
      darkMode ? classNameLight : classNameDark
    );
  }

  var preferDarkQuery = "(prefers-color-scheme: dark)";
  var mql = window.matchMedia(preferDarkQuery);
  var supportsColorSchemeQuery = mql.media === preferDarkQuery;
  var localStorageTheme = null;
  try {
    localStorageTheme = localStorage.getItem(storageKey);
  } catch (err) {}
  var localStorageExists = localStorageTheme !== null;
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme);
  }

  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumenHTML(localStorageTheme);
  } else if (supportsColorSchemeQuery) {
    // source of truth from system
    setClassOnDocumenHTML(mql.matches);
    localStorage.setItem(storageKey, mql.matches);
  } else {
    // source of truth from document.body
    var isDarkMode = document.documentElement.classList.contains(classNameDark);
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
  }
})();
