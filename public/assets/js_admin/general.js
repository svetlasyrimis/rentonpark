$(function() {
  $("#sign_up").on("click", function() {
    window.sessionStorage.clear();
    document.getElementById("link_home").click();
  });
});
