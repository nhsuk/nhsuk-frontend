(function() {

  var searchToggle = {
    searchToggleButton: document.querySelector('.search-toggle__button'),
    searchClose: document.querySelector('.search-close'),
    search: document.querySelector('.search-container'),
    menuSearchContainer: document.querySelector('.nhsuk-global-header__menusearch'),

    doToggle: function(e) {
      e.preventDefault();

      if (this.searchToggleButton.hasAttribute("aria-expanded")) {
        this.searchToggleButton.removeAttribute("aria-expanded")
      } else {
        this.searchToggleButton.setAttribute("aria-expanded", "true")
      }

      function toggleClass(ele, class1) {
        var classes = ele.className;
        var regex = new RegExp('\\b' + ' ' + class1 + '\\b');
        var hasOne = classes.match(regex);
        class1 = class1.replace(/\s+/g, '');
        if (hasOne)
          ele.className = classes.replace(regex, '');
        else
          ele.className = classes + ' ' + class1;
      }

      toggleClass(this.searchToggleButton, 'active');
      toggleClass(this.search, 'js-show');
      toggleClass(this.menuSearchContainer, 'js-show');

    }
  };

  searchToggle.searchToggleButton.addEventListener('click', function(e) { searchToggle.doToggle(e); });
  searchToggle.searchClose.addEventListener('click', function(e) { searchToggle.doToggle(e); });

}());
