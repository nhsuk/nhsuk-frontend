export const setupNunjucksExtensions = (env) => {
  // add support for the map filter from Jinja
  // https://jinja.palletsprojects.com/en/stable/templates/#jinja-filters.map
  //
  // [{"foo": 1}, {"foo", 2}, {}] | map(attribute=foo, default=0) -> [1, 2, 0]
  env.addFilter('map', function (arr, kwargs) {
    if (arr.map === undefined) {
      throw new TypeError('map filter: value is not mappable')
    } else if (kwargs.attribute !== undefined) {
      return arr.map((obj) => obj[kwargs.attribute] || kwargs.default)
    } else {
      throw 'map filter: only map(attribute="...") is supported'
    }
  })
}
