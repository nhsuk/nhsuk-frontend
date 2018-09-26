var NHSUK = NHSUK || {};

NHSUK.typeahead =
(function ($) {
  var maxResultCount = 10,
          hideLinkId = 'hide-link',
         suggestHost = 'nhs.funnelback.co.uk'
                     ? 'nhs.funnelback.co.uk'
                     : location.hostname,
          searchHost = 'www.nhs.uk'
                     ? 'www.nhs.uk'
                     : location.hostname,
           searchUrl = 'https://' + searchHost + '/search?collection=nhs-meta',
          suggestUrl = 'https://' + suggestHost
                        + '/s/suggest.json?collection=nhs-meta&partial_query=%QUERY&sort=0&fmt=json++&profile=&show='
                        + maxResultCount,
         suggestions = new Bloodhound({
                    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('disp'),
                    queryTokenizer: Bloodhound.tokenizers.whitespace,
                             limit: maxResultCount,
                            remote: { url : suggestUrl,wildcard: '%QUERY' }
                    }),
         searchField = '#search-field';

  function hideMenuOnClick() {
    $('.twitter-typeahead').on('click', '#' + hideLinkId,
      function(){
        $(searchField).typeahead('close');
        return false;
      }
    );
  }

  function init() {
    suggestions.initialize();

    $(searchField).typeahead({
      minLength: 2,
      highlight: true,
      classNames: {
        menu: 'c-search-menu',
        suggestion: 'c-search-menu__item',
        highlight: '',
        selectable: 'c-search-menu__item--selectable',
        dataset: 'c-search-menu__results',
        cursor: 'c-search-menu__item--selected',
        hint: 'c-search__input--shadow'
      }
    },
    {
      name : '-suggestions',
      limit: maxResultCount,
      display: 'disp',
      source: suggestions.ttAdapter(),
      templates: {
        header: '<li class="c-search-menu__prepend">Search suggestions</li>',
        notFound: '<li class="c-search-menu__nosuggestions">No suggestions</li>',
        suggestion: function(data){
          var displayitem = "";
          switch (data.disp_t) {
            case 'J':
              $.each(data.disp, function(key, value) {
                displayitem += (key, value);
                displayitem += " ";
              });
              break;

            default:

              if (data.disp.length > 36)
                displayitem = data.disp.substring(0,36)+'...';
              else
                displayitem = data.disp;
                break;
          }

          switch (data.action_t) {
            case 'Q':
              displayitem = '<li><svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"/><image class="nhsuk-icon__search nhsuk-icon__search--fallback" src="/images/icons/icon-search-blue-20px.png" xlink:href=""></svg><a href="' + searchUrl + '&query=' + data.action + '">' + displayitem + '</a></li>';
              break;
            case 'E':
              displayitem = '<li><svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"/><image class="nhsuk-icon__search nhsuk-icon__search--fallback" src="/images/icons/icon-search-blue-20px.png" xlink:href=""></svg><a href="' + searchUrl + '&query=' + data.key + '&' + data.action + '">' + displayitem + '</a></li>';
              break;
            case 'U':
              displayitem = '<li><svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"/><image class="nhsuk-icon__search nhsuk-icon__search--fallback" src="/images/icons/icon-search-blue-20px.png" xlink:href=""></svg><a href="' + data.action + '">' + displayitem + '</a></li>';
              break;
            case 'C':
              displayitem = '<li><svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"/><image class="nhsuk-icon__search nhsuk-icon__search--fallback" src="/images/icons/icon-search-blue-20px.png" xlink:href=""></svg><a href="#" onClick="' + data.action + '">'  + displayitem + '</a></li>';
              break;
            default:
              displayitem = '<li><svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"/><image class="nhsuk-icon__search nhsuk-icon__search--fallback" src="/images/icons/icon-search-blue-20px.png" xlink:href=""></svg><a href="' + searchUrl + '&query=' + data.disp + '">' + displayitem + '</a></li>';
              break;
          }

          return displayitem;
        },
      }

    })
    .bind('typeahead:open', function() {
      var val = $(searchField).typeahead('val'),
      value = $(searchField).attr('value');

      if (val === value) {
        $(searchField).typeahead('val', value);
      }
      if (val.toLowerCase() === 'enter a search term'){
        $(searchField).typeahead('val', '');
      }

    })
    .bind('typeahead:render', function() {
      $('.c-search-menu__results').wrapInner('<ul class="c-search-menu__list"></ul>');
      $('.c-search-menu__list').css('width', $('.c-search__container').width());
      $('.c-search__input').addClass('c-search__input--dropdown');
      $('.c-search__submit').addClass('c-search__submit--dropdown');
      $('.c-search-menu').insertAfter( $('.nhsuk-global-header__search') );

      // calculate where to position the dropdown from the top and left
      var headerheight = $('.nhsuk-global-header__menusearch').height();
      var headerheightmargin = parseInt($('.nhsuk-global-header__search').css('margin-bottom'));
      var topoffset = headerheight - headerheightmargin;
      var position = $('.search-container').position();

      $('.c-search-menu').css({
        'top' : topoffset,
        'left' : position.left
      });

    })
    .bind('typeahead:close', function() {
      $('.c-search__input').removeClass('c-search__input--dropdown');
      $('.c-search__submit').removeClass('c-search__submit--dropdown');
    })
    .bind('typeahead:idle', function() {
      $('.c-search-menu__list').hide();
    });
  }

  return {
    init: init
  };
}(jQuery));

$(function(){
  NHSUK.typeahead.init();
  $('.c-search__input--shadow').attr('aria-hidden', 'true').addClass('visually-hidden'); // hide the extra input field created by typeahead to screen readers
  $('.c-search__input.tt-input').attr('role', 'textbox');
});
