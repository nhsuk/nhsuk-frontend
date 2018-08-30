(function() {

	var menuToggle = {
		menuToggleButton: document.querySelector('.menu-toggle__button'),
		menuClose: document.querySelector('.c-nav-primary__close-link'),
  	nav: document.querySelector('.c-nav-primary'),

		doToggle: function(e) {
			e.preventDefault();

      if (this.menuToggleButton.hasAttribute("aria-expanded")) {
        this.menuToggleButton.removeAttribute("aria-expanded")
      } else {
        this.menuToggleButton.setAttribute("aria-expanded", "true")
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

      toggleClass(this.menuToggleButton, 'active');
      toggleClass(this.nav, 'js-show');

		}
	};

	menuToggle.menuToggleButton.addEventListener('click', function(e) { menuToggle.doToggle(e); });
	menuToggle.menuClose.addEventListener('click', function(e) { menuToggle.doToggle(e); });

}());
