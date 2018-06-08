// // const vuedoc = require('@vuedoc/parser')
// const Parser = require('@vuedoc/parser/lib/parser')

// const options = {
//   filename: 'test/fixtures/checkbox.vue',
//   features: Parser.SUPPORTED_FEATURES.filter((feature) => feature !== 'data')
// }

// vuedoc.parse(options)
//   .then((component) => Object.keys(component))
//   .then((keys) => console.log(keys)) // => { name, description, keywords, props, computed, events, methods }
//   .catch((err) => console.error(err))