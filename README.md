# stylelint-config-hudochenkov

My configs for [Stylelint]. Uses rules from [`stylelint-order`].

Available configs:

* `stylelint-config-hudochenkov` — default config which includes rules from Stylelint core only.
* `stylelint-config-hudochenkov/order` — config for order of content within declaration blocks and properties order. Uses [`stylelint-order`].
* `stylelint-config-hudochenkov/full` — combines all configs above.

## Installation

Install config:

```
npm install --save-dev stylelint-config-hudochenkov
```

## Usage

Add chosen config to the [`extends` section](https://stylelint.io/user-guide/configure#extends) of your Stylelint configuration:

```
{
	"extends": ["stylelint-config-hudochenkov"]
}
```

```
{
	"extends": ["stylelint-config-hudochenkov/full"]
}
```

Recommended to run Stylelint with [`--max-warnings` flag](https://stylelint.io/user-guide/usage/options#maxwarnings), because many rules has [`warning` severity](https://stylelint.io/user-guide/configure#severity):

```
stylelint "**/*.css" --max-warnings 0
```

[Stylelint]: https://stylelint.io/
[`stylelint-order`]: https://github.com/hudochenkov/stylelint-order
