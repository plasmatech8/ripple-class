# ripple-class · [![npm version](https://badge.fury.io/js/ripple-class.svg?1)](https://badge.fury.io/js/ripple-class)

Add a material ripple effect by adding a `.ripple` class to any HTML element.

[See the demo](https://ripple-class.pages.dev/)

![](https://raw.githubusercontent.com/plasmatech8/ripple-class/main/img/example.png)

Works great with TailwindCSS.

## Setup

Install the package.

```bash
npm install ripple-class
```

Import the ripple library.
```ts
import "ripple-class";
```

> If module imports do not work, try the dynamic import function: `import('ripple-class')`

## Usage

Add a ripple listener to a HTML element by adding the `ripple` class name.
```html
<button class="ripple">Click Me!</button>
```

![](img/default_ripple_demo.gif)

## Customization

You can use the CSS variables to change the ripple color, duration and scale.
```css
.custom-ripple {
    --ripple-color: rgba(255, 0, 0, 0.8);    /* Default: rgba(255, 255, 255, 0.6) */
    --ripple-duration: 1200ms;               /* Default: 600ms */
    --ripple-scale: 1;                       /* Default: 4 */
}
```
```html
<button class="ripple custom-ripple">Click Me!</button>
```

![](img/custom_ripple_demo.gif)

## Caveat

The `.ripple` class applies the following styles to your element:
| Style                       | Purpose                                                                                                                                                                                                                                                              |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `transform: translateZ(0);` | Applied because the ripple objects use absolute positioning which requires either a set `transform` or a non-static `position`. Otherwise, when the element is `position: static;`, the ripple object will be created at incorrect coordinates (outside the target). |
| `overflow: hidden;`         | Applied to prevent the ripple from overflowing from the parent. This is applied for convenience. The ripple will still work with any other overflow setting but may come with side-effects.                                                                          |

The ripple target also needs to be either a block or inline-block display element.

## Development

Package and website is developed using SvelteKit.

Package code is located under [src/lib](https://github.com/plasmatech8/ripple-class/tree/main/src/lib).

Run demo website with development server:
```bash
npm run dev
```

Build demo website for production and serve:
```bash
npm run build:website
npm run preview
```

Build the package and deploy to NPM:
```bash
npm run build:package
npm publish ./package
```