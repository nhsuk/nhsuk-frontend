/* eslint-disable */
(function() {
  $( document ).ready(function() {
    $(".nhsuk-c-skiplink__link").click(function(event){
      var skipTo="#"+this.href.split('#')[1];
      $(skipTo).attr('tabindex', -1).on('blur focusout', function () {
        $(this).removeAttr('tabindex');
      }).focus();
    });
  });
})();
