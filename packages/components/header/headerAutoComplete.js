import AutoComplete from './autoCompleteConfig';

/**
 * Check if search URLs are set as globals on window object,
 * Use URL from global or default to live URLs
*/
const searchApiUrl = (window.NHSUK_SETTINGS && window.NHSUK_SETTINGS.SUGGESTIONS_TEST_HOST) || 'https://www.nhs.uk/s/suggest.json';
const searchPageUrl = (window.NHSUK_SETTINGS && window.NHSUK_SETTINGS.SEARCH_TEST_HOST) || 'https://www.nhs.uk/search/';

/**
 * Function to build truncated result with svg for search autocomplete
 * @param {string} result String containing individual result from autocomplete source function
 * @returns {string} String of HTML containing passed result
*/
const suggestion = (result) => {
  const truncateLength = 36;
  const dots = result.length > truncateLength ? '...' : '';
  const resultTruncated = result.substring(0, truncateLength) + dots;
  return `
    <svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path></svg>
    <a href="${searchPageUrl}?q=${result}">
      ${resultTruncated}
    </a>
  `;
};

/**
 * Function to populate the search autocomplete.
 * @param {string} query Query to pass to search API
 * @param {function} populateResults Callback function passed to source by autocomplete plugin
*/
const source = (query, populateResults) => {
  // Build URL for search endpoint
  const maxResults = 10;
  const fullUrl = `${searchApiUrl}?collection=nhs-meta&partial_query=${query}&sort=0&fmt=json++&profile=&show=${maxResults}&q=${query}&api-version=1`;

  // Async request for results based on query param
  const xhr = new XMLHttpRequest();
  xhr.open('GET', fullUrl);
  xhr.onload = () => {
    if (xhr.status === 200) {
      // Array of display values from json
      const results = JSON.parse(xhr.responseText)
        // Handle new search API or Funnelback
        .map((result) => result.query || result.disp);

      // Fire callback from autoComplete plugin
      populateResults(results);
    }
    // No message required for error... fails silently to standard form
  };
  xhr.send();
};

export default () => {
  AutoComplete({
    containerId: 'autocomplete-container',
    formId: 'search',
    inputId: 'search-field',
    source,
    templates: {
      suggestion,
    },
  });
};
