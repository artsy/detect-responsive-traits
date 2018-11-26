# detect-responsive-traits

This package provides information about devices, based on their reported user-agent, that gives insight into what
responsive traits the device has. This can be used with a package such as [react-responsive-media][rrm] to only render
markup on the server that the device actually supports and reduce the amount of bytes that need to be sent.

This package only cares about the viewport ‘width’ that the device supports, as that’s the only dimension that Artsy’s
designs take into consideration.

## Usage

The package exports a single `findDevice` function, which given a user-agent string finds the first entry from the
exported `Devices` list that matches. The result has the following fields of interest:

```ts
{
    minWidth: number
    maxWidth: number
    resizable: boolean
    touch: boolean
}
```

In case resizing is supported, the device should be considered as being able to display at any size between `minWidth`
and `maxWidth`. In case resizing is not supported, `minWidth` and `maxWidth` should be considered as the only two
possible width values.

The `touch` value indicates if the device has a touch-screen.

See the [react-responsive-media example app][rrm-example] for a demonstration of how to use this.

## How do I work on this?

```sh
git clone https://github.com/artsy/detect-responsive-traits.git
cd detect-responsive-traits
yarn install

# Open VS Code with `code .`

# Run tests
yarn jest
```

## How do I deploy this?

```sh
yarn release
```

[rrm]: https://github.com/artsy/react-responsive-media
[rrm-example]: https://github.com/artsy/react-responsive-media/blob/master/example/server.tsx