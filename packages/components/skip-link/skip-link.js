// When using VoiceOver on iOS, focus remains on the skip link anchor when
// selected so the next focusable element is not at the jumped to area.
// This Javascript hack focuses on the first H1 header (if one exists, which it
// should) by adding tabindex = -1 to it and then removes it when focus is
// off it.

document.addEventListener('DOMContentLoaded', function() {

  var skip = {

    link: document.querySelector('.nhsuk-c-skip-link'),
    header: document.getElementsByTagName('H1')[0],

    doFocus: function(e) {
      this.header.setAttribute('tabIndex', '-1');
      this.header.focus();
    },

    doLeave: function(e) {
      this.header.removeAttribute('tabIndex');
    }

  }

  if (skip.link) {

    skip.link.addEventListener('click', function(e) {
      e.preventDefault();
      skip.doFocus(e);
    });

  }

  if (skip.header) {

    skip.header.addEventListener('blur', function(e) {
      skip.doLeave(e);
    });

  }

})
