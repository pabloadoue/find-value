# find-value [![Support this project][donate-now]][paypal-donations]

Find object values by passing the path as string.

## Installation

```sh
$ npm i --save find-value
```

## Example

```js
const findValue = require("find-value");

// Some random object :)
const obj = {
    location: {
        planet: "Mars"
      , town: "Somewhere"
    }
  , names: [
        { first: "Alice", age: 19 }
      , { first: "Bob", age: 20 }
    ]
};

console.log(findValue(obj, "location.planet"));
// => "Mars"

console.log(findValue(obj, "names"));
// => [ { first: "Alice", age: 19 }, { first: "Bob", age: 20 } ]

console.log(findValue(obj, "names.0.first"));
// => "Alice"

console.log(findValue(obj, "names.1.age"));
// => 20

console.log(findValue(obj, "something.that.does.not.exist"));
// => undefined
```

## Documentation

### `findValue(obj, path)`
Finds the value at given path in the specified object.

#### Params
- **Object** `obj`: The input object.
- **String** `path`: The path to the value you want to find.

#### Return
- **Anything** The path value.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md