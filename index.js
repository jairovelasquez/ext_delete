(async function(codioIDE, window) {

  // Load jQuery first (Bootstrap dependency)
  codioIDE.guides.addScript(
    "https://code.jquery.com/jquery-3.7.1.min.js"
  );

  // Load Bootstrap JS
  codioIDE.guides.addScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"
  );

})(window.codioIDE, window);
