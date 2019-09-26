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
  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const results = data.map(item => item.disp);
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

  if (!fallbackInputElement) {
    return;
  }

  function suggestionTemplate(result) {
    const truncateLength = 36;
    const dots = result.length > truncateLength ? '...' : '';
    const resultTruncated = result.substring(0, truncateLength) + dots;
    const svgIcon = '<svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path></svg>';
    const resultsHref = `<a href="https://www.nhs.uk/search?collection=nhs-meta&query=${result}">${resultTruncated}</a>`;

    return svgIcon + resultsHref;
  }

  const defaultConfig = {
    confirmOnBlur: false,
    element: document.querySelector('#autocomplete-container'),
    id,
    minLength: 2,
    name: fallbackInputElement.name,
    onConfirm: (SelectedContent) => {
      window.open(`https://www.nhs.uk/search?collection=nhs-meta&query=${SelectedContent}`, '_self');
    },
    placeholder: fallbackInputElement.placeholder,
    source: getFunnelbackResults,
    templates: {
      suggestion: suggestionTemplate,
    },
  };

  const accessibleAutocompleteConfig = {
    ...defaultConfig,
    ...config,
  };

  const idToremove = document.getElementById(id);
  idToremove.parentNode.removeChild(idToremove);
  accessibleAutocomplete(accessibleAutocompleteConfig);
}

window.addEventListener('load', () => {
  // Handle the enter keydown event to perform search
  const input = document.getElementById('search');
  if (input) {
    input.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        document.querySelector('.nhsuk-search__submit').click();
      }
    });
  }
});

export default autocomplete;
