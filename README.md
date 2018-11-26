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

## Caveats

We only cover user-agents of which we’ve seen more than 1000 visits over the past 2 weeks on [artsy.net][artsy]. When
new devices appear in that list we’ll _add_ those to the existing coverage. Having said that, we very much appreciate
additional coverage in the form of pull-requests!

In our current Android coverage we have many devices defined with a `minWidth` of `0`, because we haven’t yet determined
what the minimum width is on these devices that Chrome will display at when resizing the window. In case you own these
devices, please visit a site that reports the [viewport][] and test what the minimum width is both in portrait and
landscape mode.

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

[artsy]: https://www.artsy.net
[rrm]: https://github.com/artsy/react-responsive-media
[rrm-example]: https://github.com/artsy/react-responsive-media/blob/master/example/server.tsx
[viewport]: http://viewportsizes.com/mine