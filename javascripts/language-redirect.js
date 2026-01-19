(function () {
  // Only redirect if we are at the root or specific language agnostic paths if needed.
  // However, static sites usually load specific files.
  // 
  // Logic:
  // 1. Check if user has explicit preference in localStorage.
  // 2. If not, check navigator.language.
  // 3. If language is 'es', and current URL does not end in .es/ (or whatever the plugin generates), redirect.
  // 
  // mkdocs-static-i18n with suffix strategy usually generates:
  // / (English)
  // /es/ (Spanish) - Wait, usually it builds to a subfolder /es/ or uses query params?
  // "use_directory_urls": true (default) -> /collaborate/ (EN) vs /es/collaborate/ (ES)
  //
  // So if we are at / (root) and want ES, go to /es/

  var storageKey = "rescathena-docs-lang";
  var saved = localStorage.getItem(storageKey);
  var browserLang = navigator.language || navigator.userLanguage;
  var targetLang = 'en';

  if (saved) {
    targetLang = saved;
  } else if (browserLang.startsWith('es')) {
    targetLang = 'es';
  }

  // Current path analysis
  var path = window.location.pathname;

  // Simple redirect from root / to /es/ if needed
  // We avoid infinite loops by checking if we are already in /es/ prefix
  var isEs = path.startsWith('/es/') || path === '/es';

  if (targetLang === 'es' && !isEs) {
    // Redirect to ES version
    // Should inject /es/ at start of path
    // e.g. / -> /es/
    // /collaborate/ -> /es/collaborate/
    // Careful with base_url

    // Ensure we don't redirect if we are just exploring. 
    // usually strictly mostly for Landing Page.
    // But prompt says "detect the language... default English".

    // This is tricky on sub-pages without detailed maps.
    // Safest is to redirect HOME page only.

    if (path === '/' || path === '/index.html' || path.endsWith('/rescathena/docs-page/')) {
      window.location.replace('/es/');
    }
  }

  // Note: We don't force redirect back to EN if user is on ES, 
  // allowing them to switch manually via the UI.
})();
