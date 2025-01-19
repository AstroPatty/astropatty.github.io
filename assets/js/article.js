function loadContent(articleId, url) {
  $.ajax({
    url: url,
    success: function (data) {
      $("#" + articleId).html(data);
      // Reinitialize any scripts or styles needed for the loaded content
      reinitializeScripts();
      window.location.hash = articleId;
    },
    error: function () {
      alert("Failed to load content.");
    },
  });
}

$(document).ready(function () {
  $("nav ul li a").click(function (e) {
    e.preventDefault();
    var articleId = $(this).attr("href").substring(1);
    var url = articleId + ".html";
    loadContent(articleId, url);
  });

  // Load the initial content based on the URL hash
  if (window.location.hash) {
    var initialArticleId = window.location.hash.substring(1);
    var initialUrl = initialArticleId + ".html";
    loadContent(initialArticleId, initialUrl);
  }
});
