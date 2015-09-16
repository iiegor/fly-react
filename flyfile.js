export default function* () {
  yield this.clear("test/example.js")
  yield this
    .source("test/example.jsx")
    .react({
      sourceMap: false,
      target: 'es5'
    })
    .target(".")
}