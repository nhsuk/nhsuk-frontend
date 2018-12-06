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
        minLength: 2,
        //cssNamespace:
        placeholder: fallbackInputElement.placeholder,
        //displayMenu: 'overlay', this need enable but currently breaks.
        confirmOnBlur: false,
        onConfirm: (SelectiedContent) => {
            window.open("https://www.nhs.uk/search/?q=" + SelectiedContent, "_self")
        },
        source: getFunnelbackResults,
        templates: {
            // inputValue: inputValueTemplate,
            suggestion: suggestionTemplate
        }

    }

    function inputValueTemplate(result) {

        function treff() {
            window.open(result) // just here so we can inspect the dropdown
        }

    }

    function suggestionTemplate(result) {

        var truncateLength = 36; //Same value as previous one
        var dots = result.length > truncateLength ? '...' : '';
        result = result.substring(0, truncateLength) + dots;

        if (!result) {
            return "";
        }

        var TypedText = document.getElementById(id).value
        var expr = TypedText;
        expr = expr.replace(/\s+/, "|", TypedText);
        var regex = new RegExp(expr, "gi"); //g = global, match all instances & i = case insensitive 
        result = '<a href="">' + result + '</a>' //link example - just here for formatting
        return result.replace(regex, function($1) {
            return '<b>' + $1 + '</b>';
        });

    }
    const accessibleAutocompleteConfig = {
        ...defaultConfig,
        ...config,
    }
    document.getElementById(id).remove()
    accessibleAutocomplete(accessibleAutocompleteConfig)

}

export default autocomplete