/* eslint-disable */
(function() {
  // Change background colour (for user research testing purposes)
  var hexCode = getParameterByName('background');
  var bodyElement = document.body;

  if(hexCode) {
    bodyElement.setAttribute("style", "background-color: #" + hexCode);
  }

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }


  // skip link focus fix
  $( document ).ready(function() {
    $(".c-skiplink__link").click(function(event){
      var skipTo="#"+this.href.split('#')[1];
      $(skipTo).attr('tabindex', -1).on('blur focusout', function () {
        $(this).removeAttr('tabindex');
      }).focus();
    });
  });

})();
