NHSUK.typeahead =
(function ($) {
  var maxResultCount = 10,
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

  function init() {
    suggestions.initialize();

    var $suggestionsMenu = 'suggestions-menu',
        $suggestionsList = 'suggestions-list',
        $suggestionsItem = 'suggestions-item',
        $suggestionsWrapper = 'suggestions-wrapper',
        $suggestionsItemSelected = 'suggestions-item--selected',
        $searchInputShadow = 'nhsuk-search__input--shadow',
        $iconSearch = '<svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path><image class="nhsuk-icon__search nhsuk-icon__search--fallback" src="/images/icons/icon-search-blue-20px.png" xlink:href=""></svg>',
        $suggestionsTitle = 'suggestions-title',
        $suggestionsNone = 'suggestions-none',
        $searchInput = 'nhsuk-search__input',
        $searchSubmit = 'nhsuk-search__submit',
        $searchWrap = 'nhsuk-header__search-wrap',
        $searchInputWithDropdown = 'nhsuk-search__input--withdropdown'
        $searchSubmitWithDropdown = 'nhsuk-search__submit--withdropdown',
        $searchContainer = 'nhsuk-header__search',
        $headerContent = 'nhsuk-header__content';

    $(searchField).typeahead({
      minLength: 2,
      highlight: true,
      classNames: {
        menu: $suggestionsMenu,
        suggestion: $suggestionsItem,
        highlight: '',
        selectable: 's', // unused but required for some reason
        dataset: $suggestionsWrapper,
        cursor: $suggestionsItemSelected,
        hint: $searchInputShadow
      }
    },
    {
      name : '-suggestions',
      limit: maxResultCount,
      display: 'disp',
      source: suggestions.ttAdapter(),
      templates: {
        header: '<li class="' + $suggestionsTitle + '">Search suggestions</li>',
        notFound: '<li class="' + $suggestionsNone + '">No suggestions</li>',
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
              displayitem = '<li>' + $iconSearch + '<a href="' + searchUrl + '&query=' + data.action + '">' + displayitem + '</a></li>';
              break;
            case 'E':
              displayitem = '<li>' + $iconSearch + '<a href="' + searchUrl + '&query=' + data.key + '&' + data.action + '">' + displayitem + '</a></li>';
              break;
            case 'U':
              displayitem = '<li>' + $iconSearch + '<a href="' + data.action + '">' + displayitem + '</a></li>';
              break;
            case 'C':
              displayitem = '<li>' + $iconSearch + '<a href="#" onClick="' + data.action + '">'  + displayitem + '</a></li>';
              break;
            default:
              displayitem = '<li>' + $iconSearch + '<a href="' + searchUrl + '&query=' + data.disp + '">' + displayitem + '</a></li>';
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
      $('.' + $suggestionsWrapper).wrapInner('<ul class="' + $suggestionsList + '"></ul>'); // add list element around the suggestions
      $('.' + $suggestionsList).css('width', $('.' + $searchWrap).width()); // get width of the form and give it to the dropdown list
      $('.' + $searchInput).addClass($searchInputWithDropdown); // add classes to remove border radius on input and submit fields when dropdown appears
      $('.' + $searchSubmit).addClass($searchSubmitWithDropdown);
      $('.' + $suggestionsMenu).insertAfter( $('.' + $searchContainer) ); // move the suggestions in the DOM

      // calculate where to position the dropdown from the top and left
      var headerheight = $('.' + $headerContent).height();
      var headerheightmargin = parseInt($('.' + $searchContainer).css('margin-bottom'));
      var topoffset = headerheight - headerheightmargin;
      var position = $('.' + $searchWrap).position();

      $('.' + $suggestionsMenu).css({
        'top' : topoffset,
        'left' : position.left
      });

    })
    .bind('typeahead:close', function() {
      $('.' + $searchInput).removeClass($searchInputWithDropdown);
      $('.' + $searchSubmit).removeClass($searchSubmitWithDropdown);
    })
    .bind('typeahead:idle', function() {
      $('.' + $suggestionsList).hide();
    });
  }

  return {
    init: init
  };
}(jQuery));

$(function(){
  NHSUK.typeahead.init();
  $('.nhsuk-search__input--shadow').attr('aria-hidden', 'true').addClass('visually-hidden'); // hide the extra input field created by typeahead to screen readers
});
