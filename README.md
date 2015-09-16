<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [react](https://www.npmjs.com/package/react-tools#transform-inputstring-options) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][mit-badge]][mit]

## Usage
> Check out the [documentation](https://github.com/Microsoft/TypeScript) to see the available options.

### Install

```a
npm install -D fly-react
```

### Example

Check [flyfile.js](https://github.com/kashiro/fly-react/blob/master/flyfile.js) and [test](https://github.com/iiegor/fly-react/blob/master/test) directory :)

```js
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
```

# License

[MIT][mit] © Iegor Azuaga


[mit]:          http://opensource.org/licenses/MIT
[contributors]: https://github.com/iiegor/fly-react/graphs/contributors
[releases]:     https://github.com/iiegor/fly-react/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-react
[npm-ver-link]: https://img.shields.io/npm/v/fly-react.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-react.svg?style=flat-square
