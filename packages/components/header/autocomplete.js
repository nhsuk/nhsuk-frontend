import accessibleAutocomplete from 'accessible-autocomplete'

function getFunnelbackQueryUrl(query) {
  const FUNNELBACK_QUERY_PATH = "https://nhs.funnelback.co.uk/s/suggest.json"
  const FUNNELBACK_MAX_RESULTS = 10
  return `${FUNNELBACK_QUERY_PATH}?collection=nhs-meta&partial_query=${query}&sort=0&fmt=json++&profile=&show=${FUNNELBACK_MAX_RESULTS}`
}

function getFunnelbackResults(query, populateResults) {
  const url = getFunnelbackQueryUrl(query)
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText)
      const results = data.map(item => {
        return item.disp
      })
      populateResults(results)
    } else {
      console.warn(xhr)
      //TODO: nice error messaging here
    }
  }
  xhr.send()
}


function autocomplete(config) {

  const defaultId = 'search-field'
  const id = (config && config.id) ? config.id : defaultId

  const fallbackInputElement = document.getElementById(id)

  const defaultConfig = {
    element: document.querySelector('#autocomplete-container'),
    id: id,
    placeholder: fallbackInputElement.placeholder,
    //displayMenu: 'overlay',
    confirmOnBlur: false,
    source: getFunnelbackResults,
  }

  const accessibleAutocompleteConfig = {
    ...defaultConfig,
    ...config,
  }

  document.getElementById(id).remove()
  accessibleAutocomplete(accessibleAutocompleteConfig)
}

export default autocomplete
