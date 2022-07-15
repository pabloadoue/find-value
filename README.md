# pabloadoue/find-value

This library is a fork of [find-value](https://github.com/IonicaBizau/find-value) originaly created by [IONICĂ BIZĂU](https://ionicabizau.net). I just updated the library to TypeScript so that in can be used without the need to define types, and added testing to the source code.

> Find object values by passing the path as string.

















Installation

```sh
# Using npm
npm install --save @pabloadoue/find-value

# Using yarn
yarn add @pabloadoue/find-value
```













## Example 



```ts
import findValue from "@pabloadoue/find-value";

//Any type of object
const object = {
    location: {
        planet: "Mars", 
        town: "Somewhere"
    }, 
    names: [
      {
        first: "Alice", 
        age: 19 
      },
      { 
        first: "Bob", 
        age: 20 
      }
    ]
};

console.log(findValue(object, "location.planet"));
// => "Mars"

console.log(findValue(object, "names"));
// => [ { first: "Alice", age: 19 }, { first: "Bob", age: 20 } ]

console.log(findValue(object, "names.0.first"));
// => "Alice"

console.log(findValue(object, "names.1.age"));
// => 20

console.log(findValue(object, "something.that.does.not.exist"));
// => undefined
```








## Documentation


### `findValue(object, path)`
Finds the value at given path in the specified object.

#### Params

- **Object** `object`: The input object.
- **String** `path`: The path to the value you want to find.

#### Return
- **Anything** The path value.
