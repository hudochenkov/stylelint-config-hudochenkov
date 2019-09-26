# stylelint-config-hudochenkov [![Build Status][ci-img]][ci]

My config for [stylelint]. Uses rules from [`stylelint-order`] and  [`stylelint-scss`].

## Installation

```
npm install --save-dev stylelint-config-hudochenkov stylelint-config-recommended stylelint-order stylelint-scss
```

## Usage

Add the following in your `.stylelintrc`:

```json
{
	"extends": "stylelint-config-hudochenkov"
}
```

[ci-img]: https://travis-ci.org/hudochenkov/stylelint-config-hudochenkov.svg
[ci]: https://travis-ci.org/hudochenkov/stylelint-config-hudochenkov
[stylelint]: https://stylelint.io/
[`stylelint-order`]: https://github.com/hudochenkov/stylelint-order
[`stylelint-scss`]: https://github.com/kristerkari/stylelint-scss
