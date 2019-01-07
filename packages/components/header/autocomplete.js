import accessibleAutocomplete from 'accessible-autocomplete';

function getFunnelbackQueryUrl(query) {
  const FUNNELBACK_QUERY_PATH = 'https://nhs.funnelback.co.uk/s/suggest.json';
  const FUNNELBACK_MAX_RESULTS = 10;
  return `${FUNNELBACK_QUERY_PATH}?collection=nhs-meta&partial_query=${query}&sort=0&fmt=json++&profile=&show=${FUNNELBACK_MAX_RESULTS}`;
}

function getFunnelbackResults(query, populateResults) {
  const url = getFunnelbackQueryUrl(query);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const results = data.map(item => {
        return item.disp;
      });
      populateResults(results);
    } else {
      // TODO: nice error messaging here
      // console.warn(xhr);
    }
  };
  xhr.send();
}

function autocomplete(config) {
  const defaultId = 'search-field';
  const id = (config && config.id) ? config.id : defaultId;

  const fallbackInputElement = document.getElementById(id);

  function suggestionTemplate(result) {
    const truncateLength = 36;
    const dots = result.length > truncateLength ? '...' : '';
    result = result.substring(0, truncateLength) + dots;

    if (!result) {
      return '';
    }

    var TypedText = document.getElementById(id).value;
    var expr = TypedText;
    expr = expr.replace(/\s+/, '|', TypedText);
    var regex = new RegExp(expr, 'gi');
    result = '<a href="">' + result + '</a>';
    return result.replace(regex, function ($1) {
      return '<b>' + $1 + '</b>';
    });
  }

  const defaultConfig = {
    element: document.querySelector('#autocomplete-container'),
    id: id,
    minLength: 2,
    placeholder: fallbackInputElement.placeholder,
    // TO DO:
    // cssNamespace: ??
    // displayMenu: 'overlay', this need enable but currently breaks.
    confirmOnBlur: false,
    onConfirm: (SelectedContent) => {
      window.open('https://www.nhs.uk/search/?q=' + SelectedContent, '_self');
    },
    source: getFunnelbackResults,
    templates: {
      suggestion: suggestionTemplate,
    },
  };

  const accessibleAutocompleteConfig = {
    ...defaultConfig,
    ...config,
  };

  document.getElementById(id).remove();
  accessibleAutocomplete(accessibleAutocompleteConfig);
}

export default autocomplete;
