const react = require("react-tools").transform
const assign = require("object-assign")

module.exports = function (debug) {
  this.filter("react", (data, options) => {
    let result = react(data.toString(), options)

    return assign({ ext: '.js' }, { code: result })
  })
}